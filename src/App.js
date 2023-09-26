import './App.css';
import React, { useState, useEffect } from "react";
import ProductList from './components/products/productList';
import Navbar from './components/smallComponents/navbar.js';
import Modal from './components/smallComponents/modal';

// Import hooks from hooks folder
import useModal from './hooks/useModal'; // Import the custom modal hook
import useProducts from './hooks/useProducts'; // Import the custom products hook

// CSS Imports | Says unused, but applies on render
import 'bootstrap/dist/css/bootstrap.min.css';
import redOverride from './css/bootstrap.css';
import productStyles from './css/product.css';
import modalStyles from './css/modal.css';

function App() {
  
  const { products, setProducts } = useProducts(); // Destructure the useProducts hook
  const { isModalOpen, editProduct, mode, openModal, closeAndResetModal, setEditProduct, setMode } = useModal();

  const handleEditClick = (product) => {
    if (!isModalOpen) {
      openModal();
    }
    setEditProduct(product);
    setMode('update');
  };

  
  useEffect(() => {
    console.log('app.js console.log.  Products updated:', products);
  }, [products]);


  return (
    <div className="App">
      <Navbar />
      <ProductList products={products} onEditClick={handleEditClick} />
    </div>
  );
}

export default App;