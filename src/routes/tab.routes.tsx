import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';

import Map from '../screens/Map';
import BarberShops from '../screens/BarberShops';

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
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