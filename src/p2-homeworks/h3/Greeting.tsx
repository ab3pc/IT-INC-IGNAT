import React from "react";
import s from "./Greeting.module.css";
import { UserType } from "./HW3";

type GreetingPropsType = {
  name: string;
  setNameCallback: (e: React.ChangeEvent<HTMLInputElement>) => void;
  addUser: () => void;
  error: string;
  totalUsers: number;
  users: UserType[];
  onKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void;
};

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
  { name, setNameCallback, addUser, error, totalUsers, users, onKeyPress } // деструктуризация пропсов
) => {
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNameCallback(e);
  };
  const keyPressHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    onKeyPress(e);
  };
  const inputClass = s.input + " " + (error ? `${s.error}` : "");

  return (
    <>
    
    <div className={s.input__inner}>
      <div>
        <input
          value={name}
          onKeyPress={keyPressHandler}
          onChange={onChangeHandler}
          onBlur={onChangeHandler}
          className={inputClass}
          placeholder="Enter your name, samurai"
        />
        <div className={s.someClass}>{error}</div>
      </div>
      <div>
        <button className={s.btn} onClick={addUser}>
          add
        </button>
        <span className={s.count}>{totalUsers}</span>
      </div>

    
    </div>
      {users.map((u, index) => (
        <span className={s.names} key={u._id}>
          {index + 1}:{u.name}
        </span>
      ))}
      </>
  );
  
};

export default Greeting;
