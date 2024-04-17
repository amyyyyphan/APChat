import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import styles from "./TopBar.module.css"

const TopBar = ({ topic }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch({ type: "LEAVE_CURRENT_CHATROOM" });
  }

  return (
    <div className={styles.topBar}>
      <h1 className={styles.title}>APChat</h1>
      <div className={styles.topic}>{topic}</div>
      <Link className={styles.exit} to="/" onClick={handleClick}>Leave</Link>
    </div>
  )
}

export default TopBar;