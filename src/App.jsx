import React from "react";
// import Banner from "./components/Banner/Banner.jsx";

import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Footer from "./components/Footer/Footer.jsx";
import Experts from "./components/Experts.jsx";
import NewsLetter from "./components/NewsLetter.jsx";
import Plans from "./components/Plans.jsx";

const App = () => {
  return (
    <div className="bg-white dark:text-white duration-200 overflow-x-hidden">
      <Hero />
      <Services />
      {/* <Banner /> */}

      <Experts/>
      <NewsLetter/>
      <Plans/>
      <Footer />
    </div>
  );
};

export default App;
