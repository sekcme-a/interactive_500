// pages/MiniGame.js
'use client'
import { useEffect, useRef, useState } from 'react';

const MiniGame = () => {
  const [snake, setSnake] = useState([[10, 10]]);
  const [direction, setDirection] = useState('RIGHT');
  const [food, setFood] = useState([Math.floor(Math.random() * 20), Math.floor(Math.random() * 20)]);
  const [gameOver, setGameOver] = useState(false);
  const gridSize = 20; // 20x20 grid
  const intervalRef = useRef(null);

  // Handle keydown events
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowUp' && direction !== 'DOWN') setDirection('UP');
      else if (e.key === 'ArrowDown' && direction !== 'UP') setDirection('DOWN');
      else if (e.key === 'ArrowLeft' && direction !== 'RIGHT') setDirection('LEFT');
      else if (e.key === 'ArrowRight' && direction !== 'LEFT') setDirection('RIGHT');
    };

    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [direction]);

  // Start the game loop
  useEffect(() => {
    if (gameOver) return;

    intervalRef.current = setInterval(() => {
      moveSnake();
    }, 150); // Speed up the game

    return () => clearInterval(intervalRef.current);
  }, [snake, direction, gameOver]);

  // Move the snake
  const moveSnake = () => {
    const newSnake = [...snake];
    const head = newSnake[0];
    let newHead;

    // Calculate the new head position
    if (direction === 'UP') newHead = [head[0] - 1, head[1]];
    else if (direction === 'DOWN') newHead = [head[0] + 1, head[1]];
    else if (direction === 'LEFT') newHead = [head[0], head[1] - 1];
    else if (direction === 'RIGHT') newHead = [head[0], head[1] + 1];

    // Check for collisions
    if (
      newHead[0] < 0 || newHead[0] >= gridSize ||
      newHead[1] < 0 || newHead[1] >= gridSize ||
      newSnake.slice(1).some(segment => segment[0] === newHead[0] && segment[1] === newHead[1])
    ) {
      setGameOver(true);
      clearInterval(intervalRef.current);
      return;
    }

    // Check if snake eats food
    if (newHead[0] === food[0] && newHead[1] === food[1]) {
      newSnake.unshift(newHead);
      setFood([Math.floor(Math.random() * gridSize), Math.floor(Math.random() * gridSize)]);
    } else {
      newSnake.unshift(newHead);
      newSnake.pop();
    }

    setSnake(newSnake);
  };

  // Reset the game
  const resetGame = () => {
    setSnake([[10, 10]]);
    setDirection('RIGHT');
    setFood([Math.floor(Math.random() * gridSize), Math.floor(Math.random() * gridSize)]);
    setGameOver(false);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Snake Game</h1>
      <div style={styles.grid}>
        {Array.from({ length: gridSize }).map((_, row) =>
          Array.from({ length: gridSize }).map((_, col) => {
            const isSnake = snake.some(segment => segment[0] === row && segment[1] === col);
            const isFood = food[0] === row && food[1] === col;
            return (
              <div
                key={`${row}-${col}`}
                style={{
                  ...styles.cell,
                  backgroundColor: isSnake ? '#4CAF50' : isFood ? '#FF5733' : '#F1F1F1',
                }}
              />
            );
          })
        )}
      </div>
      {gameOver && (
        <div style={styles.gameOver}>
          <h2 style={styles.gameOverText}>Game Over!</h2>
          <button style={styles.restartButton} onClick={resetGame}>Play Again</button>
        </div>
      )}
    </div>
  );
};

// Styles for the game
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#282c34',
    color: '#ffffff',
  },
  title: {
    fontSize: '3rem',
    marginBottom: '20px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: `repeat(${20}, 30px)`, // Increased cell size for better visibility
    gridTemplateRows: `repeat(${20}, 30px)`,
    gap: '1px',
  },
  cell: {
    width: '30px',
    height: '30px',
    border: '1px solid #ccc',
  },
  gameOver: {
    marginTop: '20px',
    textAlign: 'center',
  },
  gameOverText: {
    fontSize: '2rem',
  },
  restartButton: {
    padding: '10px 20px',
    fontSize: '1.5rem',
    color: '#fff',
    backgroundColor: '#007bff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default MiniGame;
