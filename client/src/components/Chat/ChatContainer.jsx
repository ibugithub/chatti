import React from "react";

export const ChatContainer = () => {
  return (
    <>
      <div className="h-[80vh] w-full relative  overflow-auto custom-scrollbar">
        <div className="bg-chat-background bg-fixed h-full w-full opacity-5 fixed left-0 top-0 z-0"></div>
        <div className="flex w-full ">
          <div className="flex flex-col justify-end w-full gap-1 overflow-auto">
            
          </div>
        </div>
      </div>
    </>
  );
};
