import React, { useEffect } from "react";
import { useStateProvider } from "@/context/StateContext";

function index() {
  const [state] = useStateProvider();

  useEffect(() => {
    console.log("the state in effect ", state); 
  }, [state]);
  return (
    <>
      <div>This is the index Page!</div>
    </>
  );
}

export default index;
