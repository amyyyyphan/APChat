import { TOPICS } from "../../constants";
import TopicButton from "../../components/TopicButton/TopicButton";

import styles from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={styles.container}>
      <h1>APChat</h1>
      <div className={styles.selectPrompt}>Select a chatroom to join:</div>
      <TopicButton topic={TOPICS.computerScience} text="Computer Science"/>
      <TopicButton topic={TOPICS.engineering} text="Engineering"/>
      <TopicButton topic={TOPICS.food} text="Food"/>
      <TopicButton topic={TOPICS.math} text="Math"/>
      <TopicButton topic={TOPICS.movies} text="Movies"/>
      <TopicButton topic={TOPICS.sports} text="Sports"/>
    </div>
  )
}

export default HomePage;