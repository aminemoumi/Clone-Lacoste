import React from 'react';
import Navbar from './components/Header'; 
import MainPage from './components/MainPage'; 
import Footer from './components/Footer'; 

const App: React.FC = () => {
  return (
    <div>
      <Navbar />     
      <MainPage />   
      <Footer />     
    </div>
  );
}

export default App;


