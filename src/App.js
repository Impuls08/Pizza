import React from "react";
import {Header} from './components';
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { Route, Routes } from "react-router-dom";


function App() {

  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" Component={Home} exact />
            <Route path="/cart" Component={Cart} exact />
          </Routes>
        </div>
      </div>
    </div>
  )
}


export default App;
