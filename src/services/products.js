import mockData from "../data/products.json";

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockData.data.products.items);
    }, 500);
  });
};
