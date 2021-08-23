import React from "react";
import KrafNav from "../../navigation/KrafNav";
import KrafFooter from "./KrafFooter";
import "../../App.css";
import "../../styles/kraflayout.css";
import ncNews from "../../sources/images/NC_game_img.jpeg";
import kakaoNews from "../../sources/images/kakao_game_img.jpeg";
import nexonNews from "../../sources/images/v4_game_img.jpeg";

const Krafton = () => {
  // const [dark, setDark] = useState(false);
  // const listenScrollEvent = (e) => {
  //   if (window.scrollY > 300) {
  //     setDark({ color: "#000" });
  //   } else {
  //     setDark({ color: "#fff" });
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", listenScrollEvent);
  //   return () => window.removeEventListener("scroll", listenScrollEvent);
  // }, []);

  const newsInfo = [
    {
      img: ncNews,
      title: "게임개발부서 초특급 명작출시!",
      date: "21.03.21",
      cssName: 1,
    },
    {
      img: kakaoNews,
      title: "즐거운 게임! 수퍼트리와 함께!",
      date: "21.08.01",
      cssName: 2,
    },
    {
      img: nexonNews,
      title: "다양한 게임을 플레이하다 플레이댑!",
      date: "21.08.22",
      cssName: 3,
    },
  ];

  const careerInfo = [
    { title: "People&Life", discription: "People&Life any words" },
    { title: "Recruit", discription: " Recruit any words" },
  ];

  const newsComponent = (
    <>
      {newsInfo.map((info) => (
        <div
          className={
            info.cssName ? 1 : "firstCss" ? 2 : "secondCss" ? 3 : "thirdCss"
          }
          style={{ width: "25vw", margin: "6% 1.2%" }}
        >
          <img
            style={{
              height: "26vh",
              width: "25.5vw",
              backgroundColor: "ButtonHighlight",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            src={info.img}
            alt="infos"
          />
          <h1
            style={{
              minHeight: 50,
              padding: "20px 0",
            }}
          >
            {info.title}
          </h1>
          <div style={{ fontSize: 15 }}>{info.date}</div>
        </div>
      ))}
    </>
  );
  const careerComponent = (
    <>
      {careerInfo.map((info) => (
        <div style={{ width: "50%", margin: "6% 1.2%", border: "1px solid" }}>
          <div
            style={{
              height: "26vh",
              backgroundColor: "ButtonHighlight",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {info.img}
          </div>
          <h1
            style={{
              minHeight: 36,
              padding: "10px 0 5px 0",
            }}
          >
            {info.title}
          </h1>
          <div style={{ fontSize: 15 }}>{info.discription}</div>
          <button>move to this page</button>
        </div>
      ))}
    </>
  );

  return (
    <>
      <KrafNav />
      <div className="app">
        <div className="krafbody">
          {/* <div style={{ height: 350, border: "1px solid" }}>Banner Area</div> */}
          <section
            className="kraf-sectionLayout"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            id="section_01"
          >
            <h1 style={{ fontSize: 80 }}>여기는 게임개발센터</h1>
          </section>
          <section className="kraf-sectionLayout" id="section_02">
            Section three area
          </section>
          <section
            className="kraf-sectionLayout"
            id="section_03"
            style={{ height: "120vh" }}
          >
            <div
              style={{
                position: "relative",
                height: "50%",
              }}
            >
              <h1 style={{ fontSize: 40 }}>News zone</h1>
              <div style={{ display: "flex", justifyContent: "center" }}>
                {newsComponent}
              </div>
            </div>
            <div
              style={{
                position: "relative",
                height: "50%",
              }}
            >
              <h1 style={{ fontSize: 40 }}>Careers zone</h1>
              <div style={{ display: "flex", justifyContent: "center" }}>
                {careerComponent}
              </div>
            </div>
          </section>
        </div>
        <KrafFooter />
      </div>
    </>
  );
};

export default Krafton;
