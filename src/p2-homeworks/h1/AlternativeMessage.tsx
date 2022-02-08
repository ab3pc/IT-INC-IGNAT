import React from "react";
import { PropsMsgType } from "./Message";
import styles from "./Message.module.css";


function AlternativeMessage({ avatar, name, message, time }: PropsMsgType) {
  return (
      <div className={styles.container}>
            <img src={avatar} className={styles.avatar} alt={name} />
 <div className={`${styles.message} ${styles.altMsg}`}>
    
      <div className={styles.blockMsg}>
        <div className={styles.blockMsgInner}>
          <span className={styles.name}>{name}</span>
          <span className={styles.text}>{message}</span>
        </div>
        <div className={styles.time}>{time}</div>
      </div>
    </div>
      </div>
   
  );
}

export default AlternativeMessage;
