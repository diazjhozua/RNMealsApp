import { StyleSheet, Text, View, FlatList, Pressable } from 'react-native'
import { useRoute } from '@react-navigation/native'
import React, { useEffect, useLayoutEffect } from 'react'

import { MEALS, CATEGORIES } from '../data/dummy-data'
import MealItem from '../components/MealItem'

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

  function renderMealItem(itemData) {
    const item = itemData.item

    const mealItemProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability
    }

    return <MealItem {...mealItemProps} />
  }

  return (
    <View>
      <FlatList
        data={displayMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
      {/* <Text>MealsOverviewScreen - {catId}</Text> */}
    </View>
  )
}

export default MealsOverviewScreen

const styles = StyleSheet.create({

})
