import './App.css';
import {BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Admin from './element/Admin';
import Home from './element/Home';
import Login from './element/Login';

import PrivateRouteadmin from './element/PrivateRouteadmin';
import PrivateRouteuser from './element/PrivateRouteuser';


function App() {

  return (

  <>  
    <BrowserRouter>

      <Routes>
          <Route index path="/" element={<Login />} />
          <Route path="/home" element={<PrivateRouteuser> <Home /> </PrivateRouteuser>}/>
          <Route path="/admin" element={<PrivateRouteadmin> <Admin /> </PrivateRouteadmin>}/>
      </Routes>
      
    </BrowserRouter>
    </>
  );
}

export default App;
