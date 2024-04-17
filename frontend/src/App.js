import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";

import styles from "./App.module.css"

import CreateUserTagPage from "./pages/CreateUserTag";
import FoodChatroomPage from "./pages/FoodChatroomPage";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  return (
    <div className={styles.app}>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/create-user-tag" element={<CreateUserTagPage />}/>
        <Route path="/chat/food" element={<ProtectedRoute><FoodChatroomPage /></ProtectedRoute>}/>
      </Routes>
    </div>
  );
}

export default App;
