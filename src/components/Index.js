import React from "react";
import Header from "./Header";
import Books from "./BestBooks";
import Footer from "./Footer";
import 'bootstrap/dist/css/bootstrap.min.css';


class Index extends React.Component {
  render() {
    return (
      <main>
      <Header/>
      <div style={{marginLeft:"150px"}}>
      <Books />
      </div>
      <Footer/>
      </main>
    );
  }
}

export default Index;
