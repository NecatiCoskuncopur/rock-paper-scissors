import { styled } from 'styled-components';

import { colors } from 'theme';

const Button = ({ text, type, onClick }) => {
  return (
    <StyledButton
      onClick={onClick}
      variant={type}
    >
      {text}
    </StyledButton>
  );
};

export default Button;

const StyledButton = styled.button`
  background: transparent;
  color: ${colors.gullGray};
  letter-spacing: 2px;
  font-weight: 600;
  border: 3px solid ${colors.paleSky};
  border-radius: 6px;
  cursor: pointer;
  transition: all ease-in-out 0.2s;
  &:hover {
    background: ${colors.gallery};
    color: initial;
  }
  ${(p) => (p.variant === 'rules' ? 'padding: 7px 25px;' : 'padding: 10px 20px;')};
`;
