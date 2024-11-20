import { useState } from 'react';

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const renderProducts = products.map((product, index) => (
    <tr key={index}>
      <td>{product.name}</td>
      <td>{product.price}</td>
    </tr>
  ));

  async function fetchData() {
    setLoading(true);
    setError(null); // Reset error
    try {
      const response = await fetch('https://au-case-webapi.azurewebsites.net/api/products');
      if (!response.ok) {
        throw new Error('Failed to fetch');
      }
      const data = await response.json();
      // update Products using fetched data
      setProducts(data);
    } catch (error) {
      setError('Something went wrong. Please try again.')
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <div className="page__content__block">
        <h1>Produktoversigt</h1>
        <form action="" className="form" onSubmit={(e) => {
          e.preventDefault();
          fetchData();
        }}>
          <button type="submit" className="button" disabled={loading}>
            {loading ? 'Henter...' : 'Hent alle produkter'}
          </button>
        </form>
      </div>
      <div className="page__content__block">
        {error && <p className="error">{error}</p>} {/* Show error message if any */}
          {loading && <p>Henter...</p>} {/* Show loading message while fetching */}
          {!loading && !error && (
          <table className="table">
            <thead>
              <tr>
                <th>Produkt</th>
                <th>Pris</th>
              </tr>
            </thead>
            <tbody>
              {renderProducts}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
}

export default App;
