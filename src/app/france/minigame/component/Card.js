'use client'

import React, { useState } from 'react';
import styles from './Card.module.css';
import Image from 'next/image';
import { fruitData } from '../fruitData';// 과일 데이터 추가
import InfoModal from './InfoModal';

const Card = ({ card, onClick, isFlipped, isMatched }) => {
  const [showModal, setShowModal] = useState(false)
  const handleClick = () => {
    if (!isFlipped && !isMatched) {
      onClick(card);
    }
    else if(isMatched)setShowModal(true)
  };

  return (
    <>
    <div
      className={`${styles.card} ${isFlipped || isMatched ? styles.flipped : ''}`}
      onClick={handleClick}
    >
      <div className={styles.inner}>
        <div className={styles.front}>
          <p style={{display:"none"}}>{card.name}</p>
          <Image
            src={fruitData[card.name]?.image}
            alt={card.name}
            layout="fill"
            objectFit='cover'
            style={{borderRadius: "8px", overflow:"hidden"}}
          />
        </div>
        <div className={styles.back}>
          <Image
            src="/card/back.png"
            alt="카드 뒷면"
            layout="fill"
            objectFit='cover'
            style={{borderRadius: "8px", overflow:"hidden"}}
          />
        </div>
      </div>
    </div>
    {showModal &&
      <InfoModal fruit={card} onClose={()=>setShowModal(false)} />
}
    </>
  );
};

export default Card;
