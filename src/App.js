import { useState } from 'react';
import { styled } from 'styled-components';

import { Footer, GameContent, Header, Modal, Play } from 'components';

const App = () => {
  const [openModal, setOpenModal] = useState(false);
  const [score, setScore] = useState(0);
  const [isGameContent, setIsGameContent] = useState(false);
  const [yourPick, setYourPick] = useState('');

  const contentHandler = (name) => {
    setYourPick(name);
    setIsGameContent(!isGameContent);
  };

  const openModalHandler = () => {
    setOpenModal(true);
  };

  const closeModalHandler = () => {
    setOpenModal(false);
  };

  const restartGame = () => {
    setScore(0);
    setIsGameContent(!isGameContent);
  };
  return (
    <Container>
      <Header score={score} />

      {isGameContent ? (
        <GameContent
          setScore={setScore}
          contentHandler={contentHandler}
          yourPick={yourPick}
          score={score}
          restartGame={restartGame}
        />
      ) : (
        <Play contentHandler={contentHandler} />
      )}
      {openModal && <Modal closeModalHandler={closeModalHandler} />}
      <Footer openModalHandler={openModalHandler} />
    </Container>
  );
};

export default App;

const Container = styled.main`
  padding: 30px 16px;
`;
