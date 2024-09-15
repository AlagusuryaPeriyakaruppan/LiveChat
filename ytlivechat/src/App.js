import ChatWindow from "./components/live-chat/ChatWindow";
import VideoStream from "./components/live-chat/VideoStream";

function App() {
  return (
    <div className="flex">
      <VideoStream />
      <ChatWindow />
    </div>
  );
}

export default App;
