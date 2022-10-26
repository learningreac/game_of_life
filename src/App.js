
import { useEffect, useState, useRef } from 'react';
import './App.css';
import Canvas from './components/Canvas';
import FooterMenu from './components/FooterMenu';
import { generateStore, gameOfLife } from './store';

function App() {
  const [start, setStart] = useState(false);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [grid_size, setGridSize] = useState(1)
  const [cols, setCols] = useState(0)
  const [rows, setRows] = useState(0)
 
  // console.log(width, height, grid_size, rows, cols);

  const g_store = generateStore(rows, cols) ;
  const [board, setBoard] = useState(g_store);


  const canvasContainerRef = useRef(null);
  useEffect(() => {
    const canContainer = canvasContainerRef.current;
    setWidth(canContainer.clientWidth);
    setHeight(canContainer.clientHeight);
    let size = Math.min(canContainer.clientWidth, canContainer.clientHeight) / 10;
    setGridSize(size);
    let c = Math.floor(canContainer.clientWidth / size);
    let r = Math.floor(canContainer.clientHeight / size);
    // console.log('diff', canContainer.clientWidth, c*size);
    setCols(c)
    setRows(r)
    const g_store = generateStore(r, c) ;
    setBoard(g_store)
  },[])


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
      <div id='main' ref={canvasContainerRef}>
        <Canvas board={board} grid_size={grid_size} rows={rows} cols={cols} width={width} height={height}/>
      </div>
      <div id='footer'>
        <FooterMenu handleNextClick={handleNextClick} handleGenerateClick={handleGenerateClick} handleStartClick={handleStartClick} />
      </div>
    </div>
  );
}

export default App;
