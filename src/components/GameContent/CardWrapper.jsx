import { styled } from 'styled-components';

import { device } from 'theme';

const CardWrapper = ({ children, win }) => {
  return <Wrapper className={win && 'win'}>{children}</Wrapper>;
};

export default CardWrapper;

const Wrapper = styled.div`
  border-radius: 50%;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  &.win {
    box-shadow:
      0 0 0 50px hsla(0, 0%, 100%, 0.07),
      0 0 0 100px hsla(0, 0%, 100%, 0.05),
      0 0 0 150px hsla(0, 0%, 100%, 0.03);
  }
  span {
    font-weight: 700;
    font-size: 20px;
    position: absolute;
    top: -40px;
    @media ${device.phone} {
      font-size: 14px;
    }
  }
`;
