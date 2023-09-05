import { styled } from 'styled-components';

import { device } from 'theme';

import Button from './Button';

const Result = ({ score, restartGame }) => {
  return (
    <Wrapper>
      <h3>{score === 3 ? 'Congratz! You win this game.' : 'House win this game.'}</h3>
      <Button
        text="New Game"
        onClick={restartGame}
      />
    </Wrapper>
  );
};

export default Result;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  @media ${device.phone} {
    order: 2;
    width: 100%;
    margin-top: 20px;
  }
`;
