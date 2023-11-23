import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Pantalla from './componentes/Pantalla';
import TecladoCompleto from './componentes/TecladoCompleto';
import { useEffect, useState } from 'react';



export default function App() {

  const [resultado,setResultado] = useState("");
  //si incluye el igual salzar un mensaje
  useEffect(() => {
    if (resultado.includes("=")) {
      //setResultado("apretado")
      if (resultado.includes("+")) {
        const result = resultado.replace("=","")
        const finalresult = result.split("+");
        const sumSplit = parseInt(finalresult[0])+parseInt(finalresult[1])
       // const result = result.split("+")
        setResultado(sumSplit.toString());
      }
      if (resultado.includes("-")) {
        const result = resultado.replace("=","")
        const finalresult = result.split("-");
        const sumSplit = parseInt(finalresult[0])-parseInt(finalresult[1])
       // const result = result.split("+")
        setResultado(sumSplit.toString());
      }
      if (resultado.includes("*")) {
        const result = resultado.replace("=","")
        const finalresult = result.split("*");
        const sumSplit = parseInt(finalresult[0])*parseInt(finalresult[1])
       // const result = result.split("+")
        setResultado(sumSplit.toString());
      }
      if (resultado.includes("/")) {
        const result = resultado.replace("=","")
        const finalresult = result.split("/");
        const sumSplit = parseInt(finalresult[0])/parseInt(finalresult[1])
       // const result = result.split("+")
        setResultado(sumSplit.toString());
      }
    }
  },[resultado]);

  return (
    <View style={styles.container}>
      <Pantalla resultado={resultado}></Pantalla>
      <TecladoCompleto resultado={resultado} setresultado={setResultado}></TecladoCompleto>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    flexDirection:"column"
  }
});
