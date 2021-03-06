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
          <EmogiWrapper>π§</EmogiWrapper>
          <EmailEnter>νμκ°μμ΄ μλ£λμμ΅λλ€!</EmailEnter>
          <EmailEnter>μ΄λ©μΌμ νμΈν΄μ£ΌμΈμ!</EmailEnter>
          <EmailText>μ΄λ©μΌ μΈμ¦ ν, νμκ°μμ΄ μλ£λ©λλ€:)</EmailText>
          <ButtonWrapper>
            <button onClick={onClick}>
              <span style={{ fontSize: "12px", fontWeight: "700" }}>
                ννμ΄μ§ λ°λ‘κ°κΈ°
              </span>
            </button>
          </ButtonWrapper>
        </JoinSucWrapper>
      </JoinWrapper>
    </>
  );
}

export default Joinsuc;
