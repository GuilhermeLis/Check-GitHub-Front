import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ContainerTitle = styled.div`
  display: flex;
  align-self: flex-end;
  align-items: center;
  justify-content: center;
  margin: 20px 50px;
  padding: 20px;
  border-radius: 4px;
  background: ${({ theme }) => theme.color.xiketic};
  color: ${({ theme }) => theme.color.redOrangeColorWheel};
  outline: 2px groove ${({ theme }) => theme.color.redOrangeColorWheel};
  transition: border 0.2s, background 0.4s, box-shadow 0.8s, color 0.1s;
  &:hover {
    outline: none;
    background: ${({ theme }) => theme.color.redOrangeColorWheel};
    box-shadow: 2px 4px 4px ${({ theme }) => theme.color.redOrangeColorWheel};
    color: ${({ theme }) => theme.color.xiketic};
  }
`;

export const Title = styled.p`
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 20px;
  font-weight: bold;
`;

export const MainTable = styled.div`
  background: ${({ theme }) => theme.color.earthYellow};
  width: 90%;
  min-height: 40%;
  max-height: 80%;
  overflow-x: auto;
  border-radius: 4px;
  box-shadow: -2px 4px 4px ${({ theme }) => theme.color.earthYellow};
`;
