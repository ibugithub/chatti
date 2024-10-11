import React, { useEffect, useState } from "react";
import Avatar from "../common/Avatar";
import { BsFillChatLeftTextFill, BsThreeDotsVertical } from "react-icons/bs";

export const ChatListHeader = () => {
  const [userInfo, setUserInfo] = useState({});
  useEffect(() => {
    localStorage.getItem("userInfo") &&
      setUserInfo(JSON.parse(localStorage.getItem("userInfo")));
  }, []);
  return (
    <>
      <div className=" h-16 px-4 py-3 flex justify-between items-center">
        <div className="cursor-pointer">
          <Avatar type="sm" image={userInfo.photoUrl} />
        </div>
        <div className="flex gap-6">
          <BsFillChatLeftTextFill className="text-panel-header-icon cursor-pointer text-xl" title="NewChat"/>
          <BsThreeDotsVertical className="text-panel-header-icon cursor-pointer text-xl" title="MenuUi"/>
        </div>
      </div>
    </>
  );
};
