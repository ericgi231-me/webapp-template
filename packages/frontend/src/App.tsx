import { Routes, Route, Navigate } from 'react-router-dom';
import { Home, Error, About } from './pages';
import { Header, Footer } from './components';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/404" element={<Error/>} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;