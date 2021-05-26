import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const JoinWrapper = styled.div`
  padding: 30px 0;
  display: flex;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const JoinSucWrapper = styled.div`
  width: 410px;
  max-width: 410px;
  border-radius: 10px;
  background: #fff;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const EmogiWrapper = styled.div`
  font-size: 50px;
  margin-top: 23px;
  padding: 5px;
`;
const EmailEnter = styled.div`
  font-size: 25px;
  font-weight: 700;
  padding: 5px;
`;

const EmailText = styled.div`
  font-size: 12px;
  color: gray;
`;

const ButtonWrapper = styled.div`
  margin: 30px 0 30px 0;

  & button {
    width: 150px;
    height: 50px;
    border-radius: 10px;
    border: 1px solid lightgrey;
    background-color: lightgrey;
  }
`;

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
          {/* <EmailEnter>이메일을 확인해주세요!</EmailEnter>
          <EmailText>이메일 인증 후, 회원가입이 완료됩니다:)</EmailText> */}
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
