import React, { Suspense, lazy } from "react";
import { BrowserRouter } from "react-router-dom";

// Lazy load components
const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components/Contact"));
const Experience = lazy(() => import("./components/Experience"));
const Feedbacks = lazy(() => import("./components/Feedbacks"));
const Hero = lazy(() => import("./components/Hero"));
const Navbar = lazy(() => import("./components/Navbar"));
const Tech = lazy(() => import("./components/Tech"));
const Works = lazy(() => import("./components/Works"));
const StarsCanvas = lazy(() => import("./components/canvas/Stars"));

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Suspense fallback={<div>Loading Navbar...</div>}>
            <Navbar />
            <Suspense fallback={<div>Loading Hero...</div>}>
              <Hero />
            </Suspense>
          </Suspense>
        </div>
        <Suspense fallback={<div>Loading About...</div>}>
          <About />
        </Suspense>
        <Suspense fallback={<div>Loading Experience...</div>}>
          <Experience />
        </Suspense>
        <Suspense fallback={<div>Loading Tech...</div>}>
          <Tech />
        </Suspense>
        <Suspense fallback={<div>Loading Works...</div>}>
          <Works />
        </Suspense>
        <Suspense fallback={<div>Loading Feedbacks...</div>}>
          <Feedbacks />
        </Suspense>
        <div className='relative z-0'>
          <Suspense fallback={<div>Loading Contact...</div>}>
            <Contact />
          </Suspense>
          <Suspense fallback={<div>Loading Stars Canvas...</div>}>
            <StarsCanvas />
          </Suspense>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
