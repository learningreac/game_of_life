
import { useState } from 'react';
import './App.css';
import Canvas from './components/Canvas';
import FooterMenu from './components/FooterMenu';
import { store , gameOfLife } from './store';

function App() {
  const [board, setBoard] = useState(store)

  const handleNextClick = () => {
    console.log('btn click')
    let newBoard= gameOfLife(board);
    console.log('new board', newBoard)
    setBoard(newBoard)
  }

  return (
    <div className="App">
      <Canvas board = {board} />
      <FooterMenu handleNextClick = {handleNextClick} />
    </div>
  );
}

export default App;
