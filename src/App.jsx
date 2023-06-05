import { Hero } from "./components/Hero";
import { Join } from "./components/Join";
import { Plans } from "./components/Plans";
import { Programs } from "./components/Programs";
import { Reasons } from "./components/Reasons";
import { Testimonial } from "./components/Testimonial";

export default function App() {
  
  return (
    <div className="app">
        <Hero />
        
        <Programs />

        <Reasons />

        <Plans />

        <Testimonial />

        <Join />


    </div>
  );
}


