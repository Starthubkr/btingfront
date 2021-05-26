import React, { useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

import { mentorOne, mentorRemove } from "../actions/mentoraction";
import {
  Button,
  MentorContents,
  MentorContentsInfo,
  MentorCtnCtn,
  MentorCtnGuidanceWrapper,
  MentorCtnSub,
  MentorDetailWrapper,
  MentorInfo,
  MentorInfoCompany,
  MentorInfoDefail,
  MentorInfoDepart,
  MentorInfoImg,
  MentorInfoName,
  MentorInfoNames,
  MentorInfoWrapper,
} from "../style/MentorDetail";

function MentorDetail({ match }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const { mentor, isMentorRemoveDone, isMentorRemoveError } = useSelector(
    (state) => state.mentor
  );
  const { userInfo } = useSelector((state) => state.user);
  useEffect(() => {
    dispatch(mentorOne(match.params.mentorid));
  }, [dispatch, match]);

  const onRemove = useCallback(() => {
    dispatch(
      mentorRemove({
        data: mentor.id,
      })
    );
  }, [dispatch, mentor]);

  const onMove = useCallback(() => {
    history.push("/mentorupdate");
  }, [history]);

  useEffect(() => {
    if (isMentorRemoveDone) {
      history.push("/mentor");
    }
  }, [history, isMentorRemoveDone]);

  return (
    <MentorDetailWrapper>
      {mentor ? (
        <>
          {" "}
          <MentorContents>
            <MentorContentsInfo>
              <div>
                <MentorCtnSub>멘토 소개</MentorCtnSub>
                <MentorCtnCtn>
                  {mentor.intro.split(/\n/g).map((line) => {
                    return <div>{line}</div>;
                  })}
                </MentorCtnCtn>
              </div>
              <div>
                <MentorCtnSub>멘토 경력</MentorCtnSub>
                <MentorCtnCtn>
                  {mentor.carrer.split(/\n/g).map((line) => {
                    return <div>{line}</div>;
                  })}
                </MentorCtnCtn>
              </div>
              <div>
                <MentorCtnSub>멘토링 분야 </MentorCtnSub>
                <MentorCtnCtn>
                  {mentor.field.split(/\n/g).map((line) => {
                    return <div>{line}</div>;
                  })}
                </MentorCtnCtn>
              </div>
            </MentorContentsInfo>
            <MentorCtnGuidanceWrapper>
              <div>
                <MentorCtnSub>멘토링안내</MentorCtnSub>
                <div dangerouslySetInnerHTML={{ __html: mentor.content }}></div>
              </div>
            </MentorCtnGuidanceWrapper>
          </MentorContents>
          <MentorInfoWrapper>
            <MentorInfo>
              <MentorInfoDefail>
                <div style={{ width: "50%" }}>
                  <MentorInfoImg>
                    <img
                      src={`https://bting-images.s3.ap-northeast-2.amazonaws.com/${mentor.mentorImg.src}`}
                      alt={mentor.mentorImg.src}
                      style={{ height: "100%", width: "100%" }}
                    />
                  </MentorInfoImg>
                </div>
                <div style={{ width: "50%" }}>
                  <MentorInfoNames>
                    <MentorInfoName>{mentor.name}</MentorInfoName>
                    <MentorInfoDepart>
                      <div style={{ fontSize: "11px" }}>{mentor.depart}</div>
                    </MentorInfoDepart>
                  </MentorInfoNames>
                  <div>
                    <MentorInfoCompany>{mentor.company}</MentorInfoCompany>
                  </div>
                </div>
              </MentorInfoDefail>
              {userInfo && userInfo.email === mentor.user.email ? (
                <div style={{ textAlign: "center" }}>
                  <Button onClick={onMove}>수정하기</Button>
                  <Button onClick={onRemove}>삭제하기</Button>
                </div>
              ) : null}
            </MentorInfo>
          </MentorInfoWrapper>{" "}
        </>
      ) : null}
    </MentorDetailWrapper>
  );
}

export default MentorDetail;
