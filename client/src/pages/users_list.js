import React from "react";
import axios from "axios";

export default class UsersList extends React.Component {
  state = {
    users: []
  };

  componentDidMount() {
    axios.get('http://localhost:3001/getUsers').then(res => {
      const users = res.data;
      this.setState({ users });
    });
  }

  render() {
    return (
      <select>
        {this.state.users.map(user => <option>{user.name}</option>)}
      </select>
    );
  }
}