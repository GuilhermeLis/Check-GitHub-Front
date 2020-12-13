import React, { ReactNode } from 'react';

// import { Container } from './styles';

type Props = {
  condition: boolean;
  loading: React.ReactElement;
  children: ReactNode;
};

const ComparisonIf: React.FC<Props> = ({
  condition,
  loading,
  children,
}): JSX.Element => <>{condition ? loading : children}</>;

export default ComparisonIf;
