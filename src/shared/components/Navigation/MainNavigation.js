import React, { useContext,useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { DishContext } from '../../context/dish-context';
import { useHttpClient } from '../../hooks/http-hook';
import NavLinks from './NavLinks';
import LoadingSpinner from '../UIElements/LoadingSpinner';
import ErrorModal from '../UIElements/ErrorModal';
import './MainNavigation.css';

const MainNavigation = props => {
     const history = useHistory()
     const dish = useContext(DishContext);
     const { isLoading, error, sendRequest, clearError } = useHttpClient();
     console.log(dish.category,"main navigation",dish.category.length>0,!isLoading)
     useEffect(() => {
      const fetchDishes = async () => {
        try {
          const responseData = await sendRequest(
            `https://run.mocky.io/v3/a67edc87-49c7-4822-9cb4-e2ef94cb3099`
          );
          console.log(responseData)
          dish.setRestname(responseData[0])
          dish.setCategory(responseData[0]);
          dish.setDishes(responseData[0]);
          history.push('/dishes/11')
          
        } catch (err) {}
      };
      fetchDishes();
    }, [sendRequest]);
 

  return (
   
      <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      {isLoading && ( <div className="center">  <LoadingSpinner /> </div>)}

      <nav className="main-navigation__header-nav">
        <ul className="nav-links">
              {!isLoading && dish.category.length>0  &&dish.category.map(cat=>
                <NavLinks title={cat.category} categoryId={cat.catId} key={cat.catId} />
              )}
        </ul>
      </nav>
      </React.Fragment>
    
  );
};

export default MainNavigation;
