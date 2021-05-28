import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";
import {
  ButtonWrapper,
  EmailEnter,
  EmailText,
  EmogiWrapper,
  JoinSucWrapper,
  JoinWrapper,
} from "../style/JoinSuc";

function Joinsuc() {
  const history = useHistory();
  const onClick = useCallback(() => {
    history.push("/");
  }, [history]);

  return (
    <>
      <JoinWrapper>
        <JoinSucWrapper>
          <EmogiWrapper>🧐</EmogiWrapper>
          <EmailEnter>회원가입이 완료되었습니다!</EmailEnter>
          <EmailEnter>이메일을 확인해주세요!</EmailEnter>
          <EmailText>이메일 인증 후, 회원가입이 완료됩니다:)</EmailText>
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
  );
}

export default Joinsuc;
