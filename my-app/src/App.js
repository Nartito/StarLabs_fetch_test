import React, { useEffect, useState } from 'react'
import User from './components/User';
import './App.css';

const App = () => {

  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetchData();
  },[])

  const fetchData = async () => {
    await fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.json())
    .then((data) => setUsers(data))
    .catch((err) => {
       console.log(err);
    }) 
  }

  console.log(users)
  return (
    <div className='App' >
      <h3>React CRUD Using JSONPlaceholder</h3>
      <div>
        {
          users.map((user) => (
            <User id={user.id} key={user.id} name={user.name} email={user.email} />
          ))
        }
      </div>
    </div>
  )

}

export default App;
