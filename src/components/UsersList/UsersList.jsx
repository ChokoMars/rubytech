import React from "react";
import styles from "./UsersList.module.css";
import { User } from "../User/User";

export const UsersList = (props) => {
  if (!props?.users?.length) {
    return <h1 style={{ textAlign: "center" }}> Пользователи не найдены!</h1>;
  }

  return (
    <div className={styles.userList}>
      <div className={styles.usersHeader}>
        <div className={styles.usersHeaderItem}>№</div>
        <div className={styles.usersHeaderItem}>Имя</div>
        <div className={styles.usersHeaderItem}>Пол</div>
        <div className={styles.usersHeaderItem}>Страна</div>
        <div className={styles.usersHeaderItem}>Возраст</div>
      </div>
      <div>
        {props.users.map((user, index) => (
          <User
            key={user.cell}
            number={index + 1}
            user={user}
            onSelectUser={() => props.onSelectUser(user.cell)}
          />
        ))}
      </div>
      <div ref={props.currentRef} className={styles.lastElem}></div>
    </div>
  );
};
