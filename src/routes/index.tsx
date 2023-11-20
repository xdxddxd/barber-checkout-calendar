import { NavigationContainer } from '@react-navigation/native';
import DrawerRoutes from './drawer.routes';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';

const Stack = createNativeStackNavigator();

const getIsSignedIn = () => {
    // custom logic
    return true;
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
                    <Stack.Screen name="SignIn" component={SignInScreen} />
                    <Stack.Screen name="SignUp" component={SignUpScreen} />
                </>
            )}
        </NavigationContainer>
    );
}