import './App.css';
import Header from './components/Header/Header';
import Intro from './components/Intro/Intro';
import Facts from './components/Facts/Facts'

import TerryChill from './img/Terrychill.png'

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <Facts />
      <img className="App__TerryChill" src={TerryChill} />
    </div>
  );
}

export default App;
