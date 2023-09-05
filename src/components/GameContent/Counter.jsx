import { styled } from 'styled-components';
import { device } from 'theme';

const Counter = ({ counter }) => {
  return <Wrapper>{counter}</Wrapper>;
};

export default Counter;

const Wrapper = styled.article`
  height: 160px;
  width: 160px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.3);
  font-size: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media ${device.phone} {
    height: 120px;
    width: 120px;
  }
`;
