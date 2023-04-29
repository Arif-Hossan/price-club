import './App.css';
import NavBar from './components/NavBar/NavBar';
import Pricing from './Pricing/Pricing';
import AssignmentMarks from './components/AssignmentMarks/AssignmentMarks';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <h1 className='text-4xl bold underline'>Hello from TailWind</h1>
      <Pricing></Pricing>
      <AssignmentMarks></AssignmentMarks>
    </div>
  );
}

export default App;
