import React from 'react';
import ProductItem from './ProductItem';

function ProductTable({ products, onEditClick, onDeleteClick }) {
  return (
    <table id="product-table">
      {/* ... Table header ... */}
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Description</th>
        </tr>
      </thead>

      {/* ... Table body ... */}
      <tbody>
        {products.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
            onEditClick={() => onEditClick(product)}
            onDeleteClick={() => onDeleteClick(product)}
          />
        ))}
      </tbody>
    </table>
  );
}

export default ProductTable;