import gravatar from "gravatar";
import moment from "moment";
import { useSelector } from "react-redux";
import { useGetConversationsQuery } from "../../features/conversation/conversationsApi";
import { getPartnerInfo } from "../../utils/getPartnerInfo";
import Error from "../ui/Error";
import ChatItem from "./ChatItem";

export default function ChatItems() {
  const { user } = useSelector((state) => state.auth);
  const {
    data: conversations,
    isLoading,
    isError,
    error,
  } = useGetConversationsQuery(user?.email);

  let content = null;
  if (isLoading) {
    content = <li>Loading....</li>;
  } else if (!isLoading && isError) {
    content = (
      <li>
        <Error message={error} />
      </li>
    );
  } else if (!isLoading && !isError && conversations.length === 0) {
    content = <li>No Conversation Found</li>;
  } else {
    content = conversations?.map((conversation) => {
      const { id, message, timestamp, users } = conversation;
      const { name, email } = getPartnerInfo(users, user.email);
      return (
        <li key={id}>
          <ChatItem
            avatar={gravatar.url(email, { size: 80 })}
            name={name}
            lastMessage={message}
            lastTime={moment(timestamp).fromNow()}
            id={id}
          />
        </li>
      );
    });
  }

  return <ul>{content}</ul>;
}
