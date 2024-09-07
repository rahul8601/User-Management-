import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Home from './pages/home/Home';
import Details from './pages/details/Details'

function App() {

  return (
    <BrowserRouter>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4 text-center">User Management</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/details/:id' element={<Details />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

