import React, { useEffect, useRef } from 'react'



const Canvas = (props) => {
  const canvasRef = useRef(null);
  const { board, grid_size, rows, cols, width, height } = props;
  const offset = (width - cols*grid_size)/2;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = width;
    canvas.height = height;

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

      // // outline
      // ctx.beginPath();
      // ctx.lineWidth = 10;
      // ctx.strokeRect(offset, 0, cols*grid_size, height)
    }

    const render = () => {
      window.requestAnimationFrame(render);
      // clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      if (board && canvas) {
        draw(ctx, board)
      }
    };

    render();

  }, [board])

  return (
    <canvas ref={canvasRef} {...props} />
  )
}

export default Canvas