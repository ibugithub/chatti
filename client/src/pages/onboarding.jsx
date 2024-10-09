import React, { useState } from "react";
import Image from "next/image";
import { useStateProvider } from "@/context/StateContext";
import Input from "@/components/common/Input";
import Avatar from "@/components/common/Avatar";

function onboarding() {
  const [state, dispatch] = useStateProvider();
  const [name, setName] = useState(state.userInfo.name || "");
  const [about, setAbout] = useState("");
  const [image, setImage] = useState("/default_avatar.png");
  return (
    <div className="bg-panel-header-background h-screen w-screen text-white flex justify-center items-center flex-col">
      <div className="flex justify-center items-center gap-2">
        <Image src="/whatsapp.gif" width={300} height={300} alt="logo" />
        <span className="text-5xl">WhatsApp </span>
      </div>
      <h2>create your profile</h2>
      <div className="flex gap-6 mt-6">
        <div className="flex flex-col justify-center items-center mt-5">
          <Input name="Name" state={name} setState={setName} label />
          <Input name="About" state={about} setState={setAbout} label />
        </div>
        <div className="mt-10">
          <Avatar type='xl' image={image} setImage={setImage}/>
        </div>
      </div>
    </div>
  );
}

export default onboarding;
