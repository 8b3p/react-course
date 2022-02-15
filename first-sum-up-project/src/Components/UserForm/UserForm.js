import React, { useState } from 'react';

import styles from './UserForm.module.css';
import Card from '../UI/Card';
import ErrorWindow from './ErrorWindow';

const UserForm = props => {
  const [enteredUserName, setEnteredUserName] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const [error, setError] = useState();

  const userNameChangeHandler = (event) => {
    setEnteredUserName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (enteredAge.trim().length === 0 || enteredUserName.trim().length === 0) {
      setError({
        title: 'Invalid Input',
        message: 'Please enter a user name and an age'
      })
      return;
    };
    if (+enteredAge < 1) {
      setError({
        title: 'Invalid Input',
        message: 'Please enter an age more than 0'
      })
      return;
    };

    if(isNaN(enteredAge)) {
      setError({
        title: 'Invalid Input',
        message: 'Please enter a valid age'
      })
      return;
    }

    props.onAddUser({
      id: Math.random(),
      userName: enteredUserName,
      age: enteredAge
    });
    setEnteredUserName('');
    setEnteredAge('');
  };

  const onHandleError = event => {
    setError(undefined);
  }

  return (
    <div>
      {error && <ErrorWindow onConfirm={onHandleError} title={error.title} message={error.message} />}
      <Card>
        <form className={styles['form-control']} onSubmit={submitHandler}>
          <label htmlFor="userName">User Name</label>
          <input id='userName' type='text' value={enteredUserName} onChange={userNameChangeHandler}></input>
          <label htmlFor="age">Age (Years)</label>
          <input id="age" type='text' value={enteredAge} onChange={ageChangeHandler}></input>
          <button type='submit'>Sumbit</button>
        </form>
      </Card>
    </div>
  );
};

export default UserForm;