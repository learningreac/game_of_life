
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
  const [board, setBoard] = useState(g_store)

  const handleNextClick = () => {
    let newBoard = gameOfLife(board);
    setBoard(newBoard)
  }

  const handleGenerateClick = () => {
    let g_board = generateStore(rows, cols);
    setBoard(g_board) 
  }

  return (
    <div className="App">
      <Canvas board={board} grid_size={grid_size} rows={rows} cols={cols} />
      <FooterMenu handleNextClick={handleNextClick} handleGenerateClick={handleGenerateClick}/>
    </div>
  );
}

export default App;
