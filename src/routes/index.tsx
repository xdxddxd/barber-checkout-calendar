import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DrawerRoutes from './drawer.routes';

import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import ReadQrCode from '../screens/ReadQrCode';

const Stack = createNativeStackNavigator();

const getIsSignedIn = () => {
    // custom logic
    return false;
};

export default function Routes() {
    const isSignedIn = getIsSignedIn();

    return (
        <NavigationContainer>
            {isSignedIn ? (
                <>
                    <DrawerRoutes />
                </>
            ) : (
                <>
                    <Stack.Navigator screenOptions={{ headerShown: false }}>
                        <Stack.Screen name="SignIn" component={SignInScreen} />
                        <Stack.Screen name="SignUp" component={SignUpScreen} />
                        <Stack.Screen name="ReadQrCode" component={ReadQrCode} />
                    </Stack.Navigator>
                </>
            )}
        </NavigationContainer>
    );
}