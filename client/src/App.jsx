import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import PublicRoute from './routes/publicRoute'
import Landing from './pages/Landing'
import Chat from './pages/Chat'
import NotFound from './pages/NotFound'
import Terms from './pages/Terms'
import Privacy from './pages/Privacy'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Landing/>}/>
          
          <Route path='/chat' element={
            <PublicRoute>
              <Chat/>
            </PublicRoute>
          }/>
        
          <Route path='*' element={<NotFound/>}/>

          <Route path='terms' element={<Terms/>}/>
          <Route path='privacy' element={<Privacy/>}/>

        </Routes>
      </Router>
    </>
  )
}

export default App
