// import Blank from "./Blank";
import { useParams } from "react-router-dom";

import { useGetMessagesQuery } from "../../../features/message/messagesApi";
import ChatHead from "./ChatHead";

import Messages from "./Messages";
import Options from "./Options";

const ChatBody = () => {
  const { id } = useParams();
  const { data: messages, isError, isLoading, error } = useGetMessagesQuery(id);
  let content = null;
  if (isLoading) {
    content = <div>Loading....</div>;
  } else if (!isLoading && isError) {
    content = <div>{error}</div>;
  } else if (!isLoading && !isError && messages.length === 0) {
    content = <div>No Messages Found</div>;
  } else {
    content = (
      <div className="w-full grid conversation-row-grid">
        <ChatHead messages={messages[0]} />
        <Messages messages={messages} />
        <Options />
      </div>
    );
  }
  return <div className="w-full lg:col-span-2 lg:block">{content}</div>;
};

export default ChatBody;
