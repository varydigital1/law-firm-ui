import { useState } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './page/HomePage';
import AboutPage from './page/AboutPage';
import TeamPage from './page/TeamPage';
import ContactPage from './page/ContactPage';
import DocumentPage from './page/DocumentPage';
import NotFoundPage from './page/NotFoundPage';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import './App.css'

function App() {
  // Custom wrapper to use useLocation inside BrowserRouter
  function AppContent() {
    const location = useLocation();
    // Hide header on NotFoundPage (when path does not match any route)
    const hideHeader = location.pathname !== '/' &&
      location.pathname !== '/about' &&
      location.pathname !== '/team' &&
      location.pathname !== '/contact' &&
      location.pathname !== '/documents';
    return (
      <>
        {!hideHeader && <Header />}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/documents" element={<DocumentPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        {!hideHeader && <Footer/>}
      </>
      
    );
  }
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App