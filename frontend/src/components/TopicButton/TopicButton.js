import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import styles from "./TopicButton.module.css";

const TopicButton = ({ topic, text }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch({ type: "SET_CURRENT_CHATROOM", payload: topic });
    const path = "/chat/" + topic;
    navigate(path);
  }

  return (
    <div>
      <button className={styles.topicButton} onClick={handleClick}>{text}</button>
    </div>
  )
}

export default TopicButton;