import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Switch from "react-router-dom";
import Home from '../pages/Home';


const AppRouter = () => {
    return (
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            
            
          </Routes>
        </div>
      </Router>
    );
  };
  
  export default AppRouter;