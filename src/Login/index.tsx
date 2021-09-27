import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useForm, useController } from 'react-hook-form';
import { api } from '../services/api';
import * as S from './styles';

type InputProps = {
  name: string;
  control: any;
}

type LoginProps = {
  email: string;
  password: string;
}

export default function Login({navigation}:any){
  const { control, handleSubmit } = useForm();


  const Input = ({ name, control }: InputProps) => {
    const { field } = useController({control, defaultValue : '', name});
    return (
      <S.TextField value={field.value} onChangeText={field.onChange}/>
    )
  }

  const signIn = async ({ email, password,  }: LoginProps) => {
    try {
      const { data } = await api.post('auth/login', {
        email,
        password,
      });

      const { access_token, aluno_id } = data;
      await AsyncStorage.setItem('@aluno_id', aluno_id);
      await AsyncStorage.setItem('@access_token', access_token);

      navigation.navigate('Home')

    } catch (err) {
      console.log(err)
    }
  }

  return(
    <S.Container>
      <S.LoginBox>
        <S.TitleWrapper>
          <S.TextTitle>Entre e veja sua redação</S.TextTitle>
        </S.TitleWrapper>
        <S.InputWrapper>
          <S.LabelField>Email:</S.LabelField>
          <Input name="email" control={control}/>
        </S.InputWrapper>

        <S.InputWrapper>
          <S.LabelField>Senha:</S.LabelField>
          <Input name="password" control={control}/>
        </S.InputWrapper>

        <S.ButtonWrapper>
          <S.Button onPress={
            handleSubmit(signIn)
          }
            >
            <S.Text>
              Login
            </S.Text>
          </S.Button>
        </S.ButtonWrapper>
      </S.LoginBox>
    </S.Container>
  )
}







