import { css, styled } from 'styled-components';

import { colors, device } from 'theme';

const Card = ({ type }) => {
  return <Wrapper variant={type} />;
};

export default Card;

const Wrapper = styled.div`
  background-color: ${colors.main};
  color: ${colors.fiord};
  border: 18px solid;
  height: 160px;
  width: 160px;
  border-radius: 50%;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;

  @media ${device.phone} {
    height: 120px;
    width: 120px;
  }
  ${(p) =>
    p.variant === 'paper' &&
    css`
      border-color: ${colors.royalBlue};
      background-image: url('/images/paper.svg');
      background-position: 50%;
      background-repeat: no-repeat;
      box-shadow:
        inset 0 5px 6px gray,
        0 8px ${colors.blue};
    `};
  ${(p) =>
    p.variant === 'scissors' &&
    css`
      border-color: ${colors.gamboge};
      background-image: url('/images/scissors.svg');
      background-position: 50%;
      background-repeat: no-repeat;
      box-shadow:
        inset 0 5px 6px gray,
        0 8px ${colors.butteredRum};
    `};
  ${(p) =>
    p.variant === 'rock' &&
    css`
      border-color: ${colors.ceriseRed};
      background-image: url('/images/rock.svg');
      background-position: 50%;
      background-repeat: no-repeat;
      box-shadow:
        inset 0 5px 6px gray,
        0 8px ${colors.roofTerracotta};
    `};
`;
