import React from 'react'
import { View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import Profile from '../screens/Profile'
import Edit from '../screens/Edit'
import Start from '../screens/Start'

const ProfileStack = createStackNavigator();
const EditStack = createStackNavigator();
const StartStack = createStackNavigator();

const Tab = createBottomTabNavigator();

export default function NavProfile() {
  return (
    <Tab.Navigator
        screenOptions={({ route }) => ({
            headerShown: false,
            tabBarActiveTintColor: 'black',
            tabBarInactiveTintColor: 'gray',
        })}
    >
      <Tab.Screen name="Profile" 
        component={ProfileStackScreen} 
        options={{
                tabBarIcon: ({ color }) => (
                    <FontAwesome5 name="user-alt" color={color} size={26} />
                )
        }} />

      <Tab.Screen name="Edit" 
        component={EditStackScreen} 
        options={{
            tabBarIcon: ({ color }) => (
                <FontAwesome5 name="user-edit" color={color} size={26} />
            )
        }} />

      <Tab.Screen name="Start" 
        component={StartStackScreen} 
        options={{
            tabBarIcon: ({ color }) => (
                <Icon name="ios-home" color={color} size={26} />
            )
        }} />
    </Tab.Navigator>
  )
}

const ProfileStackScreen = ({navigation}) => (
    <ProfileStack.Navigator screenOptions={{
      headerShown: true
    }} >
        <ProfileStack.Screen name ="Profiles" component={Profile} options={{
        title:'Profile ',
        headerLeft: () =>(
          <Icon.Button name="arrow-back" size={25} color={'black'} backgroundColor="#fff"  
          onPress={() => navigation.goBack()} />
        )
        }}
        />
        
    </ProfileStack.Navigator>
)

const EditStackScreen = ({navigation}) => (
    <EditStack.Navigator screenOptions={{
      headerShown: true
    }} >
        <EditStack.Screen name ="Edits" component={Edit} options={{
        title:'Edit Profile ',
        headerLeft: () =>(
          <Icon.Button name="arrow-back" size={25} color={'black'} backgroundColor="#fff" />
        )
        }}
        />
        
    </EditStack.Navigator>
)

const StartStackScreen = ({navigation}) => (
    <StartStack.Navigator screenOptions={{
      headerShown: true
    }} >
        <StartStack.Screen name ="Profiles" component={Start} options={{
        title:'Start ',
        headerLeft: () =>(
          <Icon.Button name="arrow-back" size={25} color={'black'} backgroundColor="#fff" />
        )
        }}
        />
        
    </StartStack.Navigator>
)