import { Text, View } from 'react-native';
import { styles } from './styles';

export default function Shops(props: { title: string }) {
    return (
        <View style={styles.shop}>
            <Text style={styles.title}>{props.title}</Text>
        </View>
    );
}