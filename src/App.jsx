import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import MemberBoardPage from './pages/MemberBoardPage';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<MemberBoardPage />}></Route>
        <Route path='member' element={<MemberBoardPage />}></Route>
        <Route path='activity' element={<div>Activity</div>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
