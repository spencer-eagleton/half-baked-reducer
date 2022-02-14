import { useReducer, useEffect, useState } from 'react'

const pinkRGB = `rgb(236, 72, 153)`


const initialState = { count: 0, color: pinkRGB };


export default function Counter() {
  const [currentColor, setCurrentColor] = useState(pinkRGB)

  const getColor = (count) => {
    if (count === 0) {
      setCurrentColor(pinkRGB)
    }
    
    if (count > 0) {
      setCurrentColor(`rgb(52, 211, 153)`)
    }
    
    if (count < 0) {
      setCurrentColor(`rgb(239, 68, 68)`
      )  }
      
    }
    
    
    function counterReducer(state, { type }) {
      switch (type) {
        case 'increment': 
        return { count: state.count + 1, color: getColor(state.count + 1) };
        case 'decrement': 
        return { count: state.count - 1, color: getColor(state.count - 1) };
        case 'reset':
          return { count: 0, color: getColor(0) }
          default:
            throw new Error(`type not recognized ${type}`);
            
          }
        }
        
        const [count, dispatch] = useReducer(counterReducer, initialState)
        // const [count, setCount] = useState(0)

   

  const increment = () => {
    dispatch({
      type: 'increment'
    })
  }

  const decrement = () => {
    dispatch({
      type: 'decrement'
    })
  }

  const reset = () => {
    dispatch({
      type: 'reset'
    })
    
  }

  return (
    <main className="bg-black bg-opacity-90 min-h-screen flex flex-col items-center justify-center text-4xl text-pink-500">
      <h1 className="mb-5" style={{ color: currentColor }}>
        {count.count}
      </h1>
      <div className="flex w-1/2 justify-around">
        <button
          className="text-green-400 border-2 border-green-400 p-3"
          type="button"
          onClick={increment}
          aria-label="increment"
        >
          Increment
        </button>
        <button
          className="text-red-500 border-2 border-red-500 p-2"
          type="button"
          onClick={decrement}
          aria-label="decrement"
        >
          Decrement
        </button>
        <button
          className="text-pink-500 border-2 border-pink-500 p-2"
          type="button"
          aria-label="reset"
          onClick={reset}
        >
          Reset
        </button>
      </div>
    </main>
  )
}
