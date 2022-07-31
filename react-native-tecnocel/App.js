import React from 'react'
import {Provider} from 'react-redux';
import {configureStore as createStore} from '@reduxjs/toolkit';

import mainReducer from './src/redux/reducers/mainReducer';
import { NativeRouter} from 'react-router-native';
import Index from './Index';
/* import{NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; */

const reduxStore=createStore({reducer:mainReducer});

export default function App() {
  return (

    <Provider store={reduxStore}>
    <NativeRouter>
      <Index/> 
    </NativeRouter>
   
    </Provider>
 
  );
}