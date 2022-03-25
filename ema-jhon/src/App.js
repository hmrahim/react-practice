
import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';

function App() {
  const [products,setProduct] = useState([])
  useEffect(()=>{
    fetch("https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json")
    .then(res => res.json())
    .then(data => setProduct(data))
  },[])
  return (
    <div className="App">
      <Header></Header>
      <Shop products={products}></Shop>
    
    </div>
  );
}

export default App;

