import './App.css';
import Navbar from './component/Navbar/Navbar';
import Pricing from './component/Priceing/Priceing';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <h1 className="text-5xl">Welcome to my priceing club</h1>
      <Pricing></Pricing>
    </div>
  );
}

export default App;
