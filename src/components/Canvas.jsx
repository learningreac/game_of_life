import React, { useEffect, useRef } from 'react'



const Canvas = (props) => {
  const canvasRef = useRef(null);
  const { board} = props;
 
  //console.log('canvasRef', canvasRef)

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
   // console.log('window', window.innerWidth, window.innerHeight)
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight * 0.9;
    const grid_size = canvas.height /10;
    const x = Math.floor(canvas.height / grid_size);
    const y = Math.floor(canvas.width / grid_size);

   // console.log('board', board)
    const m = board.length;
    const n = board[0].length;


    const draw = (ctx, board) => {
     
      for (let i = 0; i < x; i++) {
        for (let j = 0; j < y; j++) {

          if (i<m && j<n && board[i][j] === 1) {
            ctx.fillStyle = 'yellow'
          } else {
            ctx.fillStyle = 'lightgrey'
          }

          ctx.fillRect(j * grid_size, i * grid_size, grid_size, grid_size);
          ctx.strokeRect(j * grid_size, i * grid_size, grid_size, grid_size);
        }
      }
    }

    if (board && canvas) {
      draw(ctx, board)
    }

  }, [board])

  return (
    <canvas ref={canvasRef} {...props} />
  )
}

export default Canvas