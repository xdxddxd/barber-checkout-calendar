import { Text } from 'react-native';

export default function Title(props: { title: string }) {
    return (
        <Text className='m-4 text-3xl font-semibold text-gray-800 dark:text-gray-200'>{props.title}</Text>
    );
}