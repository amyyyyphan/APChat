import { useSelector } from "react-redux";

import styles from "./MessageCard.module.css";
import { MESSAGE_TYPE } from "../../constants";

const MessageCard = ({message}) => {
  const userTag = useSelector((state) => state.userTag);

  return (
    <div>
      {message.type === MESSAGE_TYPE.chat ? (
        <div>
          {message.sender === userTag ? (
            <div className={styles.userMessageContainer}>
              <div className={styles.userMessageSender}>{message.sender}</div>
              <div className={styles.userMessageContent}>{message.content}</div>
            </div>
          ) : (
            <div className={styles.otherMessageContainer}>
              <div className={styles.otherMessageSender}>{message.sender}</div>
              <div className={styles.otherMessageContent}>{message.content}</div>
            </div>
          )}
        </div>
      ) : (
        <div>
          {message.type === MESSAGE_TYPE.connect ? (
            <div className={styles.joinMessage}>{message.sender} joined the chat</div>
          ) : (
            <div className={styles.leaveMessage}>{message.sender} left the chat</div>
          )}
        </div>
      )}
    </div>
  )
}

export default MessageCard;