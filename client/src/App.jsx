import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Search, About, Comments, Navbar, Hero, } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <div>
          <Search />
        </div>
        <About />
        <div className="relative z-0">
          <Comments />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;




