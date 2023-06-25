import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from './src/Pages/Home/Index';
import { NavigationContainer } from '@react-navigation/native';
import { Gender } from './src/Pages/Gender/Index';
import { Age } from './src/Pages/Age/Index';
import { Colleges } from './src/Pages/Colleges/Index';
import { Weather } from './src/Pages/Weather/Index';
import { Wordpress } from './src/Pages/Wordpress/Index';
import { Ionicons } from '@expo/vector-icons';
import { Me } from './src/Pages/Me/Index';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen 
          name="Home" 
          component={Home} 
          options={{
          tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen 
          name="Gender by Your Name" 
          component={Gender}
          options={{
            tabBarLabel: 'Gender',
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="transgender" color={color} size={size} />
              ),
            }}
        />
        <Tab.Screen 
          name="Years old by Your Name" 
          component={Age} 
          options={{
            tabBarLabel: 'Years',
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="time" color={color} size={size} />
              ),
            }}
        />
        <Tab.Screen 
          name="Colleges by Country" 
          component={Colleges} 
          options={{
            tabBarLabel: 'Colleges',
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="school" color={color} size={size} />
              ),
            }}
        />
        <Tab.Screen 
          name="Weather Today" 
          component={Weather} 
          options={{
            tabBarLabel: 'Weather',
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="water" color={color} size={size} />
              ),
            }}
        />
        <Tab.Screen 
          name="WordPress Page" 
          component={Wordpress} 
          options={{
            tabBarLabel: 'WordPress',
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="book" color={color} size={size} />
              ),
            }}
        />
        <Tab.Screen 
          name="Me" 
          component={Me} 
          options={{
            tabBarLabel: 'Me',
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="person" color={color} size={size} />
              ),
            }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}


