import React from 'react';
import About from './sections/About';
import ContactMe from './sections/ContactMe';
import Header from './sections/Header';
import Main from './sections/Main';
import Toolbar from './sections/Toolbar';
import Footer from './sections/Footer';
import './styles/style.css';
import './styles/style-720.css';
import './styles/style-1080.css';

function App() {
  return (
    <div className='App'>
      <Toolbar />
      <Header />
      <Main />
      <About />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
