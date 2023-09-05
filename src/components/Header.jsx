import { styled } from 'styled-components';

import { colors, device } from 'theme';

const Header = ({ score }) => {
  return (
    <Wrapper>
      <TextWrapper>
        <span>ROCK</span>
        <span>PAPER</span>
        <span>SCISSORS</span>
      </TextWrapper>
      <ScoreWrapper>
        Score
        <p>{score}</p>
      </ScoreWrapper>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 700px;
  border: 3px solid ${colors.paleSky};
  padding: 20px;
  border-radius: 16px;
  margin: 0 auto;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 40px;
  line-height: 32px;
  @media ${device.phone} {
    font-size: 28px;
  }
`;

const ScoreWrapper = styled.div`
  padding: 12px 40px;
  background-color: ${colors.main};
  color: ${colors.ceruleanBlue};
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    font-size: 56px;
    font-weight: 700;
    color: ${colors.fiord};
    @media ${device.phone} {
      font-size: 44px;
    }
  }
`;
