import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TecladoBotones from './TecladoBotones'

export default function TecladoCompleto({resultado,setresultado}) {
    const teclado_numeros=[[1,2,3,"+"],[4,5,6,"-"],[7,8,9,"*"],["C",0,"=","/"]] ;
  return (
    <View style={styles.teclado}>
        <TecladoBotones teclas={teclado_numeros[0]} resultado={resultado} setresultado={setresultado}></TecladoBotones>
        <TecladoBotones teclas={teclado_numeros[1]} resultado={resultado} setresultado={setresultado}></TecladoBotones>
        <TecladoBotones teclas={teclado_numeros[2]} resultado={resultado} setresultado={setresultado}></TecladoBotones>
        <TecladoBotones teclas={teclado_numeros[3]} resultado={resultado} setresultado={setresultado}></TecladoBotones>
    </View>
  )
}

const styles = StyleSheet.create({
    teclado:{
        flex:1,
        backgroundColor:"yellow",
        borderColor:"black",
        borderWidth:10,
        margin:6
    }
})