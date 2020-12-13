import React, { createContext, useContext, useState, ReactNode } from 'react';

const TypeContext = createContext({});

export type authorsType = {
  id: number;
  author: string;
  amount: number;
};

type serachTypes = 'commits' | 'adicionaram' | 'removeram';

type returnType = {
  setSearch: (searchType: serachTypes) => void;
  authors: authorsType[];
  setAuthors: (array: authorsType[]) => void;
};

type propsContext = {
  children: ReactNode;
};

export default function Context({ children }: propsContext): JSX.Element {
  const [authors, setAuthors] = useState<authorsType[]>([]);

  const setSearch = (search: serachTypes) => {
    switch (search) {
      case 'adicionaram':
        localStorage.setItem(
          'description',
          'Usuários que mais criaram commits'
        );
        localStorage.setItem('type', 'adicionaram');
        break;
      case 'commits':
        localStorage.setItem(
          'description',
          'Usuários que mais adicionaram linhas de código'
        );
        localStorage.setItem('type', 'commits');
        break;
      default:
        localStorage.setItem(
          'description',
          ' usuários que mais removeram linhas de código '
        );
        localStorage.setItem('type', 'removeram');
        break;
    }
  };

  return (
    <TypeContext.Provider
      value={{
        authors,
        setAuthors,
        setSearch,
      }}
    >
      {children}
    </TypeContext.Provider>
  );
}

export function useContextAuthors(): returnType {
  const context = useContext(TypeContext) as returnType;
  const { authors, setAuthors, setSearch } = context;
  return { authors, setAuthors, setSearch };
}
