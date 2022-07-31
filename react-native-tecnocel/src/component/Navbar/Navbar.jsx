import React, {useEffect,useState} from 'react'
import { View, Text, StyleSheet, Button, ScrollView } from 'react-native'
import { IconButton } from "@react-native-material/core";
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Link as LinkRouter} from 'react-router-native'

export default function Navbar(){
    
    return(
        <View style={styles.containerNavbar} >
            <LinkRouter to='/'> 
            <View style={styles.button}>
            <Icon name="home" color={'#88D317'} size={45}  />
            </View>
            </LinkRouter>
            <LinkRouter to='/products'>
            <View style={styles.button}>
            <Icon name="devices" color={'#88D317'} size={45}  />
            </View>
            </LinkRouter>
            <LinkRouter to='/cart'>
            <View style={styles.button}>
            <Icon name="shopping-cart" color={'#88D317'} size={45}  />
            </View>
            </LinkRouter>
            <LinkRouter to='/login'>
            <View style={styles.button}>
            <Icon name="person" color={'#88D317'} size={45}  />
            </View>
            </LinkRouter>
        </View>
    )


}

const styles=StyleSheet.create({
    containerNavbar:{
    width:'100%',
    height:'12%',
    backgroundColor:'#121212',
    paddingTop: 50,
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-evenly'
    },
    button:{
        margin: 5,
        color: 'white',
        height: 50,
        width: 50
    }

})
