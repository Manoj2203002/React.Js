import React, { useEffect, useState } from 'react';

const Api = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json()) // Convert response to JSON
      .then((data) => setData(data)) // Set the data to state
      .catch((err) => console.error('Error fetching data:', err)); // Handle any errors
  }, []); // Empty dependency array ensures useEffect runs only once

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {data.map((product) => (
          <li key={product.id}>
            <h2>{product.title}</h2>
            <img src={product.image} alt={product.title} width="100" />
            <p>Price: ${product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Api;
