import { NavigationContainer, StackRouter } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/homescreen/HomeScreen.js'
import WeatherScreen from './screens/weatherScreen/WeatherScreen.js'
import { StatusBar } from 'expo-status-bar';

export default function App() {

    const Stack = createNativeStackNavigator()

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown : false}} initialRouteName='HomeScreen'>
                <Stack.Screen name='HomeScreen' component={HomeScreen}></Stack.Screen>
                <Stack.Screen name='WeatherScreen' component={WeatherScreen}></Stack.Screen>
            </Stack.Navigator>
            <StatusBar style='auto' />
        </NavigationContainer>
    );
}
