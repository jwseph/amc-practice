import { useContext, useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { MathJaxBaseContext } from 'better-react-mathjax'
import './App.css'
import getProblem from './problems'

function Choice({letter, children, disabled, onClick}) {
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
    <button className='active:opacity-50' disabled={disabled} ref={mathBlock}>
      ${`\\textbf{(${letter})}\\ `}{children}$
    </button>
  )
}

export default function App() {
  const [problem, setProblem] = useState(getProblem());

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
  }, [problem]);

  return (
    <div className='w-full min-h-full flex flex-col justify-center items-center font-serif selection:bg-neutral-400/25 selection:text-neutral-950'>
      <div className='relative w-full min-h-[100svh] flex flex-1 bg-neutral-50 justify-center items-center'>
        <img className='absolute w-full h-full opacity-[3%] object-cover' src='https://clipart-library.com/images_k/math-transparent-background/math-transparent-background-1.png' />
        <div className='w-full max-w-xl min-h-[100svh] px-4 sm:px-16 py-4 flex flex-col gap-4 text-neutral-900 z-10'>
          <div className='w-full flex flex-col justify-center items-center'>
            <h1 className='text-xl font-semibold tracking-tight font-sans'>AMC Wordle</h1>
          </div>
          <div className='w-full grow flex flex-col justify-center items-center gap-4'>
            {problem ? <>
              <p ref={mathBlock}>{problem.statement}</p>
              <div className='w-full flex flex-wrap gap-6'>
                {['A', 'B', 'C', 'D', 'E'].map(ch => (
                  <Choice key={ch} letter={ch}>{problem[ch]}</Choice>
                ))}
              </div>
            </> : <>
              <p>
              AMC Wordle has been cancelled bc <a className='underline-0 hover:underline focus:underline underline-offset-1 text-blue-600 active:text-amber-500 decoration-1' href='https://artofproblemsolving.com/wiki/index.php/AMC_12_Problems_and_Solutions'>full previous tests</a> are superior in every way. Go do those instead :) がんばろう！
              </p>
            </>}
          </div>
          <div className='w-full text-center'>
            <a className='normal-nums text-md font-serif'>{problem?.source}</a>
          </div>
        </div>
      </div>
    </div>
  )
}