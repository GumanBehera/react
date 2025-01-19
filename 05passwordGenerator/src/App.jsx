import { useCallback, useState,useEffect,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {
  const [length, setlength] = useState(8)
  const [numAllowed, setnumAllowed] = useState(false)
  const [charAllowed, setcharAllowed] = useState(false)
  const [password, setpassword] = useState('')

   // useRef hook
   const passwordRef = useRef(null)

  const passGen = useCallback(() => {
    let pass = ''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

    if(numAllowed) str+="0123456789"
    if(charAllowed) str+="!@#$%^&*-_+=[]{}~`"

    for (let index = 1; index <= length; index++) {
      let char = Math.floor(Math.random()*str.length + 1)
      pass += str.charAt(char)  
    }
    setpassword(pass)
  }, [length, numAllowed, charAllowed, setpassword])

 const copytoClip = useCallback(()=>{
  passwordRef.current?.select()
  window.navigator.clipboard.writeText(password)
 }, [password])

  useEffect(()=>{
    passGen()

  },[length, numAllowed,charAllowed, passGen ])

  return (
   <div 
   className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500 ">
    Password Generator
    <div 
    className="flex shadow rounded-lg overflow-hidden mb-3">
      <input type="text"
      value={password} 
      className="outline-none w-full py-1 px-3"
      placeholder='Password'
      readOnly
      ref={passwordRef}/>

      <button  
      onClick={copytoClip}
      className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy
      </button>

    </div>
    <div className='flex text-sm gap-x-2'>
    <div className='flex items-center gap-x-1'>
      <input 
      type='range'
      min ={6}
      max ={100}
      value={length}
      className='cursor-pointer' 
      onChange={(e)=>{setlength(e.target.value)}}/>
      <label>Length : {length}</label>
      </div>
      </div>

      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={numAllowed}
          id="numberInput"
          onChange={() => {
              setnumAllowed((prev) => !prev);
          }}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>

      
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                  setcharAllowed((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
      
   </div>
  )
}

export default App
