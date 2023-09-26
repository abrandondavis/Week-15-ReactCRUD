import { useState } from 'react';

function useModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editProduct, setEditProduct] = useState(null);
  const [mode, setMode] = useState('create'); // Initialize 'mode' with 'create'

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeAndResetModal = () => {
    console.log('modal closed in useModal hook');
    setIsModalOpen(false);
    setEditProduct(null);
    setMode('create'); // Reset mode to 'create' when closing the modal
  };

  return { isModalOpen, editProduct, mode, openModal, closeAndResetModal, setEditProduct };
}

export default useModal;
