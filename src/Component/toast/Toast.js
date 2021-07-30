
import React, { useState } from "react";
import "./toast.css"
const useToast = () => {
  const [display, setDisplay] = useState("none");
  const [message, setMessage] = useState("");
  const [type, setType] = useState("");

  const setToast = (toastMessage, toastType ) =>
   {
    setMessage(toastMessage);
    setType(toastType);
    setDisplay("block");
    setTimeout(() => {
      setDisplay("none");
    }, 3500);
  };

  let toastStyle;
  const ToastComponent = () => {
    switch (type) {
      case "success":
        toastStyle = {
          backgroundColor: "#adebad",
          borderTop: "5px solid #2db92d",
        };
        break;
      case "warning":
        toastStyle = {
          backgroundColor: "#fff0b3",
          borderTop: "5px solid #ffcc00",
        };
        break;
     
    }
    return (
      <div
        style={{ display, ...toastStyle }}
        className="toast "
      >
        {message}
      </div>
    );
  };
  return { ToastComponent, setToast };
};

export default useToast;