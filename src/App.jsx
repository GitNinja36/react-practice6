import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("bg-blue-400");
  const [track, setTrack] = useState(0);

  function handelClick(){
    setColor(prevColor => prevColor === "bg-blue-400" ? "bg-blue-500" : "bg-blue-400")
  }

  return (
    <div className='border-2 border-gray-500 rounded-t-xl h-200'>
      {/* Quote corner */}
      <div className=' 
          bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 
          h-20 rounded-t-xl 
          text-center'
      >
        <div className='flex justify-center pt-5 text-3xl font-sans text-white'>News you can trust</div>
      </div>
      {/* Content Corner */}
      <div className='flex flex-col pt-8'>
        <div className='text-xl'>Stay up to date with latest!</div>
        <div className='pt-2'>Subscribe to our newsletter for the latest news straight into your inbox</div>
      </div>
      <div className='flex flex-col pt-7'>
        <div>
          <input type="text" placeholder='your@gmail.com' className='bg-slate-300 h-8 w-50 rounded-md pl-10 pb-0.5'/>
        </div>
        <div>
          <button className={`mt-3 w-60 h-8 rounded-xl  text-white ${color}`} onClick={handelClick}>Subscribe now</button>
        </div>
      </div>
      <div className='pt-4 pb-3'>we value your privacy</div>
    </div>
  )
}

export default App
