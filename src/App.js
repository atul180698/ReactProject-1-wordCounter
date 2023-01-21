// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

function App() {
  return (
    <>
      <Navbar home="Home"/>
      <div className="container my-3">
        <Textform heading="Enter your text below"/>
      </div>
    </>
  );
}

export default App;
