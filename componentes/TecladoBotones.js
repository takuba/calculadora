import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function TecladoBotones({teclas,resultado,setresultado}) {
    const almacenarNumeros = (numero)=>{

        setresultado(resultado+numero)
        console.log(resultado)
        if (numero=="C") {
            setresultado("")
        }
    }
  return (
    <View  style={styles.containerTecladdo}>
      <View style={styles.btnRow} >
        
        <Pressable style={styles.press} onPress={()=>{almacenarNumeros(teclas[0])}}>
            <Text style={styles.btnstyle}>{teclas[0]}</Text>
        </Pressable>
        <Pressable style={styles.press} onPress={()=>{almacenarNumeros(teclas[1])}}>
            <Text style={styles.btnstyle}>{teclas[1]}</Text>
        </Pressable>
        <Pressable style={styles.press} onPress={()=>{almacenarNumeros(teclas[2])}}>
            <Text style={styles.btnstyle}>{teclas[2]}</Text>
        </Pressable>
        <Pressable style={styles.press} onPress={()=>{almacenarNumeros(teclas[3])}}>
            <Text style={styles.btnstyle}>{teclas[3]}</Text>
        </Pressable>
        
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    containerTecladdo: {
        flex:1
      },
      btnRow: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        flexDirection:"row",
        justifyContent:"space-evenly",
        borderBottomColor:"black",
        borderBottomWidth:10
      },
      btnstyle:{
        fontSize:32,    
      },
      press:{
        backgroundColor:"#C4C4C4",
        marginVertical:15,
        marginHorizontal:10,
        paddingVertical:12,
        paddingHorizontal:30,
      }
})