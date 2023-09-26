import React from "react";

// Returns Product as a table row
function ProductItem({ product, onEditClick, onDeleteClick }) {
  const handleEditClick = () => {
    // Trigger the onEditClick callback with the product data
    onEditClick(product);
  };

  const handleDeleteClick = () => {
    onDeleteClick(product);
  };

    const productPrice = parseFloat(product.price).toFixed(2);

  return (
    <tr>
      <td>{product.name}</td>
      <td>${productPrice}</td>
      <td>{product.description} Product ID: {product.id}</td>
      <td>
        <button className="product-button" onClick={handleEditClick}>
          Edit
        </button>
        <span> | </span>
        <button className="product-button" onClick={handleDeleteClick}>
          Delete
          </button>
      </td>
    </tr>
  );
}

export default ProductItem;