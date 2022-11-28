import logo from "./logo.svg";
import "./App.css";
import ReactDOM from "react-dom";
import {
  BrowserRouter,
  Route,
  Link,
  Routes,
} from 'react-router-dom';
import React from 'react';
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';
import Resources from './pages/Resources.js';
import Home from './pages/Home.js';
import Login from './pages/Login.js';
import Entry from './pages/Entry.js';
import Signup from './pages/Signup.js';
import CreateEntry from './pages/CreateEntry';
import Profile from './pages/Profile';



function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/entry" element={<Entry />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/create" element={<CreateEntry />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}


export default App;
