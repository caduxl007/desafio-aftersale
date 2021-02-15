import styled from 'styled-components';

interface IContainerProps {
  theme: string;
}

export const Container = styled.div<IContainerProps>`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
  height: 100vh;
  position: relative;

  background: ${(props) =>
    props.theme === 'day'
      ? '-webkit-gradient(linear,0% 0%,0% 100%, from(#33c5ff ), to(#000000))'
      : 'radial-gradient(at 50% 100%, rgba(64,64,96,1), black)'};

  > main {
    width: 300px;
    height: 600px;
    padding: 30px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    background: #0d343a;
    background: rgba(13, 52, 58, 1);

    h2 {
      color: white;
    }
  }

  button {
    width: 60px;
    height: 60px;
    border: 0;
    border-radius: 50%;
    background-color: red;
    margin-left: 50px;
  }
`;

export const Sun = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background: rgb(255, 162, 0);
  border-radius: 50%;
  width: 100px;
  height: 100px;
`;

export const Moon = styled.div`
  position: absolute;
  top: 10px;
  right: 40px;
  width: 100px;
  height: 100px;

  background-color: transparent;
  border-radius: 50%;
  box-shadow: 25px 10px 0 0 gray;
`;
