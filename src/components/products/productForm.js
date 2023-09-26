import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function ProductForm({ initialProduct, onSubmit }) {
  const [product, setProduct] = useState(initialProduct || { name: '', price: '', description: '' });

  useEffect(() => {
    // Update the form fields if initialProduct changes (for editing)
    if (initialProduct) {
      setProduct(initialProduct);
    }
  }, [initialProduct]);

  const handleChange = (e) => {
    const { name, value, } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call the onSubmit callback with the product data
    onSubmit(product);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="productName">Product Name:</label>
        <input
          type="text"
          id="productName"
          name="name"
          value={product.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="productPrice">Product Price:</label>
        <input
          type="number"
          id="productPrice"
          name="price"
          placeholder="Must be a number"
          value={product.price}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="productDescription">Product Description:</label>
        <textarea
          id="productDescription"
          name="description"
          value={product.description}
          onChange={handleChange}
          required
        ></textarea>
      </div>
      <button type="submit" className='btn btn-primary'>
        {initialProduct ? 'Update Product' : 'Create Product'}
      </button>
    </form>
  );
}

export default ProductForm;