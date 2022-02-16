import React, { useState, useRef } from 'react';

import styles from './UserForm.module.css';
import Card from '../UI/Card';
import ErrorWindow from './ErrorWindow';

const UserForm = props => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  
  const [error, setError] = useState();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredUserName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;
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
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
  };

  const onHandleError = event => {
    setError(undefined);
  }

  return (
    <>
      {error && <ErrorWindow onConfirm={onHandleError} title={error.title} message={error.message} />}
      <Card>
        <form className={styles['form-control']} onSubmit={submitHandler}>
          <label htmlFor="userName">User Name</label>
          <input id='userName' type='text' ref={nameInputRef}></input>
          <label htmlFor="age">Age (Years)</label>
          <input id="age" type='text' ref={ageInputRef}></input>
          <button type='submit'>Sumbit</button>
        </form>
      </Card>
    </>
  );
};

export default UserForm;