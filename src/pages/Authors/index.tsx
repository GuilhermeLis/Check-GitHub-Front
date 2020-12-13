import React, { useEffect, useState } from 'react';
import ReactLoading from 'react-loading';

import { Container, ContainerTitle, Title, MainTable } from './styles';

import ComparisonIf from '~/components/ComparationIf';
import AuthorsCard from '~/components/AuthorCard';

import { useContextAuthors } from '~/Context/Context';

import {
  authorsRequest,
  authorByAddintionsRequest,
  authorByRemovalsRequest,
} from '~/services/Api/APIcall';

const Authors: React.FC = () => {
  const { authors, setAuthors } = useContextAuthors();
  const [loading, setLoading] = useState<boolean>(true);
  const [serchDescription, setSerchDescription] = useState<string>('');
  useEffect(() => {
    const searchType = localStorage.getItem('type');
    setSerchDescription(localStorage.getItem('description') || '');

    switch (searchType) {
      case 'commits':
        authorsRequest().then((data) => {
          setAuthors(data);
          setLoading(false);
        });
        break;
      case 'adicionaram':
        authorByAddintionsRequest().then((data) => {
          setAuthors(data);
          setLoading(false);
        });
        break;
      default:
        authorByRemovalsRequest().then((data) => {
          setAuthors(data);
          setLoading(false);
        });
        break;
    }
  }, []);
  return (
    <Container>
      <ContainerTitle>
        <Title>{serchDescription}</Title>
      </ContainerTitle>

      <ComparisonIf
        condition={loading}
        loading={
          <ReactLoading type="balls" color="#EDD382" height={200} width={375} />
        }
      >
        <MainTable>
          {authors.map((author) => (
            <AuthorsCard
              key={author.id}
              name={author.author}
              amount={author.amount}
            />
          ))}
        </MainTable>
      </ComparisonIf>
    </Container>
  );
};

export default Authors;
