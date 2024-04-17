import { useSelector } from "react-redux";

import styles from "./ChatMessageCard.module.css";

const ChatMessageCard = ({message}) => {
  const userTag = useSelector((state) => state.userTag);

  return (
    <div>
      {message.sender === userTag ? (
        <div className={styles.userMessageContainer}>
          <div className={styles.userMessageSender}>{message.sender}</div>
          <div className={styles.userMessageContent}>{message.content}</div>
        </div>
      ) : (
        <div>
          <div className={styles.otherMessageContainer}>
            <div className={styles.otherMessageSender}>{message.sender}</div>
            <div className={styles.otherMessageContent}>{message.content}</div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ChatMessageCard;