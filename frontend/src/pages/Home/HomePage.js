import { TOPICS } from "../../constants";
import TopicButton from "../../components/TopicButton/TopicButton";

import styles from "./HomePage.module.css";

const HomePage = () => {
    return (
      <div className={styles.container}>
        <h1>APChat</h1>
        <div className={styles.selectPrompt}>Select a chatroom to join:</div>
        <TopicButton topic={TOPICS.computerScience}/>
        <TopicButton topic={TOPICS.engineering}/>
        <TopicButton topic={TOPICS.food}/>
        <TopicButton topic={TOPICS.math}/>
        <TopicButton topic={TOPICS.movies}/>
        <TopicButton topic={TOPICS.sports}/>
      </div>
    )
}

export default HomePage;