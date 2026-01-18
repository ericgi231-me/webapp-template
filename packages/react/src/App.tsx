import { Route, Routes } from 'react-router-dom'
import { HomePage, NotFoundPage } from './pages'
import { Header } from './components'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  )
}

export default App
