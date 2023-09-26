import React, { useState, useEffect } from "react";
import ProductService from "../../services/productsService"; // Import the ProductService module
import ProductTable from "./productTable"; // Import the ProductTable component
import Modal from "../smallComponents/modal"; // Import the Modal component

function ProductList() {
  // Define state variables
  const [products, setProducts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editProduct, setEditProduct] = useState(null);

  // Function to open the modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal and clear editProduct
  const closeAndClearModal = () => {
    setIsModalOpen(false);
    setEditProduct(null);
  };

  // Function to open the modal in edit mode
  const onOpenModal = (product) => {
    setEditProduct(product);
    setIsModalOpen(true);
  };


  // Function to handle the update of products
  const handleUpdate = async (formData) => {
    try {
      // Call your ProductService's updateProduct method to update the product
      const updatedProduct = await ProductService.updateProduct(editProduct.id, formData);

      // Update the products list in the state with the updated product
      setProducts((prevProducts) =>
        prevProducts.map((p) => (p.id === updatedProduct.id ? updatedProduct : p))
      );

      // Close the modal
      closeAndClearModal();
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  // Function to handle the deletion of products
  const onDeleteClick = async (product) => {
    try {
      // Call your ProductService's deleteProduct method to delete the product
      await ProductService.deleteProduct(product.id);

      // After successful deletion, update the products list in the state
      // by filtering out the deleted product
      setProducts((prevProducts) => prevProducts.filter((p) => p.id !== product.id));
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  // Use useEffect to fetch products when the component mounts and after creating/updating a product
  useEffect(() => {
    // Fetch products data from the ProductService module
    const fetchProducts = async () => {
      try {
        const data = await ProductService.getProducts();
        setProducts(data);
        console.log('***productList.js:50 product fetch');
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts(); // Call the fetchProducts function when the component mounts
  }, []);

  // useEffect to log products updates
  useEffect(() => {
    console.log('Products updated:', products);
  }, [products]);

  // Function to handle the creation of products
  const handleCreate = async (formData) => {
    try {
      console.log('handleCreate activate');
      console.log('isModalOpen:', isModalOpen);

      const createdProduct = await ProductService.createProduct(formData);
      console.log('Created product:', createdProduct);
      setProducts((prevProducts) => [...prevProducts, createdProduct]);
      console.log('After set products fires');

      closeAndClearModal();
    } catch (error) {
      console.error('Error creating product:', error);
    }
  };

  return (
    <div id="product-list">
      <h1>Product List</h1>
      {/* Button to open the modal */}
      <button onClick={openModal} className="btn btn-primary new-product-button">
        New Product
      </button>
      <ProductTable products={products} onEditClick={onOpenModal} onDeleteClick={onDeleteClick} />
      <Modal
        isOpen={isModalOpen}
        onClose={closeAndClearModal}
        mode={editProduct ? "update" : "create"}
        initialProduct={editProduct || null}
        // Function to handle product creation
        onCreate={handleCreate}
        onUpdate={handleUpdate}
      />
    </div>
  );
}

export default ProductList; // Export the ProductList component


