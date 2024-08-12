import React from "react";
import Chats from "./Chats";
import { TbLogout2 } from "react-icons/tb";
import useLogout from "../../hooks/useLogout";
import useGetConversation from "../../hooks/useGetConversation";

const ChatList = () => {
  const { loading, conversations } = useGetConversation();
  const { logout } = useLogout();
  return (
    <>
      <div className="py-2 flex flex-col overflow-auto">
        {conversations.map((conversation, index) => {
          return (
            <Chats
              key={conversation._id}
              conversation={conversation}
              lastInd={index === conversations.length - 1}
            />
          );
        })}
        {loading ? <span className="loading loading-spinner"></span> : null}
      </div>
      <div className="mt-6">
        <TbLogout2 fontSize={30} className="cursor-pointer" onClick={logout} />
      </div>
    </>
  );
};

export default ChatList;
