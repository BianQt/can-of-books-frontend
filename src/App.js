import React from "react";
import Header from "./components/Header";
import Index from "./components/Index";
import Footer from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component {

  render() {
    return (
      <div>
      <Header/>
      <Index/>
      <Footer/>
      </div>
    )
  }
}

export default App;
