import React, { useEffect, useRef } from 'react'
import { store } from '../store';

const m = store.length;
const n = store[0].length;
console.log(m, n);



const Canvas = (props) => {
  const canvasRef = useRef(null);

  console.log('canvasRef', canvasRef)

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    console.log('window', window.innerWidth, window.innerHeight)
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const draw = ctx => {
      // ctx.fillRect(0, 0, 100, 100);
      // ctx.strokeRect(0,100,100,100);
      // ctx.strokeRect(100,0,100,100);
      // ctx.fillRect(100,100,100,100)

      for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 6; j++) {
          if ((i+j)%2 === 0) {
            ctx.fillStyle = 'black'
          } else {
            ctx.fillStyle = 'yellow'
          }
          ctx.fillRect(j * 25, i * 25, 25, 25);
        }
      }
    }

    draw(ctx)

  }, [])

  return (
    <canvas ref={canvasRef} {...props} />
  )
}

export default Canvas