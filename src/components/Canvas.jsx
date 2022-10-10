import React, { useEffect, useRef } from 'react'
import { store } from '../store';

const m = store.length;
const n = store[0].length;
console.log(m,n);



const Canvas = (props) => {
    const canvasRef = useRef(null);


    useEffect(() => {
        const canvas= canvasRef.current;
        const ctx = canvas.getContext('2d');
        console.log('window', window.innerWidth, window.innerHeight)
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const draw = ctx => {
            ctx.fillRect(0, 0, 100, 100);
            ctx.strokeRect(0,100,100,100);
            ctx.strokeRect(100,0,100,100);
            ctx.fillRect(100,100,100,100)
          }
    
        draw(ctx)
        
    },[])

  return (
    <canvas ref={canvasRef} {...props}/>
  )
}

export default Canvas