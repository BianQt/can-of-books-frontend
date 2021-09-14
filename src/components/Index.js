import React from "react";
import Header from "./Header";
import Books from "./BestBooks";
import Footer from "./Footer";



class Index extends React.Component {
  render() {
    console.log("index",this.props.email);
    return (
      <main>
      <Header/>
      <div style={{margin:"0px 150px"}}>
      <Books user={this.props.user}
      email={this.props.email} />
      </div>
      <Footer/>
      </main>
    );
  }
}

export default Index;
