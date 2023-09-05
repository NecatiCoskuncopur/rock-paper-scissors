import { styled } from 'styled-components';

import { device } from 'theme';

import Card from './Card';

const Play = ({ contentHandler }) => {
  return (
    <Wrapper>
      <img
        src="/images/triangle.svg"
        alt="triangle"
      />
      <Paper>
        <button onClick={() => contentHandler('paper')}>
          <Card type="paper" />
        </button>
      </Paper>
      <Scissors>
        <button onClick={() => contentHandler('scissors')}>
          <Card type="scissors" />
        </button>
      </Scissors>
      <Rock>
        <button onClick={() => contentHandler('rock')}>
          <Card type="rock" />
        </button>
      </Rock>
    </Wrapper>
  );
};

export default Play;

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  margin-top: 50px;
  width: calc(100% - 16px);
  position: relative;
  img {
    align-self: center;
    margin-top: 240px;
    position: absolute;
  }
  button {
    background: transparent;
    cursor: pointer;
  }
`;

const Paper = styled.div`
  transform: translate(24px);
  @media ${device.phone} {
    transform: translate(0);
  }
`;

const Scissors = styled.div`
  transform: translate(128px);
`;

const Rock = styled.div`
  transform: translate(-160px) translateY(208px);
  @media ${device.phone} {
    transform: translate(-128px) translateY(208px);
  }
`;
