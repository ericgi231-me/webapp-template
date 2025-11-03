import { Routes, Route, Navigate } from 'react-router-dom';
import { Home, Error } from './pages';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/404" element={<Error/>} />
      <Route path="*" element={<Navigate to="/404" replace />} />
    </Routes>
  );
}

export default App;