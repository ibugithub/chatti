import React, { useEffect, useRef } from "react";
import { IoClose } from "react-icons/io5";

function CapturePhoto({ setImage, showCapturedImage }) {
  const videoRef = useRef(null);

  useEffect(() => {
    let stream;
    const startCamera = async() => {
      stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: false,
      });
      videoRef.current.srcObject=stream;
    }
    startCamera();

    return () => {
      stream?.getTracks().forEach((track) => track.stop());
    }
  }, []);


  const CapturePhoto = () => {
    const canvas = document.createElement('canvas');
    canvas.getContext('2d').drawImage(videoRef.current, 0,0,300,190);
    setImage(canvas.toDataURL("image/jpeg"));
    showCapturedImage(false);
  };
  return (
    <>
      <div className="absolute h-4/6 w-2/6 top-1/4 left-1/3 bg-gray-900 rounded-lg pt-2 flex justify-center gap-3">
        <div className="flex flex-col gap-4 w-full ">
          <div
            className="pt-2 pr-2 cursor-pointer flex justify-end items-end"
            onClick={() => showCapturedImage(false)}
          >
            <IoClose className="w-10 h-10 cursor-pointer" />
          </div>
          <div className="flex justify-center">
            <video
              src=""
              id="video"
              width="400"
              autoPlay
              ref={videoRef}
            ></video>
          </div>
          <div className="flex justify-center">
            <button
              className="
          h-16 w-16 bg-white cursor-pointer rounded-full border-8 border-teal-light p-2 mb-10"
              onClick={CapturePhoto}
            ></button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CapturePhoto;
