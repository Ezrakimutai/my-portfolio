import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './Components/NavBar';
import { Banner } from './Components/Banner';
import { Skills } from "./Components/Skills";
import { Projects } from './Components/Projects';
import { Contact } from './Components/Contact';
/*import { Footer } from './Components/Footer';*/

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
