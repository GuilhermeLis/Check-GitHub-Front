import React, { useEffect, useState } from 'react';

import { Container, MainTable } from './styles';

import ComparationAnd from '~/components/ComparationAnd';
import AuthorsCard from '~/components/AuthorCard';

import { useContextAuthors } from '~/Context/Context';

import { authorsRequest } from '~/services/Api/Authors';

const Authors: React.FC = () => {
  const { authors, setAuthors } = useContextAuthors();
  const [show, setShow] = useState<boolean>(authors.length > 0);
  useEffect(() => {
    authorsRequest()
      .then((data) => {
        setAuthors(data);
        setShow(true);
      })
      .catch(() => {
        setShow(false);
      });
  }, []);
  return (
    <Container>
      <ComparationAnd condition={show}>
        <MainTable>
          {authors.map((author) => (
            <AuthorsCard name={author.name} amount={author.amount} />
          ))}
        </MainTable>
      </ComparationAnd>
    </Container>
  );
};

export default Authors;
