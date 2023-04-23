import logo from './logo.svg';
import './App.css';
import Header from './Header.js';
import Carousels from './Carousels';
import Login from './Components/Auth/Login';

function App() {
  return (
    <div className="App">
      <Header />
      <Carousels />
      <Login />
    </div>
  );
}

export default App;
