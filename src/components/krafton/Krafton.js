import React from "react";
import KrafNav from "../../navigation/KrafNav";
import KrafFooter from "./KrafFooter";
import "../../App.css";
import "../../styles/kraflayout.css";
const Krafton = () => {
  return (
    <>
      <KrafNav />
      <div className="app">
        <div className="krafbody">main</div>
        <KrafFooter />
      </div>
    </>
  );
};

export default Krafton;
