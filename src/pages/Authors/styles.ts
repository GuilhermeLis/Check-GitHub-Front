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
  height: 40px;
  padding: 20px;
  border-radius: 4px;
  background: ${({ theme }) => theme.color.earthYellow};
  color: ${({ theme }) => theme.color.xiketic};
  &:hover {
    background: ${({ theme }) => theme.color.buff};
    box-shadow: 2px 4px 4px ${({ theme }) => theme.color.xiketic};
    color: ${({ theme }) => theme.color.earthYellow};
  }
`;

export const Title = styled.p``;

export const MainTable = styled.div`
  background: ${({ theme }) => theme.color.earthYellow};
  width: 90%;
  min-height: 40%;
  max-height: 80%;
  overflow-x: auto;
  border-radius: 4px;
  box-shadow: -2px 4px 4px ${({ theme }) => theme.color.earthYellow};
`;
