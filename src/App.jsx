import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';

import './App.css';
import MemberBoard from './pages/MemberBoard';
import LoginForm from './components/LoginForm/LoginForm';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/'>HomePage</Route>
          <Route path='/member' element={<MemberBoard />}>MemberPage</Route>
          <Route path='/activity'>ActivityPage</Route>
          <Route path='*'>Not Found</Route>
        </Routes>
      </BrowserRouter>
      <LoginForm />
    </>
  );
}

export default App;
