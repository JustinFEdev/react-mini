import React from "react";
import "../styles/navi.css";
import superTree from "../sources/images/supertree_logo.png";
import krafton from "../sources/images/krafton_logo.png";

const KrafNav = () => {
  let prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-100px";
    }
    prevScrollpos = currentScrollPos;
  };

  return (
    <>
      <nav id="navbar" className="nav-layout">
        {/* className={`nav-layout ${dropDown && "nav-change"}`} */}
        <a href="/">
          <img src={superTree} style={{ width: 180 }} alt="supertree" />
        </a>
        <ul style={{ display: "flex" }}>
          <li>About</li>
          <li>Market</li>
          <li>Inven</li>
          <li>Games</li>
          <li>Careers</li>
          <li>News</li>
        </ul>
        <img
          style={{
            width: 150,
          }}
          src={krafton}
          alt="krafton_logo"
        />
      </nav>
    </>
  );
};

export default KrafNav;
