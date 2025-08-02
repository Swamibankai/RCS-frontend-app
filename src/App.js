import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Login from './pages/Login';

function App() {
  // In a real app, you'd have a state to track authentication
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  // A function to handle successful login
  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route 
          path="/*" 
          element={isAuthenticated ? <Layout /> : <Navigate to="/login" />} 
        />
      </Routes>
    </Router>
  );
}

export default App;