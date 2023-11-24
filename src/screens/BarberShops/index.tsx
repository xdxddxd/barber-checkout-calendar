import React from 'react';
import { View } from 'react-native';
import Title from '../../components/Title';
import Shop from '../../components/Shop';

export default function BarberShops() {
    const names = [
        'John',
        'Jane',
        'Michael',
        'Emily',
        'David',
        'Olivia',
        'Daniel',
        'Sophia',
        'Matthew',
        'Isabella'
    ];

    const beautyBusinesses = [
        'Salão de Cabeleireiro',
        'Clínica de Estética',
        'Spa',
        'Barbearia',
        'Salão de Manicure e Pedicure',
        'Clínica de Depilação',
        'Estúdio de Maquiagem',
        'Salão de Sobrancelhas',
        'Centro de Massagens',
        'Loja de Produtos de Beleza'
    ];

    return (
        <View className="px-2 bg-gray-100 dark:bg-slate-950">
            <Title title="Barbearias" />
            {names.map((name, index) => (
                <Shop key={index} title={name} stars={Math.floor(Math.random() * 40 + 10) / 10} businessType={beautyBusinesses[Math.floor(Math.random() * beautyBusinesses.length)]} />
            ))}
        </View>
    );
}

