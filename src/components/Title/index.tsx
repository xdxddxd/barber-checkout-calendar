import { Text } from 'react-native';
import { styles } from './styles';

export default function Title(props: { title: string }) {
    return (
        <Text style={styles.title}>{props.title}</Text>
    );
}