import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Pricing from "./components/Pricing";
import fitness from '../src/assets/fitness.mp4'

import Programs from "./components/Programs";

function App() {
  return (
    <div className="bg-[#01152e]" >
       <div className="h-screen">
        <div className="absolute top-0 left-0 w-full h-screen bg-[#00000090]"></div>
       <video src={fitness} autoPlay loop  muted className="w-full h-screen object-cover">
        
        
      </video>
     
        <NavBar />
      <Home />

        </div>
      
      
      
      
      <Programs />
      <Pricing />
     
     <Blog />
     <Contact />
    </div>
  );
}

export default App;
