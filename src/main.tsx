import {Suspense,lazy} from 'react'
import { createRoot } from 'react-dom/client'
import './global.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

const Login = lazy(() => import('./views/Login').then(r => ({default: r.Login})))

const container = document.getElementById('root')


const App = () => (
  <BrowserRouter>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </Suspense>
  </BrowserRouter>
)

container &&  createRoot(container).render(<App />)
