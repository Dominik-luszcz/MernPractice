import './App.css';
import { useState, useEffect } from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';
import Axios from 'axios';

/*
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
*/

function App () {
  <div className='app'>
    <h1>React Router Demo</h1>
    <Navigation />
    <Main />
  </div>
}

const Navigation = () => (
  <nav>
    <ul>
      <li><NavLink to='/'>Home</NavLink></li>
      <li><NavLink to='/calorieCounter'>Calorie Counter</NavLink></li>
    </ul>
  </nav>
);

const Main = () => (
  <Switch>
    <Route exact path='/' component={Home}></Route>
    <Route exact path='/calorieCounter' component={calorieCounter}></Route>
  </Switch>
);

function Home () {
  const [listOfUsers, setListOfUsers] = useState([]);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  //const [sex, setSex] = useState("");
  //const [activity, setActivity] = useState("");
  //const [weight, setWeight] = useState("");
  //const [height, setHeight] = useState("");
  //const [calories, setCalories] = useState("");


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
  <div className='home'>
    <h1>Welcome to The CALORIE CALCULATOR</h1>
    <p> You can add view and add users here</p>
    {listOfUsers.map((user) => {
    return (
      <div>
        <h1>Name: {user.name}</h1>
        <h1>Username: {user.username}</h1>
        <h1>Age: {user.age}</h1>
      </div>
    );
  })}

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
};

const calorieCounter = () => (
  <div className='calorieCounter'>
    <h1>About Me</h1>
    <p>Ipsum dolor dolorem consectetur est velit fugiat. Dolorem provident corporis fuga saepe distinctio ipsam? Et quos harum excepturi dolorum molestias?</p>
    <p>Ipsum dolor dolorem consectetur est velit fugiat. Dolorem provident corporis fuga saepe distinctio ipsam? Et quos harum excepturi dolorum molestias?</p>
  </div>
);

export default App;
