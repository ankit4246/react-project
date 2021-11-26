import React from "react";

import MainContent from "./Main";
import ChatSidebar from "./Sidebar";

const Chat = () => {
  return (
    <div className="chat_wrapper">
      <ChatSidebar />
      <MainContent />
    </div>
  );
};

export default Chat;
