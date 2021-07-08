import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Main from './src/screens/main/main'
import Login from './src/screens/login/login'

const AuthStack = createStackNavigator();

export default function Stack(){
  return(
    <NavigationContainer>
      <AuthStack.Navigator>
        <AuthStack.Screen name='Login' component={Login}/>
        <AuthStack.Screen name='Main' component={Main}/>
      </AuthStack.Navigator>
    </NavigationContainer>
  )
}