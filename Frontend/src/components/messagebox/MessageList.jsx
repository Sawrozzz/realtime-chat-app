import { useEffect, useRef } from "react";
import useGetMessage from "../../hooks/useGetMessage";
import MessageSkeleton from "../skeletons/messageSkeleton";
import Message from "./Message";

const MessageList = () => {
  const { messages, loading } = useGetMessage();
  const lastMessageRef = useRef();

  useEffect(() => {
    lastMessageRef.current?.scrollIntoView({ behavior: "smooth" },100);
  }, [messages]); // Add messages as a dependency

  return (
    <div className="px-4 flex-1 overflow-auto">
      {!loading &&
        messages.map((message) => (
          <div
            key={message._id}
            ref={lastMessageRef} // Set ref only on the last message
          >
            <Message message={message} />
          </div>
        ))}
      {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}
      {!loading && messages.length === 0 && (
        <p className="text-center">Send a message to start conversation</p>
      )}
    </div>
  );
};

export default MessageList;
