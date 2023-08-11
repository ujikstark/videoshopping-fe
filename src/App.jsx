import { useState } from 'react'
import './App.css'

function App() {
  return (
    <div className='px-4 py-4'>
      <div className="flex mb-6 space-x-2">
        <button className='px-4 py-1 rounded-3xl border'>Live</button>
        <button className='px-4 py-1 rounded-3xl border'>Explore</button>
        <button className='px-4 py-1 rounded-3xl border'>Promo ULTAH!</button>
        <button className='px-4 py-1 rounded-3xl border'>Official Store</button>
        <button className='px-4 py-1 rounded-3xl border'>Tips & Rekomendasi</button>
        <button className='px-4 py-1 rounded-3xl border'>Terbaru</button>
        <button className='px-4 py-1 rounded-3xl border'>Upcoming</button>
      </div>
      <div className='grid gap-4 grid-cols-fluid h-full w-full cursor-pointer' onClick={() => {console.log('ganteng')}}>
        <div class="video-item rounded-2xl h-96 shadow-lg relative">
          <img class="object-cover w-full h-full rounded-2xl" src="https://i3.ytimg.com/vi/cuHDJJIGwfE/maxresdefault.jpg" alt="Card Image" />
          <div class="absolute inset-x-0 bottom-0 h-16 px-6 py-2 bg-black bg-opacity-50 text-white rounded-2xl">
            <div className='text-md'>Card Title</div>
            <div className='font-light text-sm'>Ujik ganteng</div>
          </div>
        </div>
        <div class="video-item rounded-2xl h-96 shadow-lg relative">
          <img class="object-cover w-full h-full rounded-2xl" src="https://i3.ytimg.com/vi/cuHDJJIGwfE/maxresdefault.jpg" alt="Card Image" />
          <div class="absolute inset-x-0 bottom-0 h-16 px-6 py-2 bg-black bg-opacity-50 text-white rounded-2xl">
            <div className='text-md'>Card Title</div>
            <div className='font-light text-sm'>Ujik ganteng</div>
          </div>
        </div>
      </div>
    </div>

  )
}
export default App
