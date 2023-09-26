import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import ProductForm from '../products/productForm.js';
import ProductService from '../../services/productsService'; // Correctly import your service module

function CustomModal({ isOpen, onClose, mode, initialProduct, onCreate, onUpdate }) {
  const handleClose = () => {
    onClose();
  };

  const handleFormSubmit = async (formData) => {
    try {
      if (mode === 'create') {
        // Call the service method to create a new product
        const createdProduct = formData;

        // This line was a massively annoying bug causing duplication because it was called in another module as well
        // I'm leaving it in because it may be useful for study later or restructuring the code
        // const createdProduct = await ProductService.createProduct(createdProduct);

        // Pass the created product to the callback function
        onCreate(createdProduct);
      } else if (mode === 'update') {
        // Call the service method to update the product
        const updatedProduct = await ProductService.updateProduct(initialProduct.id, formData);

        // Pass the updated product to the callback function
        onUpdate(updatedProduct);
      }

      // Close the modal
      handleClose();
    } catch (error) {
      // Handle errors here (e.g., show an error message to the user)
      console.error('Error:', error);
    }
  };

  return (
    <Modal show={isOpen} onHide={handleClose} className="custom-modal">
      <Modal.Header className="custom-modal-header">
        <Modal.Title>{mode === 'create' ? 'Create Product' : 'Update Product'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ProductForm
          initialProduct={initialProduct}
          onSubmit={handleFormSubmit}
        />
      </Modal.Body>
    </Modal>
  );
}

export default CustomModal;