import { useEffect } from 'react';
import './App.css';
import HeroBody from './components/Herobody';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Aos from 'aos';
import "aos/dist/aos.css"
const App=()=>{
  useEffect(() =>{
    Aos.init();
  },[])
  return (
    <>  
    <Navbar/>
    <HeroBody/>
    <Projects/>
    </>
  );
}

//export default App;

export default App;

