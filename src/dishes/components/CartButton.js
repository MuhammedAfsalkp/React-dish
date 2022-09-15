import React,{useContext} from "react";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { DishContext } from "../../shared/context/dish-context";
import './CartButton.css'

const CartButton = (props)=> {
    const dish = useContext(DishContext)
    return( <ButtonGroup>
         <button className="remove"
          onClick={() => {
            props.onChange(Math.max(props.count-1,0))
            dish.setItemCount(Math.max(dish.itemCount - 1, 0));
          }}
        >
          {" "}
          <RemoveIcon fontSize="small" />
        </button>
        <span className="count">{props.count}</span>
        <button className="add"
          onClick={() => {
            props.onChange(props.count+1)
            dish.setItemCount(dish.itemCount + 1);
          }}
        >
          {" "}
          <AddIcon fontSize="small" />
        </button>
      </ButtonGroup>
      )

}

export default CartButton;