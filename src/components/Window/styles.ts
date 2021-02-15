import styled from 'styled-components';

interface IWindowProps {
  schedule: boolean;
}

export const Container = styled.div<IWindowProps>`
  width: 100px;
  height: 80px;
  cursor: pointer;
  background-color: ${(props) => (props.schedule ? 'black' : 'white')};
`;
