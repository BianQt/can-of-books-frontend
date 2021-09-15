import { Component } from "react";
import { withAuth0 } from "@auth0/auth0-react";

class Profile extends Component {
  render() {
    const user = this.props.auth0.user;
    return (
      <div style={{margin:"0 150px"}}>
      <div className="row align-items-center profile-header">
        <div className="col-md-2 mb-3">
          <img
            src={user.picture}
            alt="Profile"
            className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
            style={{width:"100%"}}
          />
        </div>
        <div className="col-md  text-md-left">
          <h2 style={{margin:"0 0 0 5px"}}>{user.name}</h2>
          <p className="lead text-muted">{user.email}</p>
        </div>
      </div>
      <div className="row">
        <pre className="col-12 text-dark bg-light p-4">
          {JSON.stringify(user, null, 2)}
        </pre>
      </div>
    </div>
    );
  }
}

export default withAuth0(Profile);
