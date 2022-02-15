import React, { useState } from 'react';

import styles from './UserForm.module.css';
import Card from '../UI/Card';

const UserForm = props => {
  const [enteredUserName, setEnteredUserName] = useState('');
  const [enteredAge, setEnteredAge] = useState('');

  const userNameChangeHandler = (event) => {
    setEnteredUserName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    props.onAddUser({
      id: Math.random(),
      userName: enteredUserName,
      age: enteredAge
    });

    setEnteredUserName('');
    setEnteredAge('');
  }


  return (
    <Card>
      <form className={styles['form-control']} onSubmit={submitHandler}>
        <label htmlFor="userName">User Name</label>
        <input id='userName' type='text' value={enteredUserName} onChange={userNameChangeHandler}></input>
        <label htmlFor="age">Age (Years)</label>
        <input id="age" type='text' value={enteredAge} onChange={ageChangeHandler}></input>
        <button type='submit'>Sumbit</button>
      </form>
    </Card>
  );
};

export default UserForm;