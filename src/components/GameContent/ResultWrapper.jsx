import { styled } from 'styled-components';

import { Button } from 'components';
import { device } from 'theme';

const ResultWrapper = ({ playerWin, contentHandler }) => {
  return (
    <Wrapper>
      <h1>{playerWin === 'win' ? 'YOU WIN' : playerWin === 'lose' ? 'YOU LOSE' : 'DRAW'}</h1>

      <Button
        text="Play Again"
        onClick={contentHandler}
      />
    </Wrapper>
  );
};

export default ResultWrapper;

const Wrapper = styled.div`
  text-align: center;
  @media ${device.phone} {
    order: 2;
    width: 100%;
    margin-top: 20px;
  }
  h1 {
    font-size: 48px;
  }
`;
