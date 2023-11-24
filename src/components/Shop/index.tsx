import { Text, View, TouchableOpacity, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { StyledComponent } from 'nativewind';
import colors from 'tailwindcss/colors';

export default function Shop(props: { title: string, stars: number, businessType: string }) {
    const { title, stars, businessType, ...rest } = props;
    const randomBool = Math.random();
    const randomColor = randomBool < 0.5 ? colors.green[500] : colors.red[600];
    const randomColorText = randomBool < 0.5 ? 'text-green-500' : 'text-red-600';
    return (
        <StyledComponent component={TouchableOpacity} {...rest}>
            <TouchableOpacity className='p-4 transition-colors duration-200 bg-white border border-gray-200 rounded-lg dark:hover:bg-gray-800 dark:bg-gray-900 dark:border-gray-700 hover:bg-gray-100 my-1'>
                <View className='flex-row items-center gap-x-3'>
                    <Image
                        className='object-cover w-12 h-12 rounded-full'
                        source={require('../../assets/logo.png')}
                        resizeMode='contain'
                    />
                    <View className='flex-1 flex-col'>
                        <View className='flex-row items-center justify-between'>
                            <Text className='font-semibold tracking-wide text-gray-800 dark:text-gray-200'>{title}</Text>
                            <Text className='mt-1 text-sm font-medium tracking-wide text-yellow-500'>
                                <Feather name='star' color={colors.yellow[500]} />
                                {stars}
                            </Text>
                        </View>
                        <View className='flex-row items-center justify-between'>
                            <Text className='mt-1 text-sm tracking-wide text-gray-600 dark:text-gray-400'>{businessType}</Text>
                            <Text className={'mt-1 text-sm font-medium tracking-wide ' + randomColorText }>
                                <Feather name='circle' color={randomColor} />
                                &nbsp;{randomBool < 0.5 ? 'Aberto' : 'Fechado'}
                            </Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        </StyledComponent>
    );
}