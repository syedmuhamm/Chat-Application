import { ChatEngine } from "react-chat-engine";

import ChatFeed from "./components/Chatfeed";

import "./App.css";

const App = () => {
  return (
    <ChatEngine
      height="100vh"
      projectID="
  2af01c4a-8efb-4d91-8821-f4c583876264"
      userName="javascriptmastery"
      userSecret="123"
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
};

export default App;
