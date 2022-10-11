import React, { useEffect, useRef } from 'react'
import { store } from '../store';

const m = store.length;
const n = store[0].length;


const Canvas = (props) => {
  const canvasRef = useRef(null);
  //console.log('canvasRef', canvasRef)

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    console.log('window', window.innerWidth, window.innerHeight)
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;


    const draw = (ctx, store) => {
     
      for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {

          if (store[i][j] === 1) {
            ctx.fillStyle = 'yellow'
          } else {
            ctx.fillStyle = 'grey'
          }

          ctx.fillRect(j * 50, i * 50, 50, 50);
          ctx.strokeRect(j * 50, i * 50, 50, 50);
        }
      }
    }

    if (store) {
      draw(ctx, store)
    }

  }, [store])

  return (
    <canvas ref={canvasRef} {...props} />
  )
}

export default Canvas