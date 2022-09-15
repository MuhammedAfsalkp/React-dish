import { useCallback, useState } from "react"

export const useDish = ()=>{
    const [restaurantName,setRestName] = useState(null);
    const [category,setCatname] = useState([]);
    const [dishes,setDishe] = useState([]);
    const [itemCount,setItemcount] = useState(0);

    const setItemCount = useCallback((count)=>{
        setItemcount(count)

    },[])

    const setRestname = useCallback((data)=>{
        setRestName(data.restaurant_name)

    },[])


    const setCategory = useCallback((data)=>{
        console.log("seting cat")

       let cat = data.table_menu_list.map((el)=>{
            return {
                catId:el.menu_category_id,
                category:el.menu_category}
       })
       console.log(cat)
       setCatname(cat);

    },[])

    const setDishes = useCallback((data) => {
        console.log("setting dish")
        let dish =[];
        data.table_menu_list.forEach(el=>{
            el.category_dishes.forEach(element=>{
                dish.push({
                     catId:el.menu_category_id,
                     category:el.menu_category,
                     dishId:element.dish_id,
                     dishName:element.dish_name,
                     dishPrice:element.dish_price,
                     dishCurrency:element.dish_currency,
                     dishImage:element.dish_image,
                     dishCalorie:element.dish_calories,
                     dishDescription:element.dish_description,
                     dishAvailability:element.dish_Availability,
                     dishAddonCat:element.addonCat.length > 0 ?true:false
                })
            })
        })
        console.log(dish)
        setDishe(dish)
        
      },[]);



    return  {restaurantName,category,dishes,itemCount,setRestname,setCategory,setDishes,setItemCount}

}