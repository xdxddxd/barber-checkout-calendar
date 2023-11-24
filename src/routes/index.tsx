import { View, ActivityIndicator } from 'react-native';

import { useAuth } from '../contexts/auth';

import DrawerRoutes from './drawer.routes';
import AuthRoutes from './auth.routes';

export default function Routes() {
    const { signed, loading } = useAuth();

    // if (loading) {
    //     return (
    //         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    //             <ActivityIndicator size="large" color="#000" />
    //         </View>
    //     );
    // }

    return signed ? <DrawerRoutes /> : <AuthRoutes />;
}