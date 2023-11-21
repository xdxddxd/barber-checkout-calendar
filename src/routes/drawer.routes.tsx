import { createDrawerNavigator } from '@react-navigation/drawer';
import { Text, TouchableOpacity, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../contexts/auth';


import TabRoutes from './tab.routes';
import StackRoutes from './stack.routes';

const Drawer = createDrawerNavigator();

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    question: {
        fontSize: 24,
        marginBottom: 16
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#f1f1f1',
    },
    no: {
        fontSize: 16,
        color: 'blue'
    },
    yes: {
        fontSize: 16,
        color: 'red'
    },
    icon: {
        marginRight: 16
    },

});

export default function DrawerRoutes() {
    const navigation = useNavigation();

    const { signOut } = useAuth();

    const handleSignOut = () => {
        signOut();
    }

    const Exit = () => (
        <View style={styles.container}>
            <Text style={styles.question}>Deseja sair?</Text>
            <View style={styles.buttons}>
                <TouchableOpacity onPress={navigation.goBack} style={styles.button}>
                    <Feather name="arrow-left" size={24} color="blue" style={styles.icon} />
                    <Text style={styles.no}>Não</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleSignOut} style={styles.button}>
                    <Feather name="log-out" size={24} color="red" style={styles.icon} />
                    <Text style={styles.yes}>Sim</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

    return (
        <Drawer.Navigator screenOptions={{ title: '' }}>
            <Drawer.Screen name="start" component={TabRoutes} options={{
                drawerIcon: ({ color, size }) => {
                    return <Feather name="home" size={size} color={color} />
                },
                drawerLabel: 'Início'
            }} />
            <Drawer.Screen name="Profile" component={StackRoutes} options={{
                drawerIcon: ({ color, size }) => {
                    return <Feather name="user" size={size} color={color} />
                },
                drawerLabel: 'Perfil'
            }} />
            <Drawer.Screen name="Logout" component={Exit} options={{
                drawerIcon: ({ color, size }) => {
                    return <Feather name="log-out" size={size} color='red' />
                },
                drawerLabel: 'Logout'
            }} />
        </Drawer.Navigator>
    );
}