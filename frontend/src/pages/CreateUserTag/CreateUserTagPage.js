import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import styles from "./CreateUserTagPage.module.css";

const CreateUserTagPage = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const userTagInfo = useSelector((state) => state.userTag);
  const currentChatroom = useSelector((state => state.currentChatroom));

  const [userTag, setUserTag] = useState("");

  useEffect(() => {
    if (userTagInfo && !currentChatroom) {
      navigate("/");
    }
  }, [userTagInfo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "SET_USER_TAG", payload: userTag });

    if (currentChatroom) {
      const path = "/chat/" + currentChatroom;
      navigate(path);
    } else {
      navigate("/");
    }
  };

  return (
    <div>
      <div className={styles.topBar}>
        <div className={styles.topBarContent}>
          <Link className={styles.title} to="/">APChat</Link>
        </div>
      </div>
      <div className={styles.userTagForm}>
        <form onSubmit={handleSubmit}>
          <div className={styles.enterUserTagPrompt}>
            <label>Enter a user tag for this session</label>
          </div>
          <input
            className={styles.userTagInput}
            placeholder="User Tag"
            onChange={(e) => setUserTag(e.target.value)}
          />
          <div className={styles.userTagExplanation}>The user tag is needed to allow you and others to respond to a specific user.</div>
          <button className={styles.startChattingButton}>Start Chatting</button>
        </form>
      </div>
    </div>
  )
}

export default CreateUserTagPage;