import MainNavigation from './shared/components/Navigation/MainNavigation';
import { useDish } from './shared/hooks/dish-hook';
import { DishContext } from './shared/context/dish-context';
import MainHead from './MainHead';
import Dishes from './dishes/pages/Dishes';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import './App.css';

function App() {
  const {restaurantName,category,dishes,itemCount,setRestname,setCategory,setDishes,setItemCount} = useDish()
  
  let routes = (
    <Switch>
      <Route path="/" exact>
        <Dishes></Dishes>
      </Route>

      <Route path="/dishes/:categoryId" exact>
        <Dishes></Dishes>
      </Route>   
      
      <Redirect to="/" />
    </Switch>
  );

  return (
    <DishContext.Provider
    value={{
     restaurantName:restaurantName,
     category:category,
     dishes:dishes,
     setRestname:setRestname,
     setCategory:setCategory,
     setDishes:setDishes,
     setItemCount:setItemCount,
     itemCount:itemCount
    }}
  >
        <Router>     
             <MainHead></MainHead>
             <MainNavigation></MainNavigation>
             <main>{routes}</main>
        </Router>
     </DishContext.Provider>
  );
}
export default App;
