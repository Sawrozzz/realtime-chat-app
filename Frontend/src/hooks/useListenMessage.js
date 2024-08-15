import { useEffect } from "react";
import { useSocketContext } from "../context/SocketContext";
import useConversation from "../storeZustand/useConversation";

import notify from "../assets/messenger.mp3";

const useListenMessage = () => {
  const { socket } = useSocketContext();

  const { messages, setMessages } = useConversation();

  useEffect(() => {
    socket?.on("newMessage", (newMessage) => {
      const sound = new Audio(notify);
      sound.play();
      setMessages([...messages, newMessage]);
    });
    return () => socket?.off("newMessage");
  }, [socket, messages, setMessages]);
};

export default useListenMessage;
