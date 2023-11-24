import { View, Text, Switch } from "react-native";
import {useColorScheme} from 'nativewind';
import colors from "tailwindcss/colors";


export default function SwitchTheme() {
    const { colorScheme, setColorScheme } = useColorScheme();
    return (
        <View className="flex-row items-center justify-between">
            <Text className="text-gray-800 dark:text-gray-200">SwitchTheme</Text>
            <View className="flex-row items-center justify-center">
                <Text className="text-yellow-500">Dark</Text>
                <Switch
                    trackColor={{ false: colors.yellow[500], true: colors.blue[400] }}
                    thumbColor={colorScheme === 'light' ? colors.blue[600] : colors.yellow[700]}
                    onValueChange={() => {
                        setColorScheme(colorScheme === 'light' ? 'dark' : 'light');
                    }}
                    value={colorScheme === 'light'}
                />
                <Text className="text-blue-400">Light</Text>
            </View>
        </View>
    );
}