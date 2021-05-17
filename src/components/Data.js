// import React, { Component } from "react";
// import Data from "./Data";


// export default class data extends Component {
//   render() {
//     return (
//       <>
//         <Data />
//       </>
//     );
//   }
// }


import React, { Component } from "react";
import API from "../utils/API";
import Table from "./Table";
// import Nav from "./Nav";

export default class Data extends Component {
  // I am now considering the Body to be the parent component of my children later on.
  state = {
    users: [],
    filteredUsers: [],
  };

  componentDidMount() {
    // Mount the data to run after this component renders to the page
    API.getUsers().then((res) => {
      // Mapped through it because this is the value I wanted to hold, not really needed at this point honestly.
      const holdData = res.data.results.map((user) => {
        return user;
      });
      this.setState({
        users: holdData,
      });
      console.log(this.state.users);
    });
  }

  render() {
    return (
      <div className="container">
        <Table users={this.state.users} />
      </div>
    );
  }
}
