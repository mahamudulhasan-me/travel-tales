import { useSelector } from "react-redux";
import { useGetConversationsQuery } from "../../features/conversation/conversationsApi";
import ChatItem from "./ChatItem";

export default function ChatItems() {
  const { user } = useSelector((state) => state.auth);
  const {
    data: conversations,
    isLoading,
    isError,
    error,
  } = useGetConversationsQuery(user?.email);

  return (
    <ul>
      <li>
        <ChatItem
          avatar="https://cdn.pixabay.com/photo/2018/09/12/12/14/man-3672010__340.jpg"
          name="Mahamudul Hasan"
          lastMessage="bye"
          lastTime="25 minutes"
        />
      </li>
    </ul>
  );
}
