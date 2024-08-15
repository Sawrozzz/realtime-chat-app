import useConversation from "../../storeZustand/useConversation";
import { useAuthContext } from "../../context/AuthContext";
import { extractTime } from "../../../utils/extractTIme";

const Message = ({ message }) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();
  const FromMe = message.senderId === authUser._id;
  const chatClassName = FromMe ? "chat-end" : "chat-start";
  const bubbleBgCol = FromMe ? "bg-blue-400" : "bg-gray-600";
  const formattedTime = extractTime(message.createdAt);
  const profilePic = FromMe
    ? authUser.profilePic
    : selectedConversation.profilePic;
  return (
    <div className={`chat ${chatClassName}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img alt="bubble" src={profilePic} />
        </div>
      </div>
      <div className={`chat-bubble text-white bg-blue-400 ${bubbleBgCol} `}>
        {message.message}
      </div>
      <div
        className={` chat-footer opacity-50 text-xs flex gap-1 items-center`}
      >
        {formattedTime}
      </div>
    </div>
  );
};

export default Message;
