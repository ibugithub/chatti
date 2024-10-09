import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FaCamera } from "react-icons/fa";
import ContextMenu from "./ContextMenu";
import PhotoPicker from "./PhotoPicker";
import { readFile } from "./readFile";

const Avatar = ({ type, image, setImage }) => {
  const [hover, setHover] = useState(false);
  const [isContextMenuVisible, setIsContextMenuVisible] = useState(false);
  const [contextMenuCordinate, setContextMenuCordinates] = useState({
    x: 0,
    y: 0,
  });
  const [grabPhoto, setGrabPhoto] = useState(false);

  useEffect(() => {
    if (grabPhoto) {
      const data = document.getElementById("photo-picker");
      data.click();
      document.body.onfocus = () => {
        setTimeout(() => {
          setGrabPhoto(false);
        }, 1000);
      };
    }
  }, [grabPhoto]);

  const contextMenuOptions = [
    { name: "Take photo", callback: () => {} },
    { name: "Choose From Library", callback: () => {} },
    {
      name: "Upload Photo",
      callback: () => {
        setGrabPhoto(true);
      },
    },
    {
      name: "Remove Photo",
      callback: () => {
        setImage("/default_avatar.png");
      },
    },
  ];

  const handlePhotoPickerChange = async (e) => {
    const file = e.target.files[0];
    if (!file) {
      console.error("File not found");
      return;
    }
    try {
      const fileDataUrl = await readFile(file);
      const data = document.createElement('img');
      data.src = fileDataUrl;
      data.setAttribute("data-src", fileDataUrl);
      setImage(fileDataUrl);
    } catch (error) {
      console.error("error while reading the file", error);
    }
  };

  const showContextMenu = (e) => {
    console.log("empty box clicked");
    e.preventDefault();
    setIsContextMenuVisible(true);
    setContextMenuCordinates({
      x: e.pageX,
      y: e.pageY,
    });
  };
  return (
    <>
      <div className="flex justify-center items-center">
        {type === "sm" && (
          <div className="relative w-10 h-10">
            <Image
              src={image}
              alt="avatar"
              className="rounded-full fill cursor-pointer"
            />
          </div>
        )}

        {type === "lg" && (
          <div className="relative w-14 h-14">
            <Image
              src={image}
              alt="avatar"
              height={40}
              width={40}
              className="rounded-full fill cursor-pointer"
            />
          </div>
        )}

        {type === "xl" && (
          <div
            className="relative cursor-pointer z-0"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            <div
              className={`h-60 w-60 bg-photopicker-overlay-background absolute top-0 left-0 flex justify-center rounded-full items-center flex-col text-center gap-2 ${
                hover ? "visible" : "hidden"
              } `}
              id="context-opener"
              onClick={(e) => showContextMenu(e)}
            >
              <FaCamera
                className="text-2xl"
                id="context-opener2"
                onClick={(e) => showContextMenu(e)}
              />
            </div>

            <div className="w-60 h-60">
              <Image
                src={image}
                alt="avatar"
                height={400}
                width={400}
                className="rounded-full fill "
              />
            </div>
          </div>
        )}
      </div>
      {isContextMenuVisible && (
        <ContextMenu
          options={contextMenuOptions}
          cordinates={contextMenuCordinate}
          contextMenu={isContextMenuVisible}
          setContextMenu={setIsContextMenuVisible}
        />
      )}
      {grabPhoto && <PhotoPicker handler={handlePhotoPickerChange} />}
    </>
  );
};

export default Avatar;
