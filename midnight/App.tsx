//import 'react-native-gesture-handler'; // built-in touch system. if didn't import it, app may crash in production.
import React from 'react';
// manages navigation tree and navigation state.
import { NavigationContainer } from '@react-navigation/native'; 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from './src/screens/HomeScreen';
import DashboardScreen from './src/screens/DashboardScreen';
import Header from './src/components/Header';
import { Provider as PaperProvider } from 'react-native-paper';
import { theme } from './src/components/theme';

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

export default class midnightApp extends React.Component {
  render() {
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

            <Tab.Screen name="Home" component={HomeScreen} options={{ title: 'HOME' }} />
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