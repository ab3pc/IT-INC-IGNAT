import React from "react";
import AlternativeMessage from "./AlternativeMessage";
import Message, { PropsMsgType } from "./Message";
import styles from "../../p1-main/m1-ui/u1-app/App.module.css";

const messageData: PropsMsgType = {
  avatar:
    "https://image.freepik.com/free-vector/user-icon-man-business-suit_454641-453.jpg",
  name: "Daniel Abraham",
  message: "Hello, how are you ?",
  time: "22:00",
};

const allMSG: Array<PropsMsgType> = [
  {
    name: "Atrem",
    time: "10:55",
    message: "I'm first",
    avatar: "https://cdn-icons-png.flaticon.com/512/147/147140.png",
  },
  {
    name: "Ben",
    time: " 10:55",
    message: "I'm second",
    avatar: "https://cdn-icons-png.flaticon.com/512/147/147140.png",
  },
  {
    name: "Atrem",
    time: "10:55",
    message: "I'm first ssdfsdfdsfsdfsdfsdfs",
    avatar: "https://cdn-icons-png.flaticon.com/512/147/147140.png",
  },
];

function HW1() {
  const [msg, setMsg] = React.useState<PropsMsgType[]>(allMSG);
  const [inputValue, setInput] = React.useState("");

  const handleSend = () => {
    if (inputValue) {
      let newMSG = {
        name: "Some web developer",
        avatar: "https://cdn-icons-png.flaticon.com/512/147/147140.png",
        message: inputValue,
        time: new Date().toLocaleTimeString(),
      };
      setMsg([...msg, newMSG]);
      setInput("");
    }
  };

  return (
    <div>
      <hr />
      homeworks 1
      <Message
        avatar={messageData.avatar}
        name={messageData.name}
        message={messageData.message}
        time={messageData.time}
      />
      <hr />
      {/*========================CHAT SECTION===========================*/}
      <div className={styles.chat}>
        {msg.map((msg, index) => (
          <AlternativeMessage
            key={index}
            avatar={msg.avatar}
            name={msg.name}
            message={msg.message}
            time={msg.time}
          />
        ))}
      </div>
      <div style={{ backgroundColor: "#ccc", padding: "10px" }}>
        <input
          value={inputValue}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="Enter your message"
          className={styles.input}
        />
        <button
          onClick={handleSend}
          style={{
            padding: "10px",
            fontSize: "20px",
            borderRadius: "5px",
            outline: "none",
            border: "none",
            marginLeft: "5px",
          }}
        >
          Send
        </button>
      </div>
      {/*========================CHAT SECTION===========================*/}
      <hr />
    </div>
  );
}

export default HW1;
