import { FiSend } from "react-icons/fi";
import { useState } from "react";
import useSendMessage from "../../hooks/useSendMessage";

const MessageInput = () => {
  const [message, setMessage] = useState("");
  const { sendMessage, loading } = useSendMessage();

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log("Message");
    if(!message) return;
    await sendMessage(message);
    setMessage("");
  }

  return (
    <form className="px-4 my-3" onSubmit={handleSubmit}>
      <div className="w-full flex items-center  text-sm rounded  bg-transparent">
        <input
          type="text"
          className="flex-grow p-2.5"
          placeholder="Type a message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit" className="p-2">
          {loading ? (
            <div className="loading loading-spinner"></div>
          ) : (
            <FiSend fontSize={25} />
          )}
        </button>
      </div>
    </form>
  );
};

export default MessageInput;
