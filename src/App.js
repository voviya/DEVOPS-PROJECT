import React, { useState } from 'react';
import './App.css';

const products = [
  { id: 1, name: 'T-Shirt', price: 20, image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80' },
  { id: 2, name: 'Shoes', price: 50, image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNob2VzfGVufDB8fDB8fHww' },
  { id: 3, name: 'Cap', price: 10, image: 'https://images.unsplash.com/photo-1521369909029-2afed882baee?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 4, name: 'Jeans', price: 40, image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM4fHx8ZW58MHx8fHx8' },
  { id: 5, name: 'Jacket', price: 85, image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 6, name: 'Backpack', price: 60, image: 'https://images.unsplash.com/photo-1622560481156-01fc7e1693e6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D' },
  { id: 7, name: 'Sunglasses', price: 25, image: 'https://plus.unsplash.com/premium_photo-1664110690565-b9579c514257?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D' },
  { id: 8, name: 'Watch', price: 120, image: 'https://images.unsplash.com/photo-1604242692760-2f7b0c26856d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d2F0Y2hlc3xlbnwwfHwwfHx8MA%3D%3D' },
  { id: 9, name: 'Handbag', price: 95, image: 'https://images.unsplash.com/photo-1601924349924-e2da825ad42a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aGFuZGJhZ3N8ZW58MHx8MHx8fDA%3D' },
  { id: 10, name: 'Dress', price: 70, image: 'https://plus.unsplash.com/premium_photo-1664202526535-c01e4b0c42b7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDMyfHx8ZW58MHx8fHx8' },
  { id: 11, name: 'Chocolates', price: 55, image: 'https://images.unsplash.com/photo-1591084616291-c9ef84bbc70b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 12, name: 'Cookies', price: 18, image: 'https://images.unsplash.com/photo-1554175231-8367073ba4e3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8' },
];

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="App">
      <header className="header">
        <h1>🛒 E-Commerce Store</h1>
        <p className="catchy-line">Shop now and upgrade your life!</p>
      </header>
      <br />
      <div className="products">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-img" />
            <h3>{product.name}</h3>
            <p className="price">${product.price}</p>
            <button onClick={() => addToCart(product)} className="add-btn">Add to Cart</button>
          </div>
        ))}
      </div>
      <hr />
      <section className="cart-section">
        <h2>Cart ({cart.length} items)</h2>
        <ul className="cart-list">
          {cart.map((item, i) => (
            <li key={i}>{item.name} - ${item.price}</li>
          ))}
        </ul>
        <h3>Total: ${total}</h3>
      </section>
      
    </div>
  );
}

export default App;
