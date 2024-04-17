const config = {
  apiUrl: process.env.REACT_APP_API_URL || "http://localhost:8080",
  webSocketUrl: process.env.REACT_APP_WEBSOCKET_URL || "ws://localhost:8081/ws-chat",
};

export default config;