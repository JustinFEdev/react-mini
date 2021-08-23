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
        <div className="krafbody">
          {/* <div style={{ height: 350, border: "1px solid" }}>Banner Area</div> */}
          <section style={{ height: "100vh", border: "1px solid" }}>
            section one area
          </section>
          <section style={{ height: "100vh", border: "1px solid" }}>
            section two area
          </section>
          <section style={{ height: "100vh", border: "1px solid" }}>
            section three area
          </section>
        </div>
        <KrafFooter />
      </div>
    </>
  );
};

export default Krafton;
