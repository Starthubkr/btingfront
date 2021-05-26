import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const MentorWrapper = styled.div`
  width: 25%;
  height: 300pxpx;
  margin-bottom: 30px;
`;
const MentorInnerWrapper = styled.div`
  width: 100%;
  padding: 0 15px;
  box-sizing: border-box;
`;

const MentorInner = styled.div`
  border: 1px solid #f1f1f1;
  overflow: hidden;
  box-shadow: 0 2px 4px rgb(0 0 0 / 7%);
  border-radius: 10px;
`;

const ImageMouseOver = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  top: 0;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.2s ease-in;
  opacity: 0;

  :hover {
    opacity: 1;
  }
`;

const MentorContentWrapper = styled.div`
  width: 100%;
  padding: 15px;
  box-sizing: border-box;
`;

const MentorName = styled.div`
  padding-bottom: 15px;
  font-size: 16px;
  font-weight: 700;
  color: #111;
`;

const Line = styled.div`
  width: 100%;
  padding: 0 5px;
  border-top: 1px solid lightgray;
  box-sizing: border-box;
`;

function Mentor({ mentor }) {
  const history = useHistory();

  const onMove = useCallback(
    (mentorId) => {
      history.push(`/mentordetail/${mentorId}`);
    },
    [history]
  );

  return (
    <MentorWrapper>
      <MentorInnerWrapper>
        <MentorInner>
          <div style={{ cursor: "pointer" }} onClick={() => onMove(mentor.id)}>
            <div style={{ width: "100%", position: "relative" }}>
              <ImageMouseOver>
                <span
                  style={{
                    borderBottom: "1px solid #fff",
                    paddingBottom: "5px",
                  }}
                >
                  VIEW DETAIL
                </span>
              </ImageMouseOver>
              <img
                src={`https://bting-images.s3.ap-northeast-2.amazonaws.com/${mentor.mentorImg.src}`}
                style={{ width: "100%", height: "300px" }}
                alt={mentor.mentorImg.src}
              />
            </div>
          </div>{" "}
          <MentorContentWrapper>
            <MentorName>{mentor.name}</MentorName>
            <Line />
            <div style={{ paddingTop: "15px", color: "#777" }}>
              {mentor.company} / {mentor.depart}
            </div>
          </MentorContentWrapper>
        </MentorInner>
      </MentorInnerWrapper>
    </MentorWrapper>
  );
}

export default Mentor;
