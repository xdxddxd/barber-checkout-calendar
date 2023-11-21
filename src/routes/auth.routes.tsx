import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Feather } from '@expo/vector-icons';

import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import ReadQrCode from '../screens/ReadQrCode';

const Auth = createNativeStackNavigator();

export default function AuthRoutes() {
    return (
        <Auth.Navigator screenOptions={{ headerShown: false }}>
            <Auth.Screen name="SignIn" component={SignInScreen} />
            <Auth.Screen name="SignUp" component={SignUpScreen} />
            <Auth.Screen name="ReadQrCode" component={ReadQrCode} />
        </Auth.Navigator>
    );
}