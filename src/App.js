
import { useState } from 'react';
import './App.css';
import Canvas from './components/Canvas';
import FooterMenu from './components/FooterMenu';
import { generateStore, gameOfLife } from './store';

function App() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const grid_size = Math.min(window.innerWidth, window.innerHeight * 0.9) / 10;
  const cols = Math.floor(width / grid_size);
  const rows = Math.floor(height * 0.9 / grid_size);
  // console.log(width, height, grid_size, rows, cols);

  const g_store = generateStore(rows, cols);
  const [board, setBoard] = useState(g_store);
  const [start, setStart] = useState(false);

  const handleNextClick = () => {
    let newBoard = gameOfLife(board);
    setBoard(newBoard)
  }

  const handleGenerateClick = () => {
    let g_board = generateStore(rows, cols);
    setBoard(g_board)
  }

  const handleStartClick = () => {
    setStart(!start);
    console.log(start);
    // while (start) {
    //   handleNextClick();
    //   console.log(board)
    // }
  }

  return (
    <div className="App">
      <header>
        <strong>Game of Life</strong>
      </header>
      <div id='main'>
        {/* <Canvas board={board} grid_size={grid_size} rows={rows} cols={cols} /> */}
      </div>
      <div id='footer'>
        <FooterMenu handleNextClick={handleNextClick} handleGenerateClick={handleGenerateClick} handleStartClick={handleStartClick} />
      </div>
    </div>
  );
}

export default App;
