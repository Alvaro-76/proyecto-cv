import { Routes, Route } from 'react-router-dom';
import './App.css';

import MainLayout from './layouts/MainLayout.jsx';
import Home from './pages/Home.jsx';
import Experience from './pages/Experience.jsx';
import Education from './pages/Education.jsx';
import Skills from './pages/Skills.jsx';
import Contact from './pages/Contact.jsx';
import NotFound from './pages/NotFound.jsx';
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

function App() {

  return (
    <>
    <div className="notebook-page">
      <Header />
      <div className="notebook-content">
        <div className="notebook-circles"></div>
        <Routes>
          <Route element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/education" element={<Education />} />
            <Route path="/skills" element={<Skills />} />          
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
        <Footer />
      </div>  
    </div>
    </>
  )
}

export default App
