import React from 'react';

import {
  Container,
  InnerContainer,
  Title,
  BoxContainer,
  Box,
  BoxTitle,
} from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Title>Seja bem vindo ao desafio sigalei</Title>
      <InnerContainer>
        <BoxTitle>Desafios</BoxTitle>
        <BoxContainer>
          <Box gridArea="firstItem">Usuários que mais criaram commits</Box>
          <Box gridArea="secondItem">
            Usuários que mais adicionaram linhas de código
          </Box>
          <Box gridArea="thirdItem">
            Usuários que mais removeram linhas de código no repositório
          </Box>
        </BoxContainer>
      </InnerContainer>
    </Container>
  );
};

export default Home;
