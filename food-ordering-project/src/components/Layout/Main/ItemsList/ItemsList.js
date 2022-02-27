import React from 'react';

import styles from './ItemsList.module.css';
import Card from '../../../UI/Card/Card';
import MealsArray from '../../../../store/MealsArray';
import MealItem from './MealItem/MealItem';

const ItemsList = props => {
  const MealsArrayAJX = MealsArray.map(Meal => {
    return (
      <MealItem name={Meal.name} description={Meal.description} price={Meal.price} key={Meal.id} id={Meal.id}/>
    )
  })

  return (
    <Card className={styles['heading-card']}>
      <ul>
        {MealsArrayAJX}
      </ul>
    </Card>
  );
};

export default ItemsList;