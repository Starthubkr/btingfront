import React, { useCallback, useEffect } from "react";
import styled from "styled-components";
import useInput from "../hooks/useInput";
import { useDispatch } from "react-redux";
import { initUser, loginUser } from "../actions/useraction";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import loadingbar from "../images/loginloading.svg";

const LoginWrapper = styled.div`
  padding: 30px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const LoginEnter = styled.div`
  background: #fff;
  width: 350px;
  border-radius: 10px;
`;

const LoginInput = styled.input`
  width: 290px;
  height: 13px;
  padding: 8px;
  margin-bottom: 15px;
`;

const LoginButton = styled.button`
  margin-top: 20px;
  width: 100%;
  height: 40px;
  color: #fff;
  background-color: black;
  border: 1px solid black;
  border-radius: 10px;
`;

function Login() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { isUserLoginDone, isUserLoginLoading, isUserLoginError } = useSelector(
    (state) => state.user
  );
  const [email, onChangeEmail] = useInput("");
  const [password, onChangePassword] = useInput("");

  const onMove = useCallback(
    (u) => {
      history.push(u);
    },
    [history]
  );

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(
        loginUser({
          data: { email, password },
        })
      );
    },
    [email, password, dispatch]
  );

  useEffect(() => {
    if (isUserLoginDone) {
      history.replace("/");
    }
  }, [isUserLoginDone, history]);

  useEffect(() => {
    if (isUserLoginError) {
      alert(isUserLoginError);
      dispatch(initUser());
    }
  }, [dispatch, isUserLoginError]);
  return (
    <>
      <LoginWrapper>
        <div
          style={{
            fontWeight: 700,
            marginBottom: "5px",
            cursor: "pointer",
          }}
          onClick={() => onMove("/")}
        >
          &#60; ??? ???????????? ????????????
        </div>
        <LoginEnter>
          <div style={{ padding: "20px" }}>
            <div
              style={{
                fontSize: "25px",
                fontWeight: 600,
                letterSpacing: -2,
                marginBottom: "5px",
                marginTop: "10px",
              }}
            >
              ?????????
            </div>
            <div style={{ color: "gray", marginBottom: "30px" }}>
              ????????? ???????????? ????????? ?????? ??? ?????????,
              <br />
              ???????????? ??????????????????:)
            </div>
            <form>
              <LoginInput
                placeholder="????????? ??????"
                type="email"
                value={email}
                onChange={onChangeEmail}
              />
              <br />
              <LoginInput
                placeholder="????????????"
                type="password"
                value={password}
                onChange={onChangePassword}
              />
              <div
                style={{
                  textAlign: "right",
                  fontWeight: 800,
                  letterSpacing: "-1px",
                  fontSize: "10px",
                  marginBottom: "5px",
                }}
              >
                <span
                  style={{ cursor: "pointer" }}
                  onClick={() => onMove("/join")}
                >
                  ???????????? ????????????
                </span>
              </div>
              <LoginButton type="submit" onClick={onSubmit}>
                {isUserLoginLoading ? (
                  <img src={loadingbar} alt={loadingbar} />
                ) : (
                  <span style={{ fontWeight: 800, letterSpacing: "-1px" }}>
                    ?????????
                  </span>
                )}
              </LoginButton>
            </form>
          </div>
        </LoginEnter>
      </LoginWrapper>
    </>
  );
}

export default Login;
