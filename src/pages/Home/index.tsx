import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  Container,
  InnerContainer,
  Title,
  BoxContainer,
  Box,
  BoxTitle,
} from './styles';

import { useContextAuthors } from '~/Context/Context';

const Home: React.FC = () => {
  const { setSearch } = useContextAuthors();
  const history = useHistory();
  const navagationInto = (route: string) => {
    switch (route) {
      case 'authors':
        history.push('/authors');
        setSearch('commits');
        break;
      case 'adicionaram':
        history.push('/authors');
        setSearch('adicionaram');
        break;
      default:
        history.push('/authors');
        setSearch('removeram');
        break;
    }
  };
  return (
    <Container>
      <Title>
        Lista de resultados baseados na contribuição no repositório linux
      </Title>
      <InnerContainer>
        <BoxTitle>Resultados</BoxTitle>
        <BoxContainer>
          <Box gridArea="firstItem" onClick={() => navagationInto('authors')}>
            Usuários que mais criaram commits
          </Box>
          <Box
            gridArea="secondItem"
            onClick={() => navagationInto('adicionaram')}
          >
            Usuários que mais adicionaram linhas de código
          </Box>
          <Box gridArea="thirdItem" onClick={() => navagationInto('removeram')}>
            Usuários que mais removeram linhas de código no repositório
          </Box>
        </BoxContainer>
      </InnerContainer>
    </Container>
  );
};

export default Home;
