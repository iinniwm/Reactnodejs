import './App.css';
import React from 'react';
import {
  BrowserRouter as Router, 
  Routes, 
  Route,
  Link
} from 'react-router-dom';
import Home from './page/Home';
import Record from './page/Record';

const App = () =>{
    return(
      <>
      <Router>
        <div className='App'>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/Record'>About</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Record' element={<Record/>} />
        </Routes>
        </div>
      </Router>
      </>
    );
}

export default App;
