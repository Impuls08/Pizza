import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";

import {Categories, PizzaBlock, SortPopup, LoadingBlock} from '../components';
import { setCategory, setSortBy } from '../redux/actions/filters';
import { fetchPizzas } from "../redux/actions/pizzas";


const categoryNames = ["М'ясні", "Вегетaріанські", "Гриль", "Гострі", "Закриті"];
const sortItems = [
  {name: "популярності", typy: 'popular', order: 'desc'}, 
  {name: "ціні", type: 'price', order: 'desc'}, 
  {name:"алфавіту", type: 'name', order: 'asc'}
];

const Home = () => {
  const dispatch = useDispatch();
  const items = useSelector(({ pizzas }) =>  pizzas.items);
  const CartItems = useSelector(({ cart }) =>  cart.items);
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
  const {category, sortBy} = useSelector(({filters}) =>  filters);

  useEffect(() => {
     dispatch(fetchPizzas(sortBy, category));
  }, [category, sortBy]);

  const onSelectCategory = useCallback((index) => {
    dispatch(setCategory(index));
  }, []);
  
  const onSelectSortType = useCallback((type) => {
    dispatch(setSortBy(type));
  }, []);

  const handleAddPizzaToCart = (obj) => {
    dispatch({
  type: 'ADD_PIZZA_CART',
  payload: obj,
  })
  }

  return (
    <div className="container">
      <div className="content__top">
          <Categories 
            activeCategory={category} 
            onClickCategory={onSelectCategory} 
            items={categoryNames} 
          />
          <SortPopup activeSortType={sortBy.type} items={sortItems} onClickSortType={onSelectSortType} />
      </div>
      <h2 className="content__title">Каталог піц</h2>
        <div className="content__items">
          { isLoaded 
              ? items.map((obj) => (
              <PizzaBlock
                onClickAddPizza={handleAddPizzaToCart}
                addedCount={CartItems[obj.id] && CartItems[obj.id].items.length}
                key={obj.id} 
                {...obj}/>
              )) 
             : Array(12).fill(0).map((_, index) => <LoadingBlock key={index} />)
          }
          
        </div>
    </div>
  );
};



export default Home;