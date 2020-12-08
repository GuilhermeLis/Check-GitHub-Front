import React, { ReactNode } from 'react';

// import { Container } from './styles';

type Props = {
  condition: boolean;
  children: ReactNode;
};

const ComparisonAnd: React.FC<Props> = ({
  condition,
  children,
}): JSX.Element => <>{condition && children}</>;

export default ComparisonAnd;
