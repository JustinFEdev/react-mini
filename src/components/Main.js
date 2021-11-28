import React, { useState } from "react";
import HoverVideoPlayer from "react-hover-video-player";
import "../App.css";
import "../styles/layout.css";
import battle_video from "../sources/videos/pubg.mp4";
import nexon_video from "../sources/videos/nexon.mp4";
import odin_video from "../sources/videos/odin.mp4";
const battle_img = "https://iconape.com/wp-content/files/kv/247817/svg/247817.svg";
const kakao_img = "https://webofficial.kakaogames.com/live/official/file/news/20201104/2237.png";
const nexons_img = "https://ssl.nexon.com/S2/p3/main/nexon.png";

const Main = () => {
  const info = [
    {
      id: 1,
      name: "Krafton",
      page: "Krafton",
      img: battle_img,
      video: battle_video,
      type: "video/mp4",
    },
    {
      id: 2,
      name: "Nexon",
      page: "Nexon",
      img: nexons_img,
      video: nexon_video,
    },
    {
      id: 3,
      name: "Kakao",
      page: "Kakao",
      img: kakao_img,
      video: odin_video,
    },
  ];

  const [click, setClick] = useState(false);
  console.log(info);
  return (
    // <BrowserRouter>
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "100%",
        padding: "10%",
        width: "auto",
      }}
    >
      {info.map((info) => (
        <a
          href={`${info.page}`}
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <>
            {/* <a style={{}} href={`${info.link}`}> */}
            <div className="item_layout" onClick={() => setClick(!click)}>
              <HoverVideoPlayer
                sizingMode="container"
                style={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                videoSrc={info.video}
                pausedOverlay={
                  <img
                    src={info.img}
                    alt={info.title}
                    style={{
                      width: "100%",
                      height: 400,
                    }}
                  />
                }
                loadingOverlay={
                  <div
                    style={{
                      width: "100%",
                      objectFit: "cover",
                    }}
                    className="loading-spinner-overlay"
                  />
                }
              />
            </div>
            {/* <span style={{ position: "relative" }}>
              <span
                className={
                  info.id === 1
                    ? "item_text1"
                    : info.id === 2
                    ? "item_text2"
                    : info.id === 3
                    ? "item_text3"
                    : ""
                }
              >
                {info.name}
              </span>
            </span> */}
          </>
        </a>
      ))}
    </div>
    // </BrowserRouter>
  );
};

export default Main;
