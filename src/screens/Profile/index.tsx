import { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useAuth } from '../../contexts/auth';
import Title from '../../components/Title';

export default function Profile() {

  const { user } = useAuth();

  return (
    <View className='px-2 flex-1 flex-col bg-gray-100 dark:bg-slate-950'>
      <Title title='Perfil' />
      <View className='flex-1 items-center'>
        <Image
          className='object-cover w-72 h-72 rounded-full border-2'
          source={require('../../assets/logo.png')}
          resizeMode='contain'
        />
      </View>
      <View className='mt-24 flex-1 flex-col items-start'>
        <Text className='text-2xl text-slate-950 dark:text-gray-200'>{user?.name}</Text>
        <Text className='text-xl text-slate-950 dark:text-gray-200'>{user?.email}</Text>
      </View>
      <View className='flex-1 justify-end items-center mb-2'>
        <TouchableOpacity className='border-2 rounded-md border-red-700 w-full justify-center items-center py-3'>
          <Text className='text-xl text-red-700'>Deletar Minha Conta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

