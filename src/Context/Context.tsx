import React, { createContext, useContext, useState, ReactNode } from 'react';

const TypeContext = createContext({});

export type authorsType = {
  id: number;
  author: string;
  amount: number;
};

type serachTypes = 'commits' | 'adicionaram' | 'removeram';

type returnType = {
  searchType: serachTypes;
  serchDescription: string;
  setSearch: (searchType: serachTypes) => void;
  authors: authorsType[];
  setAuthors: (array: authorsType[]) => void;
};

type propsContext = {
  children: ReactNode;
};

export default function Context({ children }: propsContext): JSX.Element {
  const [authors, setAuthors] = useState<authorsType[]>([]);
  const [searchType, setSearchType] = useState<string>('');
  const [serchDescription, setSerchDescription] = useState<string>('');

  const setSearch = (search: serachTypes) => {
    switch (search) {
      case 'adicionaram':
        setSerchDescription('Usuários que mais criaram commits');
        setSearchType('adicionaram');
        break;
      case 'commits':
        setSerchDescription('Usuários que mais adicionaram linhas de código');
        setSearchType('commits');
        break;
      default:
        setSerchDescription(' usuários que mais removeram linhas de código ');
        setSearchType('removeram');
        break;
    }
  };

  return (
    <TypeContext.Provider
      value={{
        authors,
        setAuthors,
        searchType,
        setSearch,
        serchDescription,
      }}
    >
      {children}
    </TypeContext.Provider>
  );
}

export function useContextAuthors(): returnType {
  const context = useContext(TypeContext) as returnType;
  const {
    authors,
    setAuthors,
    searchType,
    setSearch,
    serchDescription,
  } = context;
  return { authors, setAuthors, searchType, setSearch, serchDescription };
}
