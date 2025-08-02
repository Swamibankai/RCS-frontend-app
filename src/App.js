import React, { useEffect } from 'react';
import { Routes, Route, Navigate, useLocation, useNavigate } from 'react-router-dom';
import Layout from './components/Layout';
import Login from './pages/Login';

function App() {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const redirectedPath = params.get('path');
    if (redirectedPath) {
      navigate(decodeURIComponent(redirectedPath), { replace: true });
    }
  }, [location.search, navigate]);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  return (
    <Routes>
      <Route path="/login" element={<Login onLogin={handleLogin} />} />
      <Route 
        path="/*" 
        element={isAuthenticated ? <Layout /> : <Navigate to="/login" />} 
      />
    </Routes>
  );
}

export default App;