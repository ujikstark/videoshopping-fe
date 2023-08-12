import { useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import VideoDetail from './pages/VideoDetail';

function App() {

  return (
    <div className='px-4 py-4'>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/videos/:id" element={<VideoDetail/>} />
      </Routes>
    </div>

  )
}
export default App;
