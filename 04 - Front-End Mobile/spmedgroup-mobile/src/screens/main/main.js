import React, { Component } from 'react';
import {StyleSheet, Text, View } from 'react-native';

// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


// import Consultas from '../consulta/consulta'
// import Login from  '../login/login'

// const bottomTab = createBottomTabNavigator();

export default class Main extends Component {

  render() {
    return (
      <View style={styles.container}>
        {/* <NavigationContainer>
          <bottomTab.Navigator>
            <bottomTab.Screen name='consulta' component={Consultas}/>
            <bottomTab.Screen name='login' component={Login}/>
          </bottomTab.Navigator>
        </NavigationContainer> */}
        <h1>Main</h1>
      </View>
    )
  } 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E202F',
  },
});
