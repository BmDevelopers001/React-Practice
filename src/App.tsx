import React from 'react';
import './App.css';
import ProjectsPage from './projects/ProductsPage';

import { HashRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import HomePage from './home/HomePage';
import ProjectPage from './projects/ProjectPage';

function App() {
  return (
    <Router>
      <header className='sticky'>
        <span className="logo">
          <img src="/assets/logo-3.svg" alt="logo" width="49" height="99" />
        </span>
        <NavLink to="/" className="button rounded">
          <span className="icon-home"></span>
        </NavLink>
        <NavLink to="/projects" className="button rounded">
          Projects
        </NavLink>
      </header>3
      <div className="container">
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/projects' element={<ProjectsPage />}></Route>
          <Route path='/projects/:id' element={<ProjectPage />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
