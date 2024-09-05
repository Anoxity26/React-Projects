import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")
  
  return (
    <div className="h-screen w-full" style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 ">
        <div className="flex flex-wrap justify-center gap-3 bg-white px-3 py-2 rounded-3xl">
          <button
            className="px-4 py-1 rounded-full bg-red-500 text-white shadow-lg"
            onClick={() => setColor("red")}
          >
            Red
          </button>
          <button
            className="px-4 py-1 rounded-full bg-green-500 text-white shadow-lg"
            onClick={() => setColor("green")}
          >
            Green
          </button>
          <button
            className="px-4 py-1 rounded-full bg-purple-500 text-white shadow-lg"
            onClick={() => setColor("purple")}
          >
            Purple
          </button>
          <button
            className="px-4 py-1 rounded-full bg-yellow-500 text-white shadow-lg"
            onClick={() => setColor("yellow")}
          >
            Yellow
          </button>
          <button
            className="px-4 py-1 rounded-full bg-white text-black shadow-lg"
            onClick={() => setColor("white")}
          >
            White
          </button>
          <button
            className="px-4 py-1 rounded-full bg-black text-white shadow-lg"
            onClick={() => setColor("black")}
          >
            Black
          </button>
          <button
            className="px-4 py-1 rounded-full bg-blue-500 text-white shadow-lg"
            onClick={() => setColor("blue")}
          >
            Blue
          </button>
          <button
            className="px-4 py-1 rounded-full bg-pink-500 text-white shadow-lg"
            onClick={() => setColor("pink")}
          >
            Pink
          </button>
        </div>
      </div>
    </div>
  );
}

export default App
