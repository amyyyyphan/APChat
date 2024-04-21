import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";

import styles from "./App.module.css"

import CreateUserTagPage from "./pages/CreateUserTag";
import FoodChatroomPage from "./pages/FoodChatroom";
import ProtectedRoute from "./components/ProtectedRoute";
import ComputerScienceChatroomPage from "./pages/ComputerScienceChatroom";

const App = () => {
  return (
    <div className={styles.app}>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/create-user-tag" element={<CreateUserTagPage />}/>
        <Route path="/chat/computer-science" element={<ProtectedRoute><ComputerScienceChatroomPage /></ProtectedRoute>}/>
        <Route path="/chat/food" element={<ProtectedRoute><FoodChatroomPage /></ProtectedRoute>}/>
      </Routes>
    </div>
  );
}

export default App;
