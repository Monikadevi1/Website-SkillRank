import React from 'react';
import Home from './Home';
import HowItWorks from './HowItWorks';
import Features from './Features';
import AboutUs from './AboutUs';
import Contact from './ContactUs';
import Header from './Header'; // Adjust the path as needed





function App() {
  return (
    <div className="App">
      <Header />
      {/* All components are now rendered on the same page */}
      <Home />
      <HowItWorks />
      <Features />
      <AboutUs />
      <Contact />
    </div>
  );
}

export default App;


