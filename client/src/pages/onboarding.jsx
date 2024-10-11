import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useStateProvider } from "@/context/StateContext";
import Input from "@/components/common/Input";
import Avatar from "@/components/common/Avatar";
import { saveUserInfo } from "@/utils/apiRoutes";
import { reducerCases } from "@/context/constants";
import axios from "axios";
import { useRouter } from "next/router";

function onboarding() {
  const router = useRouter();
  const [state, dispatch] = useStateProvider();
  const [name, setName] = useState(state.userInfo.name || "");
  const [about, setAbout] = useState("");
  const [photoUrl, setPhotoUrl] = useState("/default_avatar.png");

  useEffect(() => {
    if (!state.newUser && !state.userInfo.email) {
      router.push("/login");
    }
    if (!state.newUser && state.userInfo.email) {
      router.push("/");
    }
  }, []);

  const saveUserInfoHandler = async () => {
    if (validateInfo()) {
      const email = state.userInfo.email;
      try {
        const response = await axios.post(saveUserInfo, {
          name,
          email,
          about,
          photoUrl,
        });
        if (response.status === 201) {
          dispatch({ type: reducerCases.SET_NEW_USER, newUser: false });
          dispatch({
            type: reducerCases.SET_USER_INFO,
            userInfo: { name, email, about, photoUrl },
          });
          router.push("/");
        }
      } catch (error) {
        console.error("error while saving user data ", error);
      }
    }
  };
  const validateInfo = () => {
    return true;
  };
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
          <div className="flex justify-center items-center">
            <button
              className="flex justify-center items-center gap-2 bg-search-input-container-background p-3 rounded-md mt-5"
              onClick={saveUserInfoHandler}
            >
              Create Profile
            </button>
          </div>
        </div>
        <div className="mt-10">
          <Avatar type="xl" image={photoUrl} setImage={setPhotoUrl} />
        </div>
      </div>
    </div>
  );
}

export default onboarding;
