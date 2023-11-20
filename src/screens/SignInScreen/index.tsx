import { useState, useEffect, useRef } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { View } from 'react-native';
import {
    requestForegroundPermissionsAsync,
    getCurrentPositionAsync,
    LocationObject,
    watchPositionAsync,
    LocationAccuracy
} from 'expo-location';

import { styles } from '../../../styles';

export default function SignInScreen() {
    const [location, setLocation] = useState<LocationObject | null>(null);

    const mapRef = useRef<MapView>(null);

    async function requestLocationPermission() {
        const { granted } = await requestForegroundPermissionsAsync();

        if (granted) {
            const currentPosition = await getCurrentPositionAsync();
            setLocation(currentPosition);
        }
    }

    useEffect(() => {
        requestLocationPermission();
    }, []);

    useEffect(() => {
        watchPositionAsync({
            accuracy: LocationAccuracy.Highest,
            timeInterval: 1000,
            distanceInterval: 1
        }, (response) => {
            setLocation(response);
            mapRef.current?.animateCamera({
                pitch: 45,
                center: response.coords,
            })
        });
    }, []);

    return (
        <View style={styles.container}>

            {
                location &&
                <MapView
                    ref={mapRef}
                    style={styles.map}
                    initialRegion={{
                        latitude: location.coords.latitude,
                        longitude: location.coords.longitude,
                        latitudeDelta: 0.015,
                        longitudeDelta: 0.015
                    }}
                >
                    <Marker
                        coordinate={{
                            latitude: location.coords.latitude,
                            longitude: location.coords.longitude
                        }}
                        title="Você"
                        description="Você está aqui"
                    />
                </MapView>
            }

        </View>
    );
}

