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

const generateRandomNumber = (max) => {
  return Math.floor(Math.random() * (max + 1));
};

export const getRandomProducts = (products) => {
  const availableIndexes = products.map((...args) => args[1]);
  const indexes = [];

  for (let i = 0; i < 4; i += 1) {
    const randomIndex = generateRandomNumber(availableIndexes.length - 1);
    const newIndex = availableIndexes.splice(randomIndex, 1)[0];

    indexes.push(newIndex);
  }

  return indexes.map((randomIndex) => products[randomIndex]);
};