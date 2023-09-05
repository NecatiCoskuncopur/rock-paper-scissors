import { useEffect, useState } from 'react';
import { styled } from 'styled-components';

import { device } from 'theme';
import { Card, Result } from 'components';

import ResultWrapper from './ResultWrapper';
import CardWrapper from './CardWrapper';
import Counter from './Counter';

const GameContent = ({ setScore, contentHandler, yourPick, score, restartGame }) => {
  const [housePick, setHousePick] = useState('');
  const [playerWin, setPlayerWin] = useState('false');
  const [counter, setCounter] = useState(3);

  useEffect(() => {
    newHousePick();
  }, []);

  useEffect(() => {
    const timer =
      counter > 0
        ? setInterval(() => {
            setCounter(counter - 1);
          }, 1000)
        : result();

    return () => {
      clearInterval(timer);
    };
  }, [counter, housePick]);

  const newHousePick = () => {
    const choices = ['paper', 'scissors', 'rock'];
    setHousePick(choices[Math.floor(Math.random() * 3)]);
  };

  const increaseScore = () => {
    setScore((prevScore) => prevScore + 1);
  };

  const decreaseScore = () => {
    setScore((prevScore) => prevScore - 1);
  };

  const result = () => {
    if (yourPick === 'rock' && housePick === 'scissors') {
      setPlayerWin('win');
      increaseScore();
    } else if (yourPick === 'rock' && housePick === 'paper') {
      setPlayerWin('lose');
      decreaseScore();
    } else if (yourPick === 'scissors' && housePick === 'paper') {
      setPlayerWin('win');
      increaseScore();
    } else if (yourPick === 'scissors' && housePick === 'rock') {
      setPlayerWin('lose');
      decreaseScore();
    } else if (yourPick === 'paper' && housePick === 'rock') {
      setPlayerWin('win');
      increaseScore();
    } else if (yourPick === 'paper' && housePick === 'scissors') {
      setPlayerWin('lose');
      decreaseScore();
    } else {
      setPlayerWin('draw');
    }
  };

  const isFinished = score === 3 || score === -3;

  return (
    <Wrapper>
      <CardWrapper win={playerWin === 'win'}>
        <span>YOU PICKED</span>
        <Card type={yourPick} />
      </CardWrapper>
      {isFinished ? (
        <Result
          restartGame={restartGame}
          score={score}
        />
      ) : (
        counter === 0 && (
          <ResultWrapper
            playerWin={playerWin}
            contentHandler={contentHandler}
          />
        )
      )}
      {counter === 0 ? (
        <CardWrapper win={playerWin === 'lose'}>
          <span>HOUSE PICKED</span>
          <Card type={housePick} />
        </CardWrapper>
      ) : (
        <Counter counter={counter} />
      )}
    </Wrapper>
  );
};

export default GameContent;

const Wrapper = styled.section`
  margin-top: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  @media ${device.phone} {
    justify-content: space-between;
  }
`;
