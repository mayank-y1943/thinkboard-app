import React from 'react'
import { Route, Routes } from 'react-router'
import HomePage from './pages/NoteHomePage'
import CreatePage from './pages/NoteCreatePage'
import NoteDetailsPage from './pages/DetailsPage'

const App = () => {
  return (
    <div>
      <div class="fixed top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div>
      <Routes>
        <Route path="/" element={ <HomePage/> } />
        <Route path="/create" element={ <CreatePage/> } />
        <Route path="/note/:id" element={ <NoteDetailsPage/> } />
      </Routes>
    </div>
  )
}

export default App
