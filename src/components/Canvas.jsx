import React, { useEffect, useRef } from 'react'
import { gameOfLife } from '../store';


const Canvas = (props) => {
  const canvasRef = useRef(null);
  const { isStart, setBoard, board, grid_size, rows, cols, width, height } = props;
  const props2Dom = { board, grid_size, rows, cols, width, height };
  const offset = (width - cols * grid_size) / 2;

  let local_board = useRef(board); // local board update render by canvas
 

  useEffect(() => {
    if (isStart === true && local_board.current!==null) {
      const timerID = setInterval(() => {
       // console.log('Timeout called!');
        let cur = gameOfLife(local_board.current);
        local_board.current = cur;
       console.log('new', local_board.current)
      }, 500);
      return () => clearInterval(timerID);
    } 
    // // suppose only be called when isStart is false
    setBoard(local_board.current);
    console.log(local_board.current)
  }, [isStart]);

  useEffect(() => {
    local_board.current = board;
    //console.log('ref', local_board.current, board)
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = width;
    canvas.height = height;
    let animationFrameId;

    const draw = (ctx, board) => {
      for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
          if (board[i][j] === 1) {
            ctx.fillStyle = 'yellow'
          } else {
            ctx.fillStyle = 'lightgrey'
          }

          ctx.fillRect(offset + j * grid_size, i * grid_size, grid_size, grid_size);
          ctx.strokeRect(offset + j * grid_size, i * grid_size, grid_size, grid_size);
        }
      }

    }

    const render = () => {
      animationFrameId = window.requestAnimationFrame(render);
      // clear canvas
      //ctx.clearRect(0, 0, canvas.width, canvas.height);
      if(board && canvas) {
          draw(ctx, local_board.current)
      }
     
    };

    render();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    }

  }, [board, local_board.current])

  // setBoard(local_board.current)

  return (
    <canvas ref={canvasRef} {...props2Dom} />
  )
}

export default Canvas