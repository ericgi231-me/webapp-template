import { Route, Routes } from 'react-router-dom'
import { HomePage, NotFoundPage, RestPage, SocketPage } from './pages'
import { Header } from './components'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/rest" element={<RestPage />} />
        <Route path="/socket" element={<SocketPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  )
}

export default App
