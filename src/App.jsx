import HomePage from './pages/home/index.jsx';
import LoginPage from './pages/login/index.jsx';
import RegisterPage from './pages/register/index.jsx';

import { Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <main className="absolute inset-0 flex flex-col items-center justify-center h-full gap-y-4">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </main>
  );
}
