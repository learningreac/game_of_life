import React, { useEffect, useRef } from 'react'



const Canvas = (props) => {
  const canvasRef = useRef(null);
  const { board, grid_size, rows, cols } = props;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight * 0.9;

    const draw = (ctx, board) => {
      for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
          if (board[i][j] === 1) {
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