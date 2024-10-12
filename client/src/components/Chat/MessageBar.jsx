import React from "react";
import { BsEmojiSmile } from "react-icons/bs";
import { FaMicrophone } from "react-icons/fa";
import { ImAttachment } from "react-icons/im";
import { MdSend } from "react-icons/md";

export const MessageBar = () => {
  return (
    <>
      <div className="bg-panel-header-background h-20 px-4 flex items-center gap-6 relative ">
        <>
          <div className="flex gap-6">
            <BsEmojiSmile
              className="text-panel-header-icon cursor-pointer text-xl"
              title="Emoji"
            />
            <ImAttachment
              className="text-panel-header-icon cursor-pointer text-xl"
              title="Attch a file"
            />
          </div>
          <div className="w-full rounded-lg h-10 flex items-center">
            <input
              type="text"
              placeholder="Type a message"
              className="bg-input-background text-sm focus:outline-none text-white h-10 rounded-lg pl-5 px-5 p-4 w-full "
            />
          </div>
          <div className="flex w-10 items-center justify-center">
            <button className="">
              <MdSend  className="text-panel-header-icon cursor-pointer text-xl" title="send message"/>
              <FaMicrophone className="text-panel-header-icon cursor-pointer text-xl" title="Record" />
            </button>
          </div>
        </>
      </div>
    </>
  );
};
