import React, { useEffect, useState } from 'react';
import './App.scss'

const Apps = () => {
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5; // Set to 5 items per page

    // Fetch products from the API
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((response) => {
               return response.json();
            })
            .then((data) => {
                setProducts(data);
            })          
    }, []);
    const indexOfLastProduct = currentPage * itemsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const totalPages = Math.ceil(products.length / itemsPerPage);

    return (
        <div>
            <h1>Product List</h1>
            <ol>
                {currentProducts.map(product => (
                    <li key={product.id}>
                        <h2>{product.title}</h2>
                        <p>{product.description}</p>
                        <img src={product.image} width={'100px'} height={'100px'} alt="" />
                        <p>Price: ${product.price}</p>
                    </li>
                ))}
            </ol>
            <div className="pagination">
                <button 
                    onClick={() => handlePageChange(currentPage - 1)} 
                    disabled={currentPage === 1}>Prev </button>
                <span>{currentPage}</span>
                <button 
                    onClick={() => handlePageChange(currentPage + 1)} 
                    disabled={currentPage === totalPages}>Next </button>
            </div>
        </div>
    );
};

export default Apps;