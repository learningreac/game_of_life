
import { useState } from 'react';
import './App.css';
import Canvas from './components/Canvas';
import FooterMenu from './components/FooterMenu';
import { store, gameOfLife } from './store';

function App() {
  const [board, setBoard] = useState(store)
  const width = window.innerWidth;
  const height = window.innerHeight;
  const grid_size = Math.min(window.innerWidth, window.innerHeight * 0.9) / 10;
  const cols = Math.floor(width / grid_size);
  const rows = Math.floor(height*0.9 / grid_size);

  console.log(width, height, grid_size, rows, cols);

  const handleNextClick = () => {
    let newBoard = gameOfLife(board);
    setBoard(newBoard)
  }

  return (
    <div className="App">
      <div className='canvas'>
        <Canvas board={board} grid_size={grid_size} rows={rows} cols={cols} />
      </div>
      <div className='footer'>
        <FooterMenu handleNextClick={handleNextClick} />
      </div>

    </div>
  );
}

export default App;
