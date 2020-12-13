import styled from 'styled-components';

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

export const AmountContainer = styled.div`
  display: flex;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  padding: 8px;
`;

export const Amount = styled.p`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-weight: 500;
`;
