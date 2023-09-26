const Default_URL = 'https://64f40193932537f4051a10a6.mockapi.io/api/inventory/';

class ProductService {
  constructor(url) {
    this.url = url || Default_URL; // Assign the provided URL or use the default
  }

  // Create | POST
  async createProduct(productData) {
    try {
      // Attempt to create a new product by sending a POST request to the API
      const response = await fetch(this.url + 'products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(productData),
      });

      // Check if the response status code is OK (200)
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      // Parse the response body as JSON
      const data = await response.json();

      // Return the newly created product data
      console.log('create product service');
      return data;
    } catch (error) {
      // Handle any errors that occur during the create operation
      console.error('Error creating product:', error);
      throw error;
    }
  }

  // Read | GET
  async getProducts() {
    try {
      // Attempt to fetch products from the API
      const response = await fetch(this.url + 'products', {
        method: 'GET',
      });

      // Check if the response status code is OK (200)
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      // Parse the response body as JSON
      const data = await response.json();
      console.log('fetch products service run');

      // Return the fetched data
      return data;
    } catch (error) {
      // Handle any errors that occur during the fetch
      console.error('Error fetching products:', error);
      throw error;
    }
  }

  // Update | PUT or PATCH
  async updateProduct(productId, updatedData) {
    try {
      // Attempt to update a product by sending a PUT or PATCH request to the API
      const response = await fetch(this.url + `products/${productId}`, {
        method: 'PUT', // Use PUT or PATCH as needed
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
      });

      // Check if the response status code is OK (200)
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      // Parse the response body as JSON
      const data = await response.json();

      // Return the updated product data
      return data;
    } catch (error) {
      // Handle any errors that occur during the update operation
      console.error('Error updating product:', error);
      throw error;
    }
  }

  // Delete | DELETE
  async deleteProduct(productId) {
    try {
      // Attempt to delete a product by sending a DELETE request to the API
      const response = await fetch(this.url + `products/${productId}`, {
        method: 'DELETE',
      });

      // Check if the response status code is OK (200)
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      // Return a success message or indicator
      return 'Product deleted successfully';
    } catch (error) {
      // Handle any errors that occur during the delete operation
      console.error('Error deleting product:', error);
      throw error;
    }
  }
}

export default new ProductService();