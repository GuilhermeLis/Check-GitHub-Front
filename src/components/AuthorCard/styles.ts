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
  color: ${({ theme }) => theme.color.xiketic};
  font-size: 20px;
  transition: border 0.2s, background 1.4s, box-shadow 1s, color 1.3s, height 1s,
    font-size 1.5s;
  &:hover {
    border: 2px groove ${({ theme }) => theme.color.xiketic};
    background: ${({ theme }) => theme.color.redOrangeColorWheel};
    box-shadow: 2px 4px 4px ${({ theme }) => theme.color.xiketic};
    color: ${({ theme }) => theme.color.xiketic};
    height: 70px;
    font-size: 30px;
  }
`;

export const Name = styled.p`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-weight: 500;
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
  font-family: ${({ theme }) => theme.fonts.regular};
  font-weight: 500;
`;
