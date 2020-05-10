import React from 'react';
import { NavigationContainer } from '@react-navigation/native'; 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import AddGoalScreen from './src/screens/AddGoalScreen';
import HomeScreen from './src/screens/HomeScreen';
import DashboardScreen from './src/screens/DashboardScreen';
import Header from './src/components/Header';
import firebase from 'firebase';
import { Provider as PaperProvider } from 'react-native-paper';
import { theme } from './src/components/theme';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
type IconState = {
  active: string;
  Inactive: string;
};

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

const Tab = createBottomTabNavigator();
const firebaseConfig = {
  apiKey: "AIzaSyBfXHc-7JrGqCQzU--5osLMXfGlFrmKeT0",
  authDomain: "midnightapp-39a77.firebaseapp.com",
  databaseURL: "https://midnightapp-39a77.firebaseio.com",
  projectId: "midnightapp-39a77",
  storageBucket: "midnightapp-39a77.appspot.com",
  messagingSenderId: "296948390183",
  appId: "1:296948390183:web:bf64e426572a96bd66b102",
  measurementId: "G-56342W5QPL"
};

export default class midnightApp extends React.Component {
  render() {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }

    return (
      <PaperProvider theme={theme}>
        <Header />
        <NavigationContainer>
          <Tab.Navigator 
            initialRouteName="Home"
            tabBarOptions={{
              activeTintColor: theme.colors.primary,
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

            <Tab.Screen name="Home" >
              {() => (
                <Stack.Navigator>
                  <Stack.Screen name="Overview" component={HomeScreen} options={{ title: 'HOME' }} />
                  <Stack.Screen name="AddGoalScreen" component={AddGoalScreen} />
                </Stack.Navigator>
              )}
            </Tab.Screen>
            <Tab.Screen name="Dashboard" component={DashboardScreen} />
            {/* Home */}
            {/* Add */}
            {/* Summary */}
          </Tab.Navigator>
        </NavigationContainer>
      </PaperProvider>
    )
  }
}