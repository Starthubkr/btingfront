import React from "react";
import { AiOutlineUp } from "react-icons/ai";
import {
  MentorColumn,
  MentorInfoFir,
  MentorInfoFirTextarea,
  MentorInfoSec,
  MentorInfoSecSub,
  MentorInputWrapper,
  ProfileComFlex,
} from "../style/MentorCreate";
import starthub from "../images/starthub.png";
import { useCallback } from "react";

function MentorInfo({
  mentoInfo,
  mentoInfoUD,
  mentorIntro,
  onChangeMentorIntro,
  mentorCareer,
  onChangeMentorCareer,
  mentorDepart,
  onChangeMentorDepart,
}) {
  const onMentorInfo = useCallback(() => {
    if (mentoInfo.current.classList.contains("offMentor")) {
      mentoInfo.current.classList.remove("offMentor");
      mentoInfo.current.classList.add("onMentor");
      mentoInfoUD.current.classList.remove("upMentor");
    } else {
      mentoInfo.current.classList.remove("mentor");
      mentoInfo.current.classList.remove("onMentor");
      mentoInfo.current.classList.add("offMentor");
      mentoInfoUD.current.classList.add("upMentor");
    }
  }, [mentoInfo, mentoInfoUD]);

  return (
    <div className="mentor" ref={mentoInfo}>
      <MentorInputWrapper>
        <MentorInfoSec>2.멘토링 정보</MentorInfoSec>
        <MentorInfoSecSub ref={mentoInfoUD}>
          <AiOutlineUp onClick={onMentorInfo} />
        </MentorInfoSecSub>
      </MentorInputWrapper>
      <ProfileComFlex>
        <div style={{ width: "55%" }}>
          <img
            src={starthub}
            alt={starthub}
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        <MentorColumn>
          <div style={{ width: "100%" }}>
            <MentorInfoFir>멘토 소개</MentorInfoFir>
            <MentorInfoFirTextarea
              placeholder="멘토 소개를 입력해주세요"
              value={mentorIntro}
              onChange={onChangeMentorIntro}
            />
          </div>
          <div style={{ width: "100%" }}>
            <MentorInfoFir>멘토 경력</MentorInfoFir>
            <MentorInfoFirTextarea
              placeholder="멘토 경력을 입력해주세요"
              value={mentorCareer}
              onChange={onChangeMentorCareer}
            />
          </div>
          <div style={{ width: "100%" }}>
            <MentorInfoFir>멘토링 분야</MentorInfoFir>
            <MentorInfoFirTextarea
              placeholder="멘토링 분야를 입력해주세요"
              value={mentorDepart}
              onChange={onChangeMentorDepart}
            />
          </div>
        </MentorColumn>
      </ProfileComFlex>
    </div>
  );
}

export default MentorInfo;
