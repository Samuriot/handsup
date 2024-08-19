import { View, Text, ScrollView, Image, StyleSheet } from 'react-native'
import React from 'react'

const ColorList = () => {
  let color = "#DECEF4";
  return (
    <ScrollView 
      contentContainerStyle={styles.container}>
      {
        [1, 0.8, 0.5].map(opacity=> (
          <View 
            key={opacity} 
            style={[styles.color, {backgroundColor: color, opacity}]} 
          >
            <Text style = {styles.artist}>artist</Text>
            <Text style = {styles.location}>location</Text>
            <Text style = {styles.date}>date</Text>
          </View>
        ))
      }
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    color: {
        width: '100%',
        height: 150,
        borderRadius: 25,
        borderCurve: 'continuous', 
        marginBottom: 15,
    },
    container: {
      paddingHorizontal: 20, 
      paddingVertical: 10, 
      height: '100%'
    },
    artist: {
      marginTop: 80,
      marginLeft: 25,
      padding: 5
    },
    location: {
      textAlign: "left",
      marginTop: 0,
      marginLeft: 25
      
    },
    date: {
      textAlign: "right",
      marginTop: -15,
      marginRight: 25
    }
})

export default ColorList;