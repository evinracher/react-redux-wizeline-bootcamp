import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [
      {
        id: 1,
        name: '85" QN95B Samsung Neo QLED 4K Smart TV (2022)',
        price: 5999.99,
        quantity: 1,
        images: [
          "https://image-us.samsung.com/SamsungUS/home/easy-asset/05192022/2022_QS95B_QN95B_QN85B_Q80B_Q70B_Q-Symphony_PC_708xV.jpg?$feature-benefit-jpg",
          "https://image-us.samsung.com/SamsungUS/home/easy-asset/05192022/2022_QN85B_Q80B_100_Color_Volume_with_Quantum_Dot_PC_708xV.jpg?$feature-benefit-jpg",
          "https://image-us.samsung.com/SamsungUS/home/easy-asset/05192022/2022_QLED_Features_EyeComfort_Mode_4K_PC_708xV.jpg?$feature-benefit-jpg",
        ],
      },
      {
        id: 2,
        name: '85" QN95B Samsung Neo QLED 4K Smart TV (2022)',
        price: 5999.99,
        quantity: 1,
        images: [
          "https://image-us.samsung.com/SamsungUS/home/easy-asset/05192022/2022_QS95B_QN95B_QN85B_Q80B_Q70B_Q-Symphony_PC_708xV.jpg?$feature-benefit-jpg",
          "https://image-us.samsung.com/SamsungUS/home/easy-asset/05192022/2022_QN85B_Q80B_100_Color_Volume_with_Quantum_Dot_PC_708xV.jpg?$feature-benefit-jpg",
          "https://image-us.samsung.com/SamsungUS/home/easy-asset/05192022/2022_QLED_Features_EyeComfort_Mode_4K_PC_708xV.jpg?$feature-benefit-jpg",
        ],
      },
      {
        id: 3,
        name: "50” Class QN90B Samsung Neo QLED 4K Smart TV (2022)",
        price: 1599.99,
        quantity: 1,
        images: [
          "https://image-us.samsung.com/SamsungUS/home/easy-asset/02252022/01_QN65QN90BAFXZA_011_Front3_Titan-Black.jpg?$product-details-jpg",
          "https://image-us.samsung.com/SamsungUS/home/easy-asset/02252022/02_QN65QN90BAFXZA_004_L-Side_Titan-Black.jpg?$product-details-jpg",
          "https://image-us.samsung.com/SamsungUS/home/easy-asset/02252022/04_SDSAC-3862-04-Qn90B-PDP-GALLERY-TV-1600x1200.jpg?$product-details-jpg",
          "https://image-us.samsung.com/SamsungUS/home/easy-asset/02252022/05_QN90B_Lifestyle_03_Approved.jpg?$product-details-jpg",
        ],
      },
    ],
  },
  reducers: {},
});

export const selectCart = (state) => state.cart.items;

export default cartSlice.reducer;
