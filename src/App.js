import { useState } from 'react';

function App() {
  const [products, setProducts] = useState([]);
  const renderProducts = products.map((product, index) => (
    <tr key={index}>
      <td>{product.name}</td>
      <td>{product.price}</td>
    </tr>
  ));

  async function fetchData() {
    // Try...catch for error handling
    try {
      const response = await fetch('https://au-case-webapi.azurewebsites.net/api/products');
      if (!response.ok) {
        throw new Error('Failed to fetch');
      }
      const data = await response.json();
      // update Products using fetched data
      setProducts(data);
    } catch (error) {
      console.error('Error fetching data:', error);
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
          <button type="submit" className="button">Hent alle produkter</button>
        </form>
      </div>
      <div className="page__content__block">
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
      </div>
    </>
  );
}

export default App;
