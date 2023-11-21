import React, { useState, useEffect } from 'react';
import { Text, View, Button, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { useNavigation } from '@react-navigation/native';

import { styles } from './styles';

export default function App() {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);

    const navigation = useNavigation();

    useEffect(() => {
        const getBarCodeScannerPermissions = async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        };

        getBarCodeScannerPermissions();
    }, []);

    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    };

    if (hasPermission === null) {
        return <Text>Pedindo acesso a câmera</Text>;
    }
    if (hasPermission === false) {
        return <Text>Sem acesso a Câmera 😢</Text>;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Leia o QRCode</Text>
            <BarCodeScanner
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                style={styles.camera}
            />
            {scanned && <Button title={'Ler de Novo'} onPress={() => setScanned(false)} />}
            <View style={styles.moreButtonsView}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('SignIn')}
                    style={styles.moreButton}
                >
                    <Text style={styles.textMoreButton}> <Feather name="arrow-left" /> Voltar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}


