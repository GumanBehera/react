import { useState } from "react"


function App() {
const [color , setcolor] = useState('olive')

  return (
    <div className="w-full h-screen duration-200"
      style = {{backgroundColor : color}}>
        <div 
        className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div 
        className="flex flex-wrap justify-center gap-3 shadow-lg bg-slate-50 px-3 py-2 rounded-3xl">
          <button 
          onClick={() => setcolor('red')}
          className="outline-none px-4 py-1 rounded-full shadow-lg text-white"
          style={{backgroundColor : 'Red'}}>Red</button>
          <button 
          onClick={() => setcolor('blue')}
          className="outline-none px-4 py-1 rounded-full shadow-lg text-white"
          style={{backgroundColor : 'blue'}}>Blue</button>
          <button 
          onClick={() => setcolor('green')}
          className="outline-none px-4 py-1 rounded-full shadow-lg text-white"
          style={{backgroundColor : 'green'}}>Green</button>
          <button 
          onClick={() => setcolor('yellow')}
          className="outline-none px-4 py-1 rounded-full shadow-lg text-white"
          style={{backgroundColor : 'yellow'}}>Yellow</button>
          <button 
          onClick={() => setcolor('pink')}
          className="outline-none px-4 py-1 rounded-full shadow-lg text-white"
          style={{backgroundColor : 'pink'}}>Pink</button>
          <button
          onClick={() => setcolor('gold')}
          className="outline-none px-4 py-1 rounded-full shadow-lg text-white"
          style={{backgroundColor : 'gold'}}>Gold</button>
          <button
          onClick={() => setcolor('silver')}
          className="outline-none px-4 py-1 rounded-full shadow-lg text-white"
          style={{backgroundColor : 'silver'}}>Silver</button>
          </div>
        </div>
        </div>
   
  )
}

export default App
