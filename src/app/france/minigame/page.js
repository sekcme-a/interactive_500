'use client'

import React, { useState, useEffect } from 'react';
import Header from '@/components/header';
import Card from './component/Card';
import InfoModal from './component/InfoModal';
import { fruitData } from './fruitData'; // 과일 데이터 추가
import styles from "./page.module.css";
import Footer from '@/components/Footer';
import { useRouter } from 'next/navigation';

const cardNames = [
  'Card002', 'Card003', 'Card004','Card005','Card006',
  'Card007','Card008','Card009','Card010',
  // 'Card011','Card012','Card013'
];

const Minigame = () => {
  const router = useRouter()
  const initializeCards = () => {
    const duplicatedCards = [...cardNames, ...cardNames].map((name, index) => ({
      id: index,
      matched: false,
      ...fruitData[name],
      name,
    }));
    return duplicatedCards.sort(() => Math.random() - 0.5);
  };

  const [cards, setCards] = useState(initializeCards());
  const [flippedCards, setFlippedCards] = useState([]);
  const [disableAll, setDisableAll] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [showInfoModal, setShowInfoModal] = useState(false);
  const [currentFruit, setCurrentFruit] = useState(null);

  const [clicked, setClicked] = useState(0)

  const handleCardClick = (card) => {
    setClicked(prev => prev + 1)
    if (disableAll) return;
    if (flippedCards.length === 0) {
      setFlippedCards([card]);
    } else if (flippedCards.length === 1) {
      setFlippedCards([flippedCards[0], card]);
      setDisableAll(true);
    }
  };

  useEffect(() => {
    if (flippedCards.length === 2) {
      const [first, second] = flippedCards;
      console.log(first, second)
      if (first.name === second.name) {
        setCards(prevCards =>
          prevCards.map(card =>
            card.name === first.name ? { ...card, matched: true } : card
          )
        );
        setCurrentFruit(first);
        setTimeout(()=> {
          setShowInfoModal(true); // 정보창 열기
        },500)
        resetFlippedCards();
      } else {
        setTimeout(() => {
          resetFlippedCards();
        }, 500);
      }
    }
  }, [flippedCards]);

  useEffect(() => {
    if (cards.every(card => card.matched)) {
      setGameOver(true);
    }
  }, [cards]);

  const resetFlippedCards = () => {
    setFlippedCards([]);
    setDisableAll(false);
  };

  const resetGame = () => {
    setCards(initializeCards());
    setFlippedCards([]);
    setDisableAll(false);
    setGameOver(false);
    setShowInfoModal(false); // 게임 재시작 시 정보창 닫기
  };

  const closeInfoModal = () => {
    setShowInfoModal(false);
  };

  const openAll = () => {
    setCards(prevCards => prevCards.map(card => ({
      ...card,
      matched: true // 모든 카드의 matched 값을 true로 설정
    })));
    setFlippedCards([...cards]); // 모든 카드를 flippedCards로 설정하여 열기
    setDisableAll(true); // 모든 카드를 열었으므로 클릭을 비활성화
    setGameOver(true)
  };
  

  return (
    <div className={styles.main}>
      <Header />
      <h3>프랑스 현지 의견은 어떨까요?</h3>
      <h4>같은 카드를 뒤집어 현지 의견을 확인하세요!</h4>
      
      <div className={styles.grid}>
        {cards.map(card => (
          <Card
            key={card.id}
            card={card}
            onClick={handleCardClick}
            isFlipped={flippedCards.includes(card)}
            isMatched={card.matched}
          />
        ))}
      </div>

      {/* {gameOver && (
        <div className={styles.gameOver}>
          <h2>축하합니다! 모든 카드를 맞추셨습니다.</h2>
          <button onClick={resetGame}>다시 시작</button>
        </div>
      )} */}

      {showInfoModal && currentFruit && (
        <InfoModal fruit={currentFruit} onClose={closeInfoModal} />
      )}

      {clicked > 15 && !gameOver && 
      <div className={styles.open_all_button} onClick={openAll}>
        <p>모두 열기</p>
      </div>
      }
      {gameOver &&
        <div className={styles.gameover_container}>
          <div className={styles.open_all_button} onClick={()=>router.push("/")}>
            <p>홈으로</p>
          </div>  
        </div>
      }

      <Footer  />
    </div>
  );
};

export default Minigame;
