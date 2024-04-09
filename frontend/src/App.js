import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";

import styles from "./App.module.css"
import CreateUserTagPage from "./pages/CreateUserTag";

const App = () => {
  return (
    <div className={styles.app}>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/create-user-tag" element={<CreateUserTagPage />}/>
      </Routes>
    </div>
  );
}

export default App;
