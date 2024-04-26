import React from "react";
import styles from "./UserCard.module.css";
import { UserSkeleton } from "../UserSkeleton/UserSkeleton";

export const UserCard = ({ curUser }) => {
  const formattedDate =
    new Date(curUser?.registered?.date).toLocaleDateString("ru-RU") ?? null;
  return curUser ? (
    <div className={styles.userCard}>
      <img
        className={styles.userCardImage}
        src={curUser.picture.large}
        alt="Фото"
      />
      <div className={styles.title}>
        {curUser.name.title}
        {""} {curUser.name.first}
        {""} {curUser.name.last}
      </div>
      <div className={styles.info}>
        <div className={styles.infoElem}>
          <span className={styles.headers}>Адрес:</span>{" "}
          {curUser.location.country}
        </div>
        <div className={styles.infoElem}>
          <span className={styles.headers}>Email:</span> {curUser.email}
        </div>
        <div className={styles.infoElem}>
          <span className={styles.headers}>Телефон:</span> {curUser.phone}
        </div>
        <div className={styles.infoElem}>
          <span className={styles.headers}>Дата рождения:</span> {formattedDate}
        </div>
      </div>
    </div>
  ) : (
    <UserSkeleton />
  );
};
