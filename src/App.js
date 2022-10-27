
import { useEffect, useState, useRef } from 'react';
import './App.css';
import Canvas from './components/Canvas';
import FooterMenu from './components/FooterMenu';
import { generateStore, gameOfLife } from './store';

function App() {
  const [isStart, setIsStart] = useState(false);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [grid_size, setGridSize] = useState(1)
  const [cols, setCols] = useState(0)
  const [rows, setRows] = useState(0)
  const [stepCount, setSetpCount] = useState(0)
 
  const g_store = generateStore(rows, cols) ;
  const [board, setBoard] = useState(g_store);


  const canvasContainerRef = useRef(null);

  useEffect(() => {
    const canContainer = canvasContainerRef.current;
    setWidth(canContainer.clientWidth);
    setHeight(canContainer.clientHeight);
    let size = Math.min(canContainer.clientWidth, canContainer.clientHeight) / 15;
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
    setBoard(newBoard);
    setSetpCount(stepCount + 1);
    console.log(stepCount)
  }

  const handleResetClick = () => {
    let g_board = generateStore(rows, cols);
    setBoard(g_board);
    setSetpCount(0);
    setIsStart(false);
  }

  const handleStartClick = () => {
    setIsStart(!isStart);
    console.log(isStart);
    // do not call setState in loop
  }

  return (
    <div className="App">
      <header>
        <strong>Game of Life</strong>
      </header>
      <div id='main' ref={canvasContainerRef}>
        <Canvas isStart={isStart} setBoard={setBoard} board={board} grid_size={grid_size} rows={rows} cols={cols} width={width} height={height}/>
      </div>
      <div id='footer'>
        <FooterMenu isStart={isStart} handleNextClick={handleNextClick} handleResetClick={handleResetClick} handleStartClick={handleStartClick} />
      </div>
    </div>
  );
}

export default App;
