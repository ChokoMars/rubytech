import React from "react";
import styles from "./User.module.css";

export const User = ({
  onSelectUser,
  number,
  user: { registered, gender, location, name },
}) => {
  return (
    <div className={styles.user} onClick={onSelectUser}>
      <div className={styles.userElem}>{number}</div>
      <div className={styles.userElem}>
        {name.first} {name.last}
      </div>
      <div className={styles.userElem}>{gender}</div>
      <div className={styles.userElem}>{location.country}</div>
      <div className={styles.userElem}>{registered.age}</div>
    </div>
  );
};
