import React from "react";



class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user:localStorage.getItem("user_name"),
      email:localStorage.getItem("user_email"),
    };
  }
  render() {
    return (
      <main style={{margin:"0px 150px"}} >
      <h1>{`Hello ${this.state.user}!`}</h1>
      <h4>{this.state.email}</h4>
      </main>
    );
  }
}

export default Profile ;