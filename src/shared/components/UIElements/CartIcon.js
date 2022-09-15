import { useState,useContext } from "react";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { DishContext } from "../../context/dish-context";

const CartIcon = props =>{
    const dish=useContext(DishContext)
    console.log(dish.itemCount,"icon")
    return(
         <div >
        
            <Badge color="secondary" badgeContent={`${dish.itemCount}`}>
            <ShoppingCartIcon />{" "}
            </Badge>
            
        </div>

    )
}

export default CartIcon;