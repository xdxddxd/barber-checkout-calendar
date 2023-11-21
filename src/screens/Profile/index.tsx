import { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import {useAuth} from '../../contexts/auth';

import { styles } from './styles';

export default function Profile() {

  const { user } = useAuth();

  return (
    <View style={styles.container}>
      <Text>{user?.name}</Text>
      <Text>{user?.email}</Text>
    </View>
  );
}

