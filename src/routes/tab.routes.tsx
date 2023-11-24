import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';
import { View } from 'react-native';

import colors from "tailwindcss/colors";
import { useColorScheme } from 'nativewind';

import Map from '../screens/Map';
import BarberShops from '../screens/BarberShops';

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
    const { colorScheme, setColorScheme } = useColorScheme();

    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            headerShown: false,
            tabBarStyle: {
                backgroundColor: colorScheme === 'light' ? colors.gray[300] : colors.slate[700]
            },
            tabBarActiveBackgroundColor: colorScheme === 'light' ? colors.gray[50] : colors.slate[700],
            tabBarInactiveBackgroundColor: colorScheme === 'light' ? colors.gray[300] : colors.gray[800],
            tabBarActiveTintColor: colorScheme === 'light' ? colors.slate[700] : colors.gray[50],
            tabBarInactiveTintColor: colorScheme === 'light' ? colors.slate[800] : colors.gray[200],
        })}>
            <Tab.Screen name="home" component={BarberShops} options={{
                tabBarIcon: ({ color, size }) => {
                    return <Feather name="home" size={size} color={color} />
                },
                tabBarLabel: 'Início'
            }} />
            <Tab.Screen name="Map" component={Map} options={{
                tabBarIcon: ({ color, size }) => {
                    return <Feather name="map" size={size} color={color} />
                },
                tabBarLabel: 'Mapa'
            }} />
        </Tab.Navigator>
    );
}