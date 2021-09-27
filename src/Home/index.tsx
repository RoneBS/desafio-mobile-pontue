import React, { useState, useEffect} from 'react';
import { FlatList, View, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { api } from '../services/api'

import * as S from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import Item from '../components/Item';

type AlunoProps = {
  aluno: {
    aluno_id: string;
    nome_completo: string;
  },
  created_at: string;
}

type AssaysProps = {
  id: string;
  numero: number;
  created_at: string;
}

export function Home(){

  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];

  const [assays, setAssays] = useState<AssaysProps[]>([]);
  const [isRender, setIsRender] = useState(false);

  // const Item = ({item}) => (
  //   <S.TextContainer >
  //     <S.Text>
  //       numero: {item.numero}
  //     </S.Text>
  //     <S.Text>
  //       criado: {item.created_at}
  //     </S.Text>
  //   </S.TextContainer>
  // )

  const renderLista = ({item}) => (
    <Item numero={item.numero} data={item.created_at} />
  )


  useEffect(() => {
    async function loadList(){
      const aluno_id = await AsyncStorage.getItem('@aluno_id');
      const value = await AsyncStorage.getItem('@access_token');
      const { data } = await api.get(`index/aluno/${aluno_id}`, {
        headers: {
          "Authorization" : `Bearer ${value}`
        }
      });
      setAssays(data)
    }
    loadList()
  }, []);

  useEffect(()=> {
    if(assays.length > 1){
      setIsRender(true);
    }
  },[assays, setIsRender])

  // useEffect(() => {
  //   async function loadAssay() {
  //     const value = await AsyncStorage.getItem('@access_token');
  //     console.log(value);
  //     const { data } = await api.get("redacao/fc9fc180-1e70-11ec-99a2-bf51dd76338a", {
  //       headers: {
  //         "Authorization" : `Bearer ${value}`
  //       }
  //     });
  //     console.log(data.data)

  //     setAssays(data.data.urls);


  //   }

  //   loadAssay();
  // }, [])

  return(

    <SafeAreaView>
      {console.log(assays)}
     {isRender && (
        <FlatList
        data={assays}
        renderItem={({item}) => (
          <View>
            <Text>
              {item.numero}
            </Text>
          </View>
        )}
        keyExtractor={item => item.id}
        />
     )}
    </SafeAreaView>
  )
}


//Criar um Head contendo nome do usuario logado
//Na tela de informacoes deve conter ua listagem de redacoes criadas
//Adicionar esta listagem
