import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Client } from "@stomp/stompjs";
import axios from "axios";
import config from "../../config";

import TopBar from "../../components/TopBar/TopBar";
import ChatMessageCard from "../../components/ChatMessageCard/ChatMessageCard";

import { TOPICS, MESSAGE_TYPE } from "../../constants";

import styles from "./FoodChatroomPage.module.css";

const FoodChatroomPage = () => {
  const navigate = useNavigate();

  const userTag = useSelector((state) => state.userTag);
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");

  const client = new Client({
    brokerURL: config.webSocketUrl,
    onConnect: () => {
      client.subscribe("/chat/food", (frame) => {
        const chatMessage = JSON.parse(frame.body);
        console.log(chatMessage);
        setMessages(messages => [
          ...messages,
          chatMessage,
        ]);
      });
    },
  });

  useEffect(() => {
    if (!userTag) {
      navigate("/create-user-tag");
    }

    client.activate();

    return () => {
      client.deactivate();
    }
  }, [userTag]);
  
  const handleClick = () => {
    axios.post(`${config.apiUrl}/chat`, {
      type: MESSAGE_TYPE.chat,
      topic: TOPICS.food,
      sender: userTag,
      content: message,
    })
    .then(() => {
      setMessage("");
    })
    .catch((error) => {
      console.log(error);
    })
  }

  return (
    <div className={styles.container}>
      <TopBar topic={TOPICS.food}/>
      <div className={styles.mainContainer}>
        {messages.map((message) => (
          <ChatMessageCard message={message} />
        ))}
      </div>
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