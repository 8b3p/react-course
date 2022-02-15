import React, { useState } from 'react';

import UserForm from './Components/UserForm/UserForm';
import UsersList from './Components/UsersList/UsersList';

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = addedUser => {
    setUsersList(prevState => {
      return [addedUser, ...prevState];
    })
  }

  const deleteUserHandler = userID => {
    setUsersList(prevList => {
      const updatedList = prevList.filter(User => User.id !== userID);
      return updatedList
    })
  }

  console.log(usersList)
  return (
    <div>
      <UserForm onAddUser={addUserHandler} />
      <UsersList Users={usersList} onDeleteItem={deleteUserHandler}/>
    </div>
  );
}

export default App;
