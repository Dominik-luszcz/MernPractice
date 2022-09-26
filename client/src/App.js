import './App.css';
import { useState, useEffect } from 'react';
import Axios from 'axios';

function App() {
  const [listOfUsers, setListOfUsers] = useState([]);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");

  useEffect(() => {
    Axios.get('http://localhost:3001/getUsers').then((response) => {
      setListOfUsers(response.data)
    })
  }, []);

  const createUser = () => {
    Axios.post('http://localhost:3001/createUser', {name, age, username, password}).then((response) => {
      setListOfUsers([...listOfUsers, {name, age, username, password}])
    })
  }

  return (
    <div className="App">
      <div className="userDisplay">
        {listOfUsers.map((user) => {
          return (
            <div>
              <h1>Name: {user.name}</h1>
              <h1>Username: {user.username}</h1>
              <h1>Age: {user.age}</h1>
            </div>
          );
        })}
      </div>

      <div>
        <input type = "text" placeholder='Name...' onChange={(event) => {
          setName(event.target.value);
        }}/>
        <input type = "text" placeholder='Username...' onChange={(event) => {
          setUsername(event.target.value);
        }}/>
        <input type = "text" placeholder='Password...' onChange={(event) => {
          setPassword(event.target.value);
        }}/>
        <input type = "Number" placeholder='Age...' onChange={(event) => {
          setAge(event.target.value);
        }}/>
        <button onClick={createUser}> Create User </button>
      </div>
    </div>
  );
}

export default App;
