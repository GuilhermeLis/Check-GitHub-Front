import React, { useEffect } from 'react';

import { Container, ContainerTitle, Title, MainTable } from './styles';

import ComparationAnd from '~/components/ComparationAnd';
import AuthorsCard from '~/components/AuthorCard';

import { useContextAuthors } from '~/Context/Context';

import {
  authorsRequest,
  authorByAddintionsRequest,
  authorByRemovalsRequest,
} from '~/services/Api/APIcall';

const Authors: React.FC = () => {
  const {
    authors,
    setAuthors,
    searchType,
    serchDescription,
  } = useContextAuthors();
  useEffect(() => {
    switch (searchType) {
      case 'commits':
        authorsRequest().then((data) => {
          setAuthors(data);
        });
        break;
      case 'adicionaram':
        authorByAddintionsRequest().then((data) => {
          setAuthors(data);
        });
        break;
      default:
        authorByRemovalsRequest().then((data) => {
          setAuthors(data);
        });
        break;
    }
  }, []);
  return (
    <Container>
      <ContainerTitle>
        <Title>{serchDescription}</Title>
      </ContainerTitle>
      <ComparationAnd condition={authors.length > 0}>
        <MainTable>
          {authors.map((author) => (
            <AuthorsCard
              key={author.id}
              name={author.author}
              amount={author.amount}
            />
          ))}
        </MainTable>
      </ComparationAnd>
    </Container>
  );
};

export default Authors;
