import React, { useEffect } from "react";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { certification } from "../actions/useraction";
import {
  ButtonWrapper,
  EmailEnter,
  EmogiWrapper,
  JoinSucWrapper,
  JoinWrapper,
} from "../style/JoinSuc";

function Certification({ match }) {
  const dispatch = useDispatch();
  const { isMailCertificationDone } = useSelector((state) => state.user);

  useEffect(() => {
    if (match.params.email) {
      dispatch(certification({ data: { email: match.params.email } }));
    }
  }, [match.params.email, dispatch]);

  const history = useHistory();
  const onClick = useCallback(() => {
    history.push("/");
  }, [history]);

  return (
    <div>
      {isMailCertificationDone ? (
        <>
          <JoinWrapper>
            <JoinSucWrapper>
              <EmogiWrapper>🧐</EmogiWrapper>
              <EmailEnter>인증이 완료되었습니다.</EmailEnter>
              <ButtonWrapper>
                <button onClick={onClick}>
                  <span style={{ fontSize: "12px", fontWeight: "700" }}>
                    홈페이지 바로가기
                  </span>
                </button>
              </ButtonWrapper>
            </JoinSucWrapper>
          </JoinWrapper>
        </>
      ) : (
        <>
          <JoinWrapper>
            <JoinSucWrapper>
              <EmogiWrapper>😆</EmogiWrapper>
              <EmailEnter>인증 중...</EmailEnter>
            </JoinSucWrapper>
          </JoinWrapper>
        </>
      )}
    </div>
  );
}

export default Certification;
