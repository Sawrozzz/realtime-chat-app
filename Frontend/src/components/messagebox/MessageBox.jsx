import React, { useEffect } from "react";
import MessageList from "./MessageList";
import MessageInput from "./MessageInput";
import { TiMessages } from "react-icons/ti";
import useConversation from "../../storeZustand/useConversation";
const MessageBox = () => {
const {selectedConversation, setSelectedConversation} = useConversation()
useEffect(()=>{
  return () => setSelectedConversation(null) //cleanup function (unmount)
},[setSelectedConversation])
  return (
    <div className="md:min-w-[450px] flex flex-col border ">
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          <div className="bg-gray-700 px-3 mb-2 h-12 text-left">
            <span className="label-text ">
              To:
              <span className="text-slate-300 font-bold "> {selectedConversation.fullName} </span>
            </span>
          </div>
          <MessageList />
          <MessageInput />
        </>
      )}
    </div>
  );
};

export default MessageBox;

const NoChatSelected = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl font-semibold flex flex-col items-center gap-2">
        <p>Welcome Saroj </p>
        <p>Select a chat to start messaging</p>
        <TiMessages className="text-5xl text-center" />
      </div>
    </div>
  );
};
