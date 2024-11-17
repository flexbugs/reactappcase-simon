import { useState } from 'react';

function App() {
  const [products, setProducts] = useState([]);
  const renderProducts = products.map((product, index) => (
    <tr key={index}>
      <td>{product.name}</td>
      <td>{product.price}</td>
    </tr>
  ));

  return (
    <>
      <div className="page__content__block">
        <h1>Produktoversigt</h1>
        <form action="" className="form" onSubmit={(e) => {
          e.preventDefault();
          setProducts([
            { name: 'Produkt 1', price: 100 },
            { name: 'Produkt 2', price: 200 },
            { name: 'Produkt 3', price: 300 },
          ]);
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
