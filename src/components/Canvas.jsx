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

   // console.log('board', board)
    const m = board.length;
    const n = board[0].length;


    const draw = (ctx, board) => {
     
      for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {

          if (board[i][j] === 1) {
            ctx.fillStyle = 'yellow'
          } else {
            ctx.fillStyle = 'grey'
          }

          ctx.fillRect(j * 50, i * 50, 50, 50);
          ctx.strokeRect(j * 50, i * 50, 50, 50);
        }
      }
    }

    if (board) {
      draw(ctx, board)
    }

  }, [board])

  return (
    <canvas ref={canvasRef} {...props} />
  )
}

export default Canvas