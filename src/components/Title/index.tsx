import { Text, View } from 'react-native';
import { styles } from './styles';

export default function Title(props: { title: string }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{props.title}</Text>
        </View>
    );
}