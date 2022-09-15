import React,{useContext} from "react";
import { DishContext } from "./shared/context/dish-context";
import CartIcon from "./shared/components/UIElements/CartIcon";
import {AiOutlineArrowLeft} from 'react-icons/ai'

import './MainHeader.css';

const  MainHead = () => {
    const dish = useContext(DishContext)
    console.log("working")
    return(
     <div className="title">
            <div>
               <button className="arrow-btn">
                   <AiOutlineArrowLeft color="black" size='20px' style={{background:'white'}}></AiOutlineArrowLeft>
                </button>
            </div> 
        <h2>{dish.restaurantName ? dish.restaurantName : 'unknown'}</h2>
        <h3>My orders</h3>
        <CartIcon></CartIcon>
     </div>
    );
}

export default MainHead;