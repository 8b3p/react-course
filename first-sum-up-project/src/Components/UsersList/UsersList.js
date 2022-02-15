import React from 'react';

import Card from '../UI/Card';

import styles from './UsersList.module.css';

const UserItem = props => {
  const deleteHandler = () => {
    props.onDelete(props.user.id)
  }

  return (
    <li onClick={deleteHandler}>
      <p>{props.user.userName}</p>
      <p>{props.user.age}</p>
    </li>
  );
};

const UsersList = props => {
  if (props.Users.length === 0) {
    return (
      <div></div>
    )
  }
  
  return (
    <Card>
      <ul className={styles['user-items']}>
        {props.Users.map(user => (
          <UserItem onDelete={props.onDeleteItem} key={user.id} user={user} />
        ))}
      </ul>
    </Card>
  );
}

export default UsersList;