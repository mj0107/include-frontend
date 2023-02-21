import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';

import './App.css';
import MemberBoard from './pages/MemberBoard';
import ActivityBoard from './pages/ActivityBoard';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/'>HomePage</Route>
          <Route path='/member' element={<MemberBoard />}>MemberPage</Route>
          <Route path='/activity' element={<ActivityBoard />}>ActivityPage</Route>
          <Route path='*'>Not Found</Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
