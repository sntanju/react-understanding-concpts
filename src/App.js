
import './App.css';
import Device from './components/Device/Device';
import { useEffect, useState } from 'react';
import Books from './components/Books/Books';

function App() {
  const [steps, setSteps] = useState(0);
  const books = [
    {name: 'Small Giants', author: 'Bo'},
    {name: 'Build to sell', author: 'Jhon'},
    {name: 'Grind it', author: 'Ray'},
    {name: 'Shoe Dog', author: 'bo'},
  ]



  const handleIncreaseSteps = () => {
    const newStepsCount = steps + 1;
    setSteps(newStepsCount)
  }
  useEffect( () => {
    console.log(steps)
  }, [steps])

  return (
    <div className="App">
      <h3>My Steps: {steps}</h3>
      <button onClick={handleIncreaseSteps}>Walk</button>
      <Device name="phone" steps={steps} price="13500"></Device>
      <Books books= {books}></Books>
    </div>
  );
}

export default App;
