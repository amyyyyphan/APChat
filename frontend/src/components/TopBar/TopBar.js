import { Link } from "react-router-dom";

import styles from "./TopBar.module.css"

const TopBar = ({ topic }) => {
  return (
    <div className={styles.topBar}>
      <h1 className={styles.title}>APChat</h1>
      <div className={styles.topic}>{topic}</div>
      <Link className={styles.exit} to="/">Exit</Link>
    </div>
  )
}

export default TopBar;