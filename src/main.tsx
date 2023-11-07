import { Suspense, lazy } from 'react'
import { createRoot } from 'react-dom/client'
import './global.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const Login = lazy(() => import('./views/Login').then(r => ({ default: r.Login })))

const container = document.getElementById('root')

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

container && createRoot(container).render(<App />)
