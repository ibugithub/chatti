import React from "react";
import ReactDOM from 'react-dom';

const PhotoPicker =({handler}) => {
  const component = (
    <input type="file" hidden id="photo-picker" onChange={handler} />
  )
  return ReactDOM.createPortal(component, document.getElementById("photo-picker-element"));
}
export default PhotoPicker;