import React from 'react';

import { Container, Name, Amount, AmountContainer } from './styles';

type Props = {
  name: string;
  amount: number;
};

const AuthorCard: React.FC<Props> = ({ name, amount }) => {
  return (
    <Container>
      <Name>{name || 'Desconhecido'}</Name>
      <AmountContainer bigger={amount < 100}>
        <Amount>{amount}</Amount>
      </AmountContainer>
    </Container>
  );
};

export default AuthorCard;
