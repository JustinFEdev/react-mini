import React, { useState, useEffect } from "react";
import Modal from "./modal/Modal";

const Demo = () => {
  const [show, setShow] = useState(false);

  // modal open function
  const openHandle = () => {
    setShow(!show);
    console.log("open modal");
  };

  // modal close function
  const closeHandle = (event) => {
    event.preventDefault();
    setShow(false);
    console.log("close modal");
  };

  return (
    <>
      <div>Demo</div>
      <div className="scene">
        <div className="cube">
          <div className="cube__face cube__face--front">front</div>
          <div className="cube__face cube__face--back">back</div>
          <div className="cube__face cube__face--right">right</div>
          <div className="cube__face cube__face--left">left</div>
          <div className="cube__face cube__face--top">top</div>
          <div className="cube__face cube__face--bottom">bottom</div>
        </div>
      </div>
      <div
        style={{
          cursor: "pointer",
          backgroundColor: "lightgray",
          borderRadius: 20,
          padding: 15,
          border: "none",
          color: "#fff",
          fontSize: 20,
          fontWeight: "border",
          width: "50%",
        }}
        onClick={openHandle}
      >
        test modal
      </div>
      <div
        style={{
          // position: "absolute",
          width: "100%",
          height: 350,
          left: 0,
          zIndex: 0,
          opacity: 0.3,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* <video
              autoPlay
              loop
              muted
              style={{
                position: "relative",
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            >
              <source src={bulso} type="video/mp4" />
            </video> */}
      </div>
      {show === true && (
        <>
          <div>
            <Modal show={show} closeModal={closeHandle} />
            {/* <div
                style={{
                  position: "absolute",
                  zIndex: 101,
                  width: 80,
                  height: 50,
                  border: "1px solid",
                  top: 0,
                  right: 0,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onClick={closeHandle}
              >
                close
              </div> */}
          </div>
        </>
      )}
    </>
  );
};

export default Demo;
