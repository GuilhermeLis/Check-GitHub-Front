import styled, { css } from 'styled-components';

type AmountContainerProps = {
  bigger: boolean;
};

export const Container = styled.div`
  display: flex;
  height: 60px;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  border: 1px solid ${({ theme }) => theme.color.xiketic};
  border-radius: 4px;
  margin: 20px;
`;

export const Name = styled.p`
  color: ${({ theme }) => theme.color.xiketic};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-weight: 500;
  font-size: 20px;
`;

export const AmountContainer = styled.div<AmountContainerProps>`
  display: flex;
  /* border: 2px solid ${({ theme }) => theme.color.redOrangeColorWheel}; */
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  padding: 8px;
  ${({ bigger }) =>
    bigger
      ? css`
          /* width: 40px;
          height: 40px; */
        `
      : css`
          /* width: 50px;
          height: 50px; */
        `};
`;

export const Amount = styled.p`
  color: ${({ theme }) => theme.color.xiketic};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-weight: 500;
  font-size: 20px;
`;
