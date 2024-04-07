import styles from "./TopicButton.module.css";

const TopicButton = ({ topic }) => {
  return (
    <div>
      <button className={styles.topicButton}>{topic}</button>
    </div>
  )
}

export default TopicButton;