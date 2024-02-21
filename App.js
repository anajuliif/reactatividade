import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
        <Text style={[styles.numero, {color:'purple'}]}>04</Text>
      <Text style={[styles.sala, {backgroundColor:'pink'}]}>07</Text>
      <Text style={[styles.nome, {color:'blue'}]}>Ana Julia Ferreira</Text>
      <Text style={[styles.texto, {color:'red', backgroundColor:'blue'}]}>Senai Celso Charuri</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nome: {
   fontSize: 30, 
   fontWeight: 'bold',
   alignItems: 'center',
   justifyContent: 'center',
   left: '30%',
  },
  texto: {
    fontSize: 20, 
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    left: '30%',
    borderBottomColor: 'red',
    borderBottomWidth: 2,
    marginBottom: 30,
   },
  numero: {
    fontSize: 25, 
    fontStyle: 'italic',
    alignItems: 'center',
    justifyContent: 'center',
    right: '30%',
    top: '25%',
    borderBottomColor: 'black',
    borderBottomWidth: 2,
    marginBottom: 30,
   },
   sala:{
   fontSize: 20,
   }
});