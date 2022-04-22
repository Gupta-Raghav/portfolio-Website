import './App.css';
import About from './components/Aboutme/About';
import Experience from './components/Experience/Experience';
import Hero from './components/Hero/Hero';


function App() {
  return (
    <div className="App">
      <Hero/>
      <About/>
      <Experience/>
    </div>
  );
}

export default App;
