import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/nav.jsx"
import Home from './pages/home.jsx'
import Country from './pages/country.jsx'


function App() {


  const [search, setSearch] = useState('All');

  return (
    <>
      <Router>
      <Nav
        search={search}
        setSearch={setSearch}
      />


        <Routes>
          <Route path="/" element={<Home search={search} />} />
          <Route path="/country/:name" element={<Country />} />
        </Routes>


      </Router>
    </>
  );
}

export default App;
