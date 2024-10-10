'use client'

import React, { useState } from 'react';
import styles from './InfoModal.module.css';
import Image from 'next/image';

const InfoModal = ({ fruit, onClose }) => {
  const [lang, setLang] = useState("ko")
  return (
    <div className={styles.modal} >
      <div className={styles.modalContent}>
        <span className={styles.close} onClick={onClose}>&times;</span>
        <div style={{display:"flex", alignItems:"flex-end"}}>
          <Image
            src={fruit.image}
            alt="asdf"
            width={70}
            height={100}
          />
          <h2 style={{marginLeft:"10px", marginBottom:"5px"}}>{fruit.gender}</h2>
        </div>
        <div className={styles.lang}>
          <p className={`${lang==="ko" && styles.selected}`}
            onClick={()=>setLang("ko")}
          >
            한국어
          </p>
          <p className={`${lang==="fr" && styles.selected}`}
            onClick={()=>setLang("fr")}
          >
            français
          </p>
        </div>
        {lang==="fr" && <p className={styles.text}>{fruit.france}</p>}
        {lang==="ko" && <p className={styles.text}>{fruit.korean}</p>}
      </div>
    </div>
  );
};

export default InfoModal;
