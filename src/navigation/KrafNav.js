import React from "react";
import "../styles/navi.css";

const KrafNav = () => {
  return (
    <>
      <header className="nav-layout">
        <div>
          <a href="/">
            <div>Main Logo</div>
          </a>
        </div>
        <div>Krafton Logo</div>
        <ul style={{ display: "flex" }}>
          <li>About</li>
          <li>Studios</li>
          <li>Games</li>
          <li>Careers</li>
          <li>IR</li>
          <li>News</li>
        </ul>
      </header>
    </>
  );
};

export default KrafNav;
