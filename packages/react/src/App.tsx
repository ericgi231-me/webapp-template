import { Route, Routes } from 'react-router-dom'
import { Home, NotFound } from './pages'
import { Header } from './components'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
