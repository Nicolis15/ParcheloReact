import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import InicioSesion from './Screens/InicioSesion';
import RegistrarseP1 from './Screens/Registrarse/RegistrarseP1';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator>
      
    </Tab.Navigator>
  );
}

function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="InicioSesion" component={InicioSesion} options={{headerShown: false}}/>
      <Stack.Screen name="RegistrarseP1" component={RegistrarseP1} options={{headerShown: false}}/>
    </Stack.Navigator>
  );
}


export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator/>
    </NavigationContainer>
  );
}

