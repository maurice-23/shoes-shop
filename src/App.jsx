import React, { Component } from "react";
import Header from "./component/header/header";
import Hero from "./component/hero/hero";
import Brands from "./component/brands/brands";
import Shoes from "./component/shoes/shoes";
import Value from "./component/value/value";
import Contact from "./component/contact/contact";
import Footer from "./component/footer/footer";
class App extends Component {
  render() {
    return (
      <div className="app">
        <div>
          <div className="white-gradient" />
          <Header />
          <Hero />
        </div>
        <Brands />
        <Shoes />
        <Value />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
