import { createContext } from 'react';

export const DishContext = createContext({
  restaurantName:null,
  category:[],
  dishes:[],
  itemCount:0,
  setItemCount:(count) => {},
  setRestname: (data) => {},
  setCategory: (data) => {},
  setDishes:   (data) => {}
});