import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Tela1 from './src/tela1'
import Tela2 from './src/tela2'

const Tab = createBottomTabNavigator()

export default function Rotas(){
    return <NavigationContainer
    independent={true}
    >
        <Tab.Navigator
        initialRouteName="Inicial"
        screenOptions={({ route }) => ({
          headerShown: false,
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === 'Inicial') {
                iconName = focused  
                ? 'ios-laptop'
                : 'laptop-outline';
              } else if (route.name === 'Outra') {
                iconName = focused ? 'ios-body' : 'body-outline';
              }
              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: "#ff0000",
            tabBarInactiveTintColor: "#ffffff",
            tabBarActiveBackgroundColor:"#000000",
            tabBarInactiveBackgroundColor:"#000000",
          })}>
        <Tab.Screen name="Inicial" component={Tela1} />
        <Tab.Screen name="Outra" component={Tela2} />
        </Tab.Navigator>
  </NavigationContainer>
}