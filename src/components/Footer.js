import React from "react";
import styled from "styled-components";

import bting from "../images/bl.png";
import faceBook from "../images/fb_b.png";
import instar from "../images/ig.png";
import kakao from "../images/kt.png";

const FooterWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 50px 15px;
  font-size: 15px;
  color: #fff;
  word-spacing: 1px;
  line-height: 1.2;

  & span {
    color: #c6d4e4;
    line-height: 20px;
    font-size: 12px;
  }

  & strong {
    color: #fff;
    font-weight: bolder;
  }
`;

const SnsWrapper = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  position: relative;
`;

const IconAtag = styled.a`
  display: inline-block;
  margin: 0 15px 0 0;
`;

function Footer() {
  return (
    <div style={{ width: "100%" }}>
      <div style={{ backgroundColor: "#2b3141" }}>
        <FooterWrapper>
          <h2
            style={{
              margin: "0 0 15px 0",
              fontSize: "20px",
              color: "#c6d4e4",
            }}
          >
            Bting
          </h2>
          <h3
            style={{
              margin: "0 0 10px 0",
              fontSize: "18px",
              color: "#fff",
            }}
          >
            스타트허브(주)
          </h3>
          <span>
            <strong>대표자 :</strong> 김철훈
          </span>
          <span>
            <strong> 사업자번호 :</strong> 176-86-01386
          </span>
          <br />
          <span>
            <strong>주소지 :</strong> 부산시 남구 전포대로133, 12층
          </span>
          <br />
          <span>
            <strong>E-Mail :</strong> digest@starthub.kr
          </span>
          <br />
          <span>
            <strong>개인정보관리 책임자 :</strong> 김철훈
          </span>
          <SnsWrapper>
            <div style={{ position: "absolute", right: "0", bottom: "0" }}>
              <IconAtag href="#">
                <img src={bting} alt={bting} style={{ width: "25px" }}></img>
              </IconAtag>
              <IconAtag href="#">
                <img
                  src={faceBook}
                  alt={faceBook}
                  style={{ width: "25px" }}
                ></img>
              </IconAtag>
              <IconAtag href="#">
                <img src={instar} alt={instar} style={{ width: "25px" }}></img>
              </IconAtag>
              <IconAtag href="#">
                <img src={kakao} alt={kakao} style={{ width: "25px" }}></img>
              </IconAtag>
            </div>
          </SnsWrapper>
        </FooterWrapper>
        <div
          style={{
            padding: "15px",
            textAlign: "center",
            backgroundColor: "#232633",
            color: "#c6d4e4",
          }}
        >
          <div
            style={{
              margin: "0 auto",
              width: "100%",
              maxWidth: "1200px",
              letterSpacing: "0.1px",
            }}
          >
            Copyright © 2021 STARTHUB All Rights Reserved / Powered by{" "}
            <a
              href="https://starthub.kr"
              target="_blank"
              rel="noreferrer noopener"
              style={{ color: "#c6d4e4" }}
            >
              <b>StartHub</b>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
