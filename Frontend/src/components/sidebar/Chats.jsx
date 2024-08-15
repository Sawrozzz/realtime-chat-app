import useConversation from "../../storeZustand/useConversation"
import { useSocketContext } from "../../context/SocketContext";


const Chats = ({ conversation, lastInd }) => {
const {selectedConversation, setSelectedConversation} = useConversation()

const isSelected = selectedConversation?._id === conversation._id;
const {onlineUsers} = useSocketContext();
const isOnline = onlineUsers.includes(conversation._id);


  return (
    <>
      <div
        className={`flex gap-2 items-center rounded p-2 py-1 cursor-pointer  border-zinc-600 hover:bg-slate-500 
      ${isSelected ? "bg-slate-500" : ""}
      `}
        onClick={() => setSelectedConversation(conversation)}
      >
        <div className={`avatar ${isOnline ? "online" : " "}`}>
          <div className="w-12 rounded-full">
            <img
              src={conversation.profilePic}
              alt="user avatar"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "./logo.webp";
              }}
            />
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p className="font-bold text-gray-100">{conversation.fullName}</p>
          </div>
        </div>
      </div>
      {!lastInd && <div className="divider my-0 py-0 h-1" />}
    </>
  );
};

export default Chats;
