import React from "react";
import styles from "./Message.module.css";

export type PropsMsgType = {
  avatar: string;
  name: string;
  message: string;
  time: string;
};

function Message({ avatar, name, message, time }: PropsMsgType) {
  return (
    <div className={styles.container}>
      <img src={avatar} className={styles.avatar} alt={name} />

      <div className={styles.message}>
        <div className={styles.blockMsg}>
          <div>
            <span className={styles.name}>{name}</span>
            <span className={styles.text}>{message}</span>
          </div>
          <div className={styles.time}>{time}</div>
        </div>
      </div>
    </div>
  );
}

export default Message;
