import React from "react";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import { firebaseAuth } from "@/utils/FirebaseConfig";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { checkUser } from "@/utils/apiRoutes";
import axios from "axios";
import { useRouter } from "next/router";
import { useStateProvider } from "@/context/StateContext";
import { reducerCases } from "@/context/constants";

function login() {
  const router = useRouter();
  const [state, dispatch] = useStateProvider();
  const handleLogin = async () => {
    const provider = new GoogleAuthProvider();
    const {
      user: { displayName: name, email, photoURL},
    } = await signInWithPopup(firebaseAuth, provider);
    try {
      if (email) {
        const { data } = await axios.post(checkUser, { email });
        if (!data.status) {
          dispatch({ type: reducerCases.SET_NEW_USER, newUser: true });
          dispatch({
            type: reducerCases.SET_USER_INFO,
            userInfo: { name, email, photoURL },
          });
          router.push("/onboarding");
        } else {
          console.log('the user already exists and the data is ', data);
          dispatch({ type: reducerCases.SET_USER_INFO, userInfo: data.data });
          router.push("/");
        }
      }
    } catch (error) {}
  };
  return (
    <>
      <div className="flex justify-center items-center bg-panel-header-background h-screen w-screen flex-col gap-6">
        <div className="flex justify-center items-center gap-2 text-white">
          <Image src="/whatsapp.gif" width={300} height={300} alt="logo" />
          <span className="text-5xl">WhatsApp </span>
        </div>
        <button
          className="flex justify-center items-center gap-2 bg-search-input-container-background p-5 rounded-full"
          onClick={handleLogin}
        >
          <FcGoogle className="text-3xl" />
          <span className="text-xl text-white ">Login with Google</span>
        </button>
      </div>
    </>
  );
}

export default login;
