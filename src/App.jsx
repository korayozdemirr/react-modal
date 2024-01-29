import React, { useState, useEffect, useRef } from "react";

export default function App() {
  const handleClick = (e) => {
    if (
      !e.composedPath().includes(modalAreaRef.current) &&
      !e.composedPath().includes(buttonRef.current)
    ) {
      setOpen(false);
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);
  const [open, setOpen] = useState(false);
  const modalAreaRef = useRef();
  const buttonRef = useRef();
  console.log(open);
  return (
    <div className="App">
      <div
        className="modal"
        style={open ? { display: "flex" } : { display: "none" }}
      >
        <div ref={modalAreaRef} className="modalContent">
          <div className="modalHeader">Modal Head</div>
          <div className="modalBody">Modal Body</div>
        </div>
      </div>
      <h1>Hello React.</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button
        ref={buttonRef}
        onClick={() => {
          setOpen(true);
        }}
      >
        Open
      </button>
    </div>
  );
}
