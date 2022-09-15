import React, { useState } from 'react';
import Card from '../../shared/components/UIElements/Card';
import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import { useHttpClient } from '../../shared/hooks/http-hook';
import CartButton from './CartButton';
import {BsRecordBtn} from "react-icons/bs"
import './Dishitem.css';

const DishItem = props => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [count,setCount] = useState(0)
  const countChangeHandler = (c) => {
    setCount(c)
  }
 

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
     
      <li className="dish-item">
        <Card className="dish-item__content">
          {isLoading && <LoadingSpinner asOverlay />}
          <div className="dish-icon">
          <BsRecordBtn color={`${props.availability?'green':'red'}`}></BsRecordBtn>
          </div>
          <div className="dish-item__info">
            <h2>{ props.title}</h2>
            <h3>{`${props.currency} ${props.price}`}</h3>
            <p>{props.description}</p>        
            {props.availability && <CartButton count={count} onChange={c=>countChangeHandler(c)}></CartButton>}
            {props.addonCat && (<p className="red">customirization available</p>)}
            {!props.availability && (<p className="red">Not available</p>)}
          </div>
          <div className="dish-cal">
            <p>{`${props.calorie} calories`}</p>
          </div>
          <div className="dish-item__image">
            <img
              src={props.image}
              alt={props.title}
            />
          </div>

        </Card>
      </li>
    </React.Fragment>
  );
};

export default DishItem;
