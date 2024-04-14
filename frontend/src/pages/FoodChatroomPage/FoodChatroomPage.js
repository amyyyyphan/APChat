import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import apiUrl from "../../config";

import TopBar from "../../components/TopBar/TopBar";

import { TOPICS, MESSAGE_TYPE } from "../../constants";

import styles from "./FoodChatroomPage.module.css";

const FoodChatroomPage = () => {
  const navigate = useNavigate();

  const userTag = useSelector((state) => state.userTag);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (!userTag) {
      navigate("/create-user-tag");
    }
  }, [userTag]);
  
  const handleClick = () => {
    axios.post(`${apiUrl}/chat`, {
      type: MESSAGE_TYPE.chat,
      topic: TOPICS.food,
      sender: userTag,
      content: message,
    })
    .then((response) => {
      setMessage("");
    }), (error) => {
      console.log(error);
    }
  }

  return (
    <div className={styles.container}>
      <TopBar topic={TOPICS.food}/>
      <div className={styles.messageInput}>
        <input
          required
          className={styles.inputField}
          placeholder="Type a message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button className={styles.sendButton} onClick={handleClick}>Send</button>
      </div>
    </div>
  )
}

export default FoodChatroomPage;