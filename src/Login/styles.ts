import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  padding: 0 24px;
`;

export const LoginBox = styled.View`
  width: 100%;
  height: 50%;
  background: lightcyan;
  align-items: center;
  justify-content: center;
  border-radius: 10px;

`;

export const InputWrapper = styled.View`
  width: 240px;
  margin-bottom: 10px;
  

`;

export const TextField = styled.TextInput`
  width: 100%;
  height: 30px;
  font-size: 12px;
  background: #fff;
  color: #000;
  border: solid 1px #000;
  border-radius: 5px;
  padding: 5px 10px;
  margin-top: 8px;
  
`;

export const TextTitle = styled.Text`
 font-size: 18px;
 font-weight: bold;
  color: #000;
`;

export const TitleWrapper = styled.View`
  width: 60%;
  height: 15%;
  align-items: center;
`;

export const LabelField = styled.Text`

`;

export const Text = styled.Text`

`;

export const ButtonWrapper = styled.View`
  width: 240px;
  margin-top: 12px;
`;

export const Button = styled.TouchableOpacity`
  width: 100%;
  background: lightblue;
  border-radius: 5px;
  align-items: center;
  padding: 7px 18px;
`;