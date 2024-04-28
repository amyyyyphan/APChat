import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";

import styles from "./App.module.css"

import CreateUserTagPage from "./pages/CreateUserTag";
import FoodChatroomPage from "./pages/FoodChatroom";
import ProtectedRoute from "./components/ProtectedRoute";
import ComputerScienceChatroomPage from "./pages/ComputerScienceChatroom";
import EngineeringChatroomPage from "./pages/EngineeringChatroom";
import MathChatroomPage from "./pages/MathChatroom";
import MoviesChatroomPage from "./pages/MoviesChatroom";
import SportsChatroomPage from "./pages/SportsChatroom";

const App = () => {
  return (
    <div className={styles.app}>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/create-user-tag" element={<CreateUserTagPage />}/>
        <Route path="/chat/computer-science" element={<ProtectedRoute><ComputerScienceChatroomPage /></ProtectedRoute>}/>
        <Route path="/chat/engineering" element={<ProtectedRoute><EngineeringChatroomPage /></ProtectedRoute>}/>
        <Route path="/chat/food" element={<ProtectedRoute><FoodChatroomPage /></ProtectedRoute>}/>
        <Route path="/chat/math" element={<ProtectedRoute><MathChatroomPage /></ProtectedRoute>}/>
        <Route path="/chat/movies" element={<ProtectedRoute><MoviesChatroomPage /></ProtectedRoute>}/>
        <Route path="/chat/sports" element={<ProtectedRoute><SportsChatroomPage /></ProtectedRoute>}/>
      </Routes>
    </div>
  );
}

export default App;
