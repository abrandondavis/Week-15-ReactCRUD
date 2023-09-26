import { useState, useEffect } from 'react';
import ProductService from '../services/productsService'; // Import your product service module

function useProducts() {
  const [products, setProducts] = useState([]); // Initialize products state

  useEffect(() => {
    async function fetchProducts() {
      try {
        // Fetch products data from the ProductService module
        const data = await ProductService.getProducts();

        // Update the products state with the fetched data
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    }

    fetchProducts(); // Call the fetchProducts function when the component mounts
  }, []);

  return { products, setProducts }; // Make sure to return both products and setProducts
}

export default useProducts;
