import React from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import mainImg from "../images/41434dcbff587c545d11a7bc3a408e43.png";
import contentImg from "../images/KakaoTalk_Photo_2021-03-26-15-41-04.png";

const MainImage = styled.div`
  background-image: url(${mainImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vh;
  position: relative;
`;

const ImageBlack = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: black;
  opacity: 0.4;
`;

const TitleWrapper = styled.div`
  position: absolute;
  z-index: 99;
  font-size: 50px;
  color: #fff;
  clear: both;
  opacity: 1;
  top: 290px;
  right: 10%;
  text-align: right;
  line-height: 1.3;
  word-spacing: 2.8px;
`;

function Main() {
  return (
    <>
      <MainImage>
        <ImageBlack />
        <TitleWrapper>
          당신이 원하는
          <br />
          <b>비즈니스 멘토</b>를<br />
          만나보세요
        </TitleWrapper>
      </MainImage>
      <div
        style={{
          width: "100%",
          maxWidth: "1200px",
          padding: "30px 0",
          margin: "0 auto",
        }}
      >
        <div style={{ padding: "8px" }}>
          <div style={{ padding: "8px" }}>
            <img
              src={contentImg}
              alt="KakaoTalk_Photo_2021-03-26-15-41-04"
              width="100%"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Main;
