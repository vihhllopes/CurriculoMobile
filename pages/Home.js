import { Center } from "native-base";
import { View, Text, TouchableOpacity, StyleSheet, AppRegistry } from "react-native";
import api from "../src/services/api"
import React from "react";

export default function Home({navigation}) {

   const [todo, setTodo]= React.useState([]);
   
   
 React.useEffect(() =>{
    api.get("/todo/1").then((response)=>{
        setTodo(response.data)
    });
},[])
    

    return (
        <View>
            <View style={styles.titulo}>
                <Text style={{marginTop:200,fontSize:40,textAlign:'center',}}>Olá, eu sou Maria Victória  </Text>
                <Text style={{marginTop:10,fontSize:15,textAlign:'center'}}>Estudante de Tecnologia da Informação</Text>
                <Text style={{marginTop:10,fontSize:15,textAlign:'center', color:'#850E35'}}>{todo[0]?.todo_description}{" "}</Text>
                <Text style={{marginTop:10,fontSize:15,textAlign:'center', color:'#850E35'}}>{todo[1]?.todo_description}{" "}</Text>
            </View>
            <View>
                <Text style={{marginTop:20,textAlign:'center',padding:20,}}>Me chamo Maria Victória tenho 19 anos e atualmente estou no 4º Periodo do curso de Sistemas para Internet na Universidade Catolica de Pernambuco. Procuro trabalhar na área de tecnologia da informação, para aprender a crescer profissionalmente, a fim de compartilhar e resolver desafios.</Text>
            </View>
            <View style={{alignItems:'center'}}>
                <TouchableOpacity style={styles.button}  onPress={() => navigation.navigate('Carreira')} >
                    <Text style={styles.textButton} >Carreira e Escolaridade</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}  onPress={() => navigation.navigate('Habilidades')}>
                    <Text style={styles.textButton} >Habilidades</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} src="mailto:viictoria931@gmail.com"
            >
                    <Text style={styles.textButton} >Contato</Text>
                </TouchableOpacity>
            </View>
        </View>

    )
}
const styles = StyleSheet.create({
    button: {
        backgroundColor: '#850E35',
        width: 241,
        height: 55,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        shadowOffset: { width: 4, height: 4 },
        shadowOpacity: 0.25,
        shadowRadius: 10,
    },
    textButton: {
        family: 'Quicksand-Regular',
        fontSize: 16,
        color: '#FFC4C4',
    }
})