import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Pricing from './Pricing/Pricing';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <h1 className='text-4xl bold underline'>Hello from TailWind</h1>
      <Pricing></Pricing>
    </div>
  );
}

export default App;
