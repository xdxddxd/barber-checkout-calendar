import { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

import Title from '../../components/Title';
import SwitchTheme from '../../components/SwitchTheme';

export default function Settings() {

    return (
        <View className='px-2 flex-1 bg-gray-100 dark:bg-slate-950'>
            <Title title='Configurações' />
            <View>
                <SwitchTheme />
            </View>
        </View>
    );
}

