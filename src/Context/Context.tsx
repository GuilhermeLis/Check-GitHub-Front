import React, { createContext, useContext, useState, ReactNode } from 'react';

const TypeContext = createContext({});

export type authorsType = {
  name: string;
  amount: number;
};

type returnType = {
  authors: authorsType[];
  setAuthors: (array: authorsType[]) => void;
};

type propsContext = {
  children: ReactNode;
};

export default function Context({ children }: propsContext): JSX.Element {
  const [authors, setAuthors] = useState<authorsType[]>([]);
  return (
    <TypeContext.Provider
      value={{
        authors,
        setAuthors,
      }}
    >
      {children}
    </TypeContext.Provider>
  );
}

export function useContextAuthors(): returnType {
  const context = useContext(TypeContext) as returnType;
  const { authors, setAuthors } = context;
  return { authors, setAuthors };
}
