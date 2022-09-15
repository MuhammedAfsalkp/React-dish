import React from 'react';

import Card from '../../shared/components/UIElements/Card';
import DishItem from './DishItem';
import Button from '../../shared/components/UIElements/Button';
import './DishList.css';

const DishList = props => {
  if (props.items.length === 0) {
    return (
      <div className="place-list center">
        <Card>
          <h2>No places found. Maybe create one?</h2>
          <Button to="/places/new">Share Place</Button>
        </Card>
      </div>
    );
  }

  return (
    <ul className="dish-list">
      {props.items.map(dish => (
        <DishItem
          key={dish.dishId}
          id={dish.sidshId}
          image={dish.dishImage}
          title={dish.dishName}
          description={dish.dishDescription}
          price={dish.dishPrice}
          calorie={dish.dishCalorie}
          currency={dish.dishCurrency}
          availability={dish.dishAvailability}
          addonCat={dish.dishAddonCat}
          
        />
      ))}
    </ul>
  );
};

export default DishList;
