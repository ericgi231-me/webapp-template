import './App.css'
import { Route, Routes } from 'react-router-dom'
import { default as Home } from './pages/Home'
import NotFound from './pages/NotFound'
import HomeSecond from './pages/HomeSecond'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/test" element={<HomeSecond />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
