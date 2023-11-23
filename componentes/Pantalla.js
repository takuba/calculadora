import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Pantalla = ({resultado}) => {
  return (
    <View style={styles.pantalla}>
        <View>
            <Text style={styles.result}>{resultado}</Text>
        </View>
    </View>
  )
}

export default Pantalla

const styles = StyleSheet.create({
    pantalla:{
        flex:1,
        backgroundColor:"green",
        textAlign:"center",
        margin:6,
        justifyContent:"center"
    },
    result:{
        backgroundColor:"white",
        padding:20,
        textAlign:'center',
        fontSize:36,
        margin:20,
    }
})