import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {Header,Icon} from 'react-native-elements'




export default class ChapterScreen extends React.Component
{
    render()
    {
        return(

            <View style={styles.container}>
                <Header
          leftComponent={<Icon name='bars' type='font-awesome' color='#696969' onPress={() => this.props.navigation.toggleDrawer()}/>}
        
          centerComponent={{ text: 'CHAPTERS', style: { color: '#00868B',fontWeight:"bold",} }}
          backgroundColor = "#00F5FF"
        />

                <View style={{flex:1}}>
                <TouchableOpacity style={styles.chapter}
                onPress={()=>
                {
                    this.props.navigation.navigate('WorkAndTime')
                }}>
                    <Text style={styles.chapterText}>Work And Time</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.chapter}
                onPress={()=>
                {
                    this.props.navigation.navigate('Polynomials')
                }}>
                    <Text style={styles.chapterText}>Polynomials</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.chapter}
                onPress={()=>
                {
                    this.props.navigation.navigate('Trigonometry')
                }}>
                    <Text style={styles.chapterText}>Trigonometry</Text>
                </TouchableOpacity>
            </View>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
        alignItems: 'center',
        justifyContent: 'center'
      },
    chapter:{
        width:200,
        height:50,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:25,
        backgroundColor:"#05B8CC",
        shadowColor: "#000",
        marginTop:20,
        shadowOffset: {
           width: 0,
           height: 8,
        },
        shadowOpacity: 0.30,
        shadowRadius: 10.32,
        elevation: 16,
        padding: 10
      },
      chapterText:{
        color:'#ffff',
        fontWeight:'200',
        fontSize:20
      }
})