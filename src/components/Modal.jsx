import { styled } from 'styled-components';

import { Close } from 'icons';
import { colors, device } from 'theme';

const Modal = ({ closeModalHandler }) => {
  return (
    <Wrapper>
      <ContentWrapper>
        <ModalHeader>
          <h1>RULES</h1>
          <button onClick={closeModalHandler}>
            <Close />
          </button>
        </ModalHeader>
        <img
          src="/images/rules.svg"
          alt="rules"
        />
      </ContentWrapper>
    </Wrapper>
  );
};

export default Modal;

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  background-color: rgba(0, 0, 0, 0.4);
`;

const ContentWrapper = styled.div`
  padding: 30px;
  background-color: ${colors.main};
  border-radius: 8px;
  img {
    @media ${device.phone} {
      height: 230px;
    }
  }
`;

const ModalHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
  color: ${colors.fiord};
  button {
    background: transparent;
    cursor: pointer;
  }
  h1 {
    font-size: 32px;
  }
`;
