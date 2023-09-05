import { styled } from 'styled-components';
import { FiGithub, FiLinkedin } from 'react-icons/fi';

import { colors, device } from 'theme';

import Button from './Button';

const Footer = ({ openModalHandler }) => {
  return (
    <Wrapper>
      <IconWrapper>
        <a
          href="https://github.com/NecatiCoskuncopur"
          target="_blank"
          rel="noreferrer noopener"
        >
          <FiGithub size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/necati-coskuncopur/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <FiLinkedin size={24} />
        </a>
      </IconWrapper>
      <Button
        text="Rules"
        type="rules"
        onClick={openModalHandler}
      />
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.footer`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 16px;
  position: fixed;
  bottom: 0;
  right: 0;
  @media ${device.phone} {
    width: 75%;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  a {
    text-decoration: none;
    cursor: pointer;
    color: ${colors.main};
  }
`;
