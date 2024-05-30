import { UIKitProvider, Chat, ConversationList } from "easemob-chat-uikit";
import 'easemob-chat-uikit/style.css'
const appKey = "easemob-demo#support";
const userId = "stwang";
const password = "1";

const EaseChat = (props) => {
  const { theme } = props;
  return (
    <UIKitProvider
      initConfig={{
        appKey,
        userId,
        password
      }}
      theme={{
        mode: theme
      }}
    >
      <div className="chat-wrap">
        <div className="conversation-list">
          <ConversationList></ConversationList>
        </div>
        <div className="chat">
          <Chat></Chat>
        </div>
      </div>
    </UIKitProvider>
  );
};

export default EaseChat;
