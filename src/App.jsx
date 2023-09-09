import { useContext, useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { MathJaxBaseContext } from 'better-react-mathjax'
import './App.css'

function Choice({letter, children}) {
  return (
    <button className='hover:text-stone-400 active:text-stone-400'>
      {`$\\textbf{(${letter})}\\ $`}
      {children}
    </button>
  )
}

export default function App() {
  const mjContext = useContext(MathJaxBaseContext);
  const mathBlock = useRef(null);

  useEffect(() => {
    if (mjContext && mathBlock.current) {
      mjContext.promise.then((mathJax) => {
        mathJax.startup.promise.then(() => {
          mathJax.typesetClear([mathBlock.current]);
          mathJax.typesetPromise([mathBlock.current]);
        });
      });
    }
  });
  return (
    <div className='w-full min-h-full flex flex-col justify-center items-center font-serif'>
      <div className='w-full min-h-[100svh] flex flex-1 bg-stone-50 justify-center items-center'>
        <div className='w-full max-w-xl min-h-[100svh] px-6 sm:px-16 py-6 sm:py-8 flex flex-col gap-4 text-stone-800'>
          <div className='w-full flex flex-col justify-center items-center'>
            <h1 className='text-2xl font-bold tracking-tighter'>AMC Wordle</h1>
            <div>A problem a day keeps the doctor away</div>
          </div>
          <div className='w-full grow flex flex-col justify-center items-center gap-4' ref={mathBlock}>
            <p>{'Two non-zero real numbers, $a$ and $b,$ satisfy $ab = a - b$. Which of the following is a possible value of $\\dfrac{a}{b} + \\dfrac{b}{a} - ab$?'}</p>
            <div className='w-full flex flex-wrap gap-6'>
              <Choice letter='A'>{'$- 2$'}</Choice>
              <Choice letter='B'>{'$\\dfrac {- 1}{2}$'}</Choice>
              <Choice letter='C'>{'$\\dfrac {1}{3}$'}</Choice>
              <Choice letter='D'>{'$\\dfrac {1}{2}$'}</Choice>
              <Choice letter='E'>{'$\\dfrac{\\cos^2 \\theta}{1 + \\sin \\theta}$'}</Choice>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}