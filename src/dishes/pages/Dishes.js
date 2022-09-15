import React, { useEffect, useState,useReducer,useContext } from 'react';
import { useParams } from 'react-router-dom';

import DishList from '../components/DishList';
import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import { useHttpClient } from '../../shared/hooks/http-hook';
import { DishContext } from '../../shared/context/dish-context';

const reducer = (catDishes,action) =>{
  let res=[];
  console.log(action,"action")
  console.log(catDishes,"catDishes")
  if(action.dishes.length >0){

    res=action.dishes.filter(el =>{
       return el.catId ==action.categoryId;
    })
  }
  console.log(res,"result")
  return res;
  

}

const Dishes = () => {
  const dish = useContext(DishContext)
  let initialDish=dish.dishes.length>0 ? dish.dishes : []
  console.log("dish",initialDish)
  // const [loadedDishes, setLoadedDishes] = useState(initialDish);
  const [catDishes,dispatch]=useReducer(reducer,[])
  console.log("dish2",catDishes)
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const categoryId = useParams().categoryId;

  // useEffect(() => {
  //   const fetchDishes = async () => {
  //     try {
  //       const responseData = await sendRequest(
  //         `https://run.mocky.io/v3/a67edc87-49c7-4822-9cb4-e2ef94cb3099`
  //       );
  //       dish.setRestname(responseData[0])
  //       dish.setCategory(responseData[0]);
  //       dish.setDishes(responseData[0]);
  //     } catch (err) {}
  //   };
  //   fetchDishes();
  // }, [sendRequest]);

  useEffect(()=>{
    console.log("dispatching",dish.dishes)
    dispatch({categoryId,dishes:dish.dishes})

  },[categoryId,dish])



  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}
      {!isLoading && catDishes.length>0  && (
        <DishList items={catDishes}/>
      )}
    </React.Fragment>
  );
};

export default Dishes;