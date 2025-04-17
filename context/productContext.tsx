import React, { createContext, ReactNode, useContext } from 'react';
import { useProducts } from '../hooks/useProduct';

type ProductContextType = ReturnType<typeof useProducts>;

const ProductContext = createContext<ProductContextType | undefined>(undefined);

interface ProductProviderProps {
  children: ReactNode;
}

export const ProductProvider = ({ children }: ProductProviderProps) => {
  const productQuery = useProducts();

  return (
    <ProductContext.Provider value={productQuery}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProductContext must be used within a ProductProvider');
  }
  return context;
};
