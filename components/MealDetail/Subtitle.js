import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Subtitle = ({ children }) => {
  return (
    <View>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  )
}

export default Subtitle

const styles = StyleSheet.create({
  subtitle: {
    color: '#e2b497',
    fontSize: 18,
    fontWeight: 'bold',
    margin: 4,
    padding: 6,
    marginHorizontal: 12,
    marginVertical: 4,
    textAlign: 'center',
    borderBottomColor: '#e2b497',
    borderBottomWidth: 2,
  }
})