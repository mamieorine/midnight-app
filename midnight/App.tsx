//import 'react-native-gesture-handler'; // built-in touch system. if didn't import it, app may crash in production.
import React from 'react';
// manages navigation tree and navigation state.
import { NavigationContainer } from '@react-navigation/native'; 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from './src/screens/HomeScreen';
import DashboardScreen from './src/screens/DashboardScreen';

type IconState = {
  active: string;
  Inactive: string;
};

const Tab = createBottomTabNavigator();

const icons = {
  iconHome: {
    active: 'ios-information-circle',
    Inactive: 'ios-information-circle-outline'
  },
  iconDashboard: {
    active: 'ios-list-box',
    Inactive: 'ios-list'
  }
}

const iconHome: IconState = icons.iconHome;
const iconDashboard: IconState = icons.iconDashboard;

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator 
        initialRouteName="Home"
        tabBarOptions={{
          activeTintColor: 'brown',
          inactiveTintColor: 'gray'
        }}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size}) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? iconHome.active : iconHome.Inactive;
            } 
            else if (route.name === 'Dashboard') {
              iconName = focused ? iconDashboard.active : iconDashboard.Inactive;
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          }
        })}>

        <Tab.Screen name="Home" component={HomeScreen} options={{ title: 'HOME' }} />
        <Tab.Screen name="Dashboard" component={DashboardScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App;