import React, { useState, useEffect} from 'react';
import { FlatList, View, Text, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { api } from '../services/api'

import * as S from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import Item from '../components/Item';
import { TouchableOpacity } from 'react-native-gesture-handler';

type AssaysProps = {
  id: string;
  numero: number;
  created_at: string;
}

export function Home({ navigation }){
  const [assays, setAssays] = useState<AssaysProps[]>([]);

  useEffect(() => {
    const loadList = async () => {
      const aluno_id = await AsyncStorage.getItem('@aluno_id');
      const value = await AsyncStorage.getItem('@access_token');
      const { data } = await api.get(`index/aluno/${aluno_id}`, {
        headers: {
          "Authorization" : `Bearer ${value}`
        }
      });

      setAssays(data.data)
    }

    loadList()
  }, []);

  return(

    <S.Container>
      <SafeAreaView style={{ width:'80%' }}>
        <FlatList
          data={assays}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <TouchableOpacity onPress={() => Alert.alert(`A redação tem o seguinte ID: ${item.id}`)}>
              <S.TextContainer>
                <S.DivContainer>
                  <Text>Numero: {item.numero}</Text>
                  <Text>Data: {item.created_at}</Text>
                </S.DivContainer>
              </S.TextContainer>
            </TouchableOpacity>
          )}
          />
      </SafeAreaView>
    </S.Container>
  )
}
