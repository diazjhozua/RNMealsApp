import { StyleSheet, Text, View, FlatList, Pressable } from 'react-native'
import { useRoute } from '@react-navigation/native'
import React, { useEffect, useLayoutEffect } from 'react'

import { MEALS, CATEGORIES } from '../data/dummy-data'
import MealsList from '../components/MealsList/MealsList'

const MealsOverviewScreen = ({ route, navigation }) => {
  // const route = useRoute();
  // route.params();

  const catId = route.params.categoryId
  const displayMeals = MEALS.filter((meal) => {
    return meal.categoryIds.indexOf(catId) >= 0
  })

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find((category) => category.id === catId).title
    navigation.setOptions({
      title: categoryTitle
    });
  }, [catId])

  return <MealsList items={displayMeals} />


}

export default MealsOverviewScreen

const styles = StyleSheet.create({

})
