import React from 'react';
import { Text, View } from 'react-native';

import { Container } from './styles';

import CustomIputText from './CustomIputText';

const Login: React.FC = () => {
  return(
    <Container>
      <Text>Login</Text>
      <CustomIputText />

      <Text>Senha</Text>
      <CustomIputText />
    </Container>
  );
}

export default Login;