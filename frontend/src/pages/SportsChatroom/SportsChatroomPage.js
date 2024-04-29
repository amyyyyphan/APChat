import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Client } from "@stomp/stompjs";
import axios from "axios";
import config from "../../config";

import TopBar from "../../components/TopBar/TopBar";
import MessageCard from "../../components/MessageCard/MessageCard";

import { TOPICS, MESSAGE_TYPE } from "../../constants";

import styles from "./SportsChatroomPage.module.css";

const SportsChatroomPage = () => {
  const userTag = useSelector((state) => state.userTag);
  const uniqueId = useSelector((state) => state.uniqueId);
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");

  const client = new Client({
    brokerURL: config.webSocketUrl,
    onConnect: () => {
      client.subscribe("/chat/sports", (frame) => {
        const chatMessage = JSON.parse(frame.body);
        console.log(chatMessage);
        setMessages(messages => [
          ...messages,
          chatMessage,
        ]);
      });

      axios.post(`${config.apiUrl}/chat`, {
        type: MESSAGE_TYPE.connect,
        topic: TOPICS.sports,
        sender: userTag,
        senderId: uniqueId,
        content: "",
      })
    },
  });

  useEffect(() => {
    client.activate();

    const handleLeave = () => {
      client.deactivate();
      axios.post(`${config.apiUrl}/chat`, {
        type: MESSAGE_TYPE.disconnect,
        topic: TOPICS.sports,
        sender: userTag,
        senderId: uniqueId,
        content: "",
      })
      console.log("Disconnected");
    }

    window.addEventListener("beforeunload", handleLeave);

    return () => {
      window.removeEventListener("beforeunload", handleLeave);
      handleLeave();
    }
  }, []);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`${config.apiUrl}/chat`, {
      type: MESSAGE_TYPE.chat,
      topic: TOPICS.sports,
      sender: userTag,
      senderId: uniqueId,
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
    <div>
      <TopBar topic="Sports"/>
      <div className={styles.mainContainer}>
        {messages.map((message) => (
          <MessageCard message={message} />
        ))}
      </div>
      <div className={styles.messageInputContainer}>
        <form className={styles.messageInputForm} onSubmit={handleSubmit}>
          <input
            required
            className={styles.inputField}
            placeholder="Type a message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button className={styles.sendButton} disabled={!message}>Send</button>
        </form>
      </div>
    </div>
  )
}

export default SportsChatroomPage;