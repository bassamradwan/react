import logo from './logo.svg';
import './App.css';
import Header from './header/header';
import Moveis from './moveis/moveis';
import FavoritesMovies from './FavoritesMovies/FavoritesMovies';
import { Route, Routes } from 'react-router-dom';
import { LanguageProvider } from './languages/language';
import { useState } from 'react';
import Home from './home/home';

function App() {
  const [Language, setLanguage] = useState('ar')
    return (
    <>
    <LanguageProvider value={{Language, setLanguage}}>
      <Header/>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/Home" element={<Home />} />
        <Route path="/Moveis" element={<Moveis />} />
        <Route path="/favorite" element={<FavoritesMovies />} />
      </Routes>
      </LanguageProvider>
    </>
  );
}

export default App;
