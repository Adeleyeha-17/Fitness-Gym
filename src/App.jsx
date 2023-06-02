import { Hero } from "./components/Hero";
import { Plans } from "./components/Plans";
import { Programs } from "./components/Programs";
import { Reasons } from "./components/Reasons";

export default function App() {
  
  return (
    <div className="app">
        <Hero />
        
        <Programs />

        <Reasons />
        
        <Plans />
    </div>
  );
}


