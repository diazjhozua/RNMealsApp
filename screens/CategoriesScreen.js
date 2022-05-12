import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import CategoryGridTile from '../components/CategoryGridTile'
import { CATEGORIES } from '../data/dummy-data'



const CategoriesScreen = ({ navigation }) => {

  function renderCategoryItem(itemData) {
    function pressHandler() {
      navigation.navigate('MealsOverview', {
        categoryId: itemData.item.id,
      });

    }
    return <CategoryGridTile
      title={itemData.item.title}
      color={itemData.item.color} onPress={pressHandler}
    />
  }

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2} />
  )
}

export default CategoriesScreen

const styles = StyleSheet.create({})