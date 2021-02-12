import React from 'react';
import { StyleSheet, Text, View,Modal,TouchableOpacity } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MyHeader from '../Components/MyHeader';
import pr1 from '../img/progress.png'
import pr2 from '../img/progress2.png'
import pr3 from '../img/progress3.png'
import pr4 from '../img/progress4.png'
import db from '../config';
import { Image } from 'react-native';
import firebase from 'firebase'
import {Header,Icon} from 'react-native-elements';


export default class HomeScreen extends React.Component
{
    constructor()
    {
        super()
        this.state=
        {
            chapterWork:null,
            chapterPoly:null,
            chapterTri:null,
            userId: firebase.auth().currentUser.email,
            imagesource:'',
            isModalVisible:false,
            name:'',
        }
    }

    getDetails=()=>
    {
         db.collection('users').where('email','==',this.state.userId).get()
        .then(snapshot=>{
          snapshot.forEach((doc)=>{
              console.log(doc.data().name)
                   
          })
          this.setState({
            'chapterp':this.state.chapterPoly
        })
        });
      
                console.log("POLY "+this.state.chapterPoly)
        
    }
    componentDidMount()
    {
        this.getDetails()
        this.getImage()
    }

    showModal = ()=>{
        return(
        <Modal
          animationType="fade"
          transparent={true}
          visible={this.state.isModalVisible}
          >
          <View style={styles.modalContainer}>
            <Text style={{textAlign:'center',fontSize:20,color:'black'}}>Check The Achievment</Text>

            <View style={styles.modalBackButton}>
                <TouchableOpacity
                  style={styles.registerButton}
                  onPress={()=> this.props.navigation.navigate('Achievments')}>
                <Text style={styles.registerButtonText}>Go</Text>
                </TouchableOpacity>
              </View>
          </View>
        </Modal>
      )
      }    
    getImage=()=>
    {
        var chapterp=this.state.chapterPoly
        var chaptert=this.state.chapterTri
        var chapterwat=this.state.chapterWork

        if(chapterp===0 && chaptert===0 && chapterwat===0)
        {
            this.setState({imagesource:pr1})
            console.log(this.state.imagesource)
            
        }

        if(chapterp===1 && chaptert===0 && chapterwat===0)
        {
            this.setState({imagesource:pr2,isModalVisible:true})
            
        }

        if(chapterp===0 && chaptert===1 && chapterwat===0)
        {
            this.setState({imagesource:pr2,isModalVisible:true})
            
        }

        if(chapterp===0 && chaptert===0 && chapterwat===1)
        {
            this.setState({imagesource:pr2,isModalVisible:true})
            
        }

        if(chapterp===1 && chaptert===1 && chapterwat===0)
        {
            this.setState({imagesource:pr3,isModalVisible:true})
            
        }
        
        if(chapterp===0 && chaptert===1 && chapterwat===1)
        {
            this.setState({imagesource:pr3,isModalVisible:true})
            
        }
        
        if(chapterp===1 && chaptert===0 && chapterwat===1)
        {
            this.setState({imagesource:pr3,isModalVisible:true})
            
        }
        
        if(chapterp===1 && chaptert===1 && chapterwat===1)
        {
            this.setState({imagesource:pr4,isModalVisible:true})
        }

    }
    render()
    {
        return(
            
            <View style={styles.container}>
                {this.showModal()}
                <SafeAreaProvider>
          <Header leftComponent={<Icon name='bars' type='font-awesome' color='#696969' onPress={() => this.props.navigation.toggleDrawer()}/>}
        
          centerComponent={{ text: 'HOME', style: { color: '#00868B',fontWeight:"bold",} }}
          backgroundColor = "#00F5FF"
        /></SafeAreaProvider>
                
                
                <Image style={{width:400,height:400,justifyContent:'center',marginBottom:100,marginRight:15}}
                source={this.state.imagesource}
                visible={false}/>
                
            </View>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#97FFFF',
        alignItems: 'center',
        justifyContent: 'center'
      },
})