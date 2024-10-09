import React, { useEffect, useRef } from "react";

function ContextMenu({ options, cordinates, contextMenu, setContextMenu }) {
  const contextMenuRef = useRef(null);
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (e.target.id !== "context-opener" &&
        !e.target.closest("#context-opener2")) {
        if (
          contextMenuRef.current &&
          !contextMenuRef.current.contains(e.target)
        ) {
          setContextMenu(false);
        }
      }
    };
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);
  const handleClick = (e, callback) => {
    e.stopPropagation();
    setContextMenu(false);
  };
  return (
    <>
      <div
        className={`bg-dropdown-background fixed py-2 z-[100] shadow-xl`}
        ref={contextMenuRef}
        style={{ top: cordinates.y, left: cordinates.x }}
      >
        <ul>
          {options.map(({ name, callback }) => (
            <li
              key={name}
              onClick={(e) => handleClick(e, callback)}
              className="py-1"
            >
              <span className="text-gray-300 px-5  cursor-pointer hover:text-white">
                {name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default ContextMenu;
