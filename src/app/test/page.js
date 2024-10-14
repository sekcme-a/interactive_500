// src/App.js
'use client'
import React, { useState, useEffect } from "react";
import styles from "./page.module.css"

const App = () => {
  const [angle, setAngle] = useState(0); // 원 A의 회전 각도
  const [positionAngle, setPositionAngle] = useState(0); // 원 A의 중심이 원 B를 도는 각도

  const radiusA = 50; // 원 A의 반지름 (px)
  const radiusB = 150; // 원 B의 반지름 (px)

  useEffect(() => {
    // 애니메이션을 위한 인터벌 설정
    const interval = setInterval(() => {
      setPositionAngle((prevAngle) => (prevAngle + 1) % 360);
      setAngle((prevAngle) => (prevAngle + 4) % 360); // 원 A는 4배 빠르게 회전
    }, 30); // 속도 조절 (밀리초 단위)

    return () => clearInterval(interval); // 클린업
  }, []);

  // 원 A의 중심 위치 계산 (원 B의 외부를 따라 이동)
  const centerX = 200 + (radiusB + radiusA) * Math.cos((positionAngle * Math.PI) / 180);
  const centerY = 200 + (radiusB + radiusA) * Math.sin((positionAngle * Math.PI) / 180);

  return (
    <div className={styles.App}>
      <div
        className={styles.circleB}
        style={{
          width: radiusB * 2,
          height: radiusB * 2,
        }}
      />
      <div
        className={styles.circleA}
        style={{
          top: `${centerY}px`,
          left: `${centerX}px`,
          transform: `rotate(${angle}deg)`,
        }}
      />
    </div>
  );
};

export default App;
