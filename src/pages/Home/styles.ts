import styled from 'styled-components';

type BoxProps = {
  gridArea: string;
};

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.color.redOrangeColorWheel};
  margin: 50px 0 0;
  text-align: center;
  @media (max-width: 500px) {
    margin: 50px 0;
  }
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${({ theme }) => theme.color.earthYellow};
  border-radius: 4px;
  box-shadow: 2px 3px 10px ${({ theme }) => theme.color.earthYellow};
  padding: 30px;
  margin: auto;
`;

export const BoxContainer = styled.div`
  display: grid;
  grid-template-areas:
    'firstItem secondItem'
    'thirdItem thirdItem';

  @media (max-width: 600px) {
    grid-template-areas:
      'firstItem'
      'secondItem'
      'thirdItem';
  }
`;

export const BoxTitle = styled.h2`
  color: ${({ theme }) => theme.color.xiketic};
`;

export const Box = styled.button<BoxProps>`
  border: none;
  text-decoration: none;
  grid-area: ${({ gridArea }) => gridArea};
  padding: 30px;
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.regular};
  font-weight: bold;
  font-size: 20px;
  background: ${({ theme }) => theme.color.redOrangeColorWheel};
  color: ${({ theme }) => theme.color.xiketic};
  margin: 10px;
  border-radius: 5px;
  box-shadow: 2px 4px 4px ${({ theme }) => theme.color.redOrangeColorWheel};
  transition: background 0.5s, color 0.5s, box-shadow 0.5s;
  &:hover {
    background: ${({ theme }) => theme.color.xiketic};
    box-shadow: 2px 4px 4px ${({ theme }) => theme.color.xiketic};
    color: ${({ theme }) => theme.color.redOrangeColorWheel};
  }
`;
