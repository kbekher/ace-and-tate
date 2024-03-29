import { useState } from 'react';

export const useLocalStorage = (key, defaultValue) => {
  const valueFromStorage = JSON.parse(
    localStorage.getItem(key) || '[]',
  );

  const [value, setValue] = useState(
    valueFromStorage.length === 0 ? defaultValue : valueFromStorage,
  );

  return [value, setValue];
};

export const getItemSaverFunction = (key, savedProducts, saveToState ) => {
  return (newProduct) => {
    let newProducts;
    const copyOfProducts = [...savedProducts];
    const savedProduct = savedProducts.find(
      item => item.id === newProduct.id,
    );
    const savedProductIndex = savedProduct
      ? savedProducts.indexOf(savedProduct)
      : -1;
    const isChangingQuantity = (
      savedProduct?.quantity !== newProduct.quantity
    ) && newProduct?.quantity;

    if (isChangingQuantity && savedProductIndex >= 0) {
      copyOfProducts[savedProductIndex].quantity = newProduct.quantity;
    }

    if (savedProduct) {
      newProducts = copyOfProducts.filter(
        (product) => {
          if (isChangingQuantity) {
            return true;
          }

          return product.id !== newProduct.id;
        },
      );
    } else {
      const useProduct = key === 'cart'
        ? { ...newProduct, quantity: 1 }
        : { ...newProduct };

      newProducts = [
        ...savedProducts,
        useProduct,
      ];
    }

    saveToState(newProducts);
    localStorage.setItem(key, JSON.stringify(newProducts));
  };
};
