import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Countries from './components/countries/Countries';
import Header from './components/header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Countries></Countries>
    </div>
  );
}

export default App;
