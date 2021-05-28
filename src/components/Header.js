import React, { useCallback, useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { initUser, logoutUser } from "../actions/useraction";
import logo from "../images/Starting_logo_nv.png";
import Profileupdate from "./Profileupdate";

const HeaderWrapper = styled.div`
  height: 80px;
  position: absolute;
  width: 100%;
  z-index: 2;
`;
const HeaderMenu = styled.div`
  margin: 0 10%;
  height: 80px;
`;
const LogoWrapper = styled.h1`
  padding: 20px;
  float: left;
  margin: 0;
  margin-right: 32px;
  line-height: 60px;
`;

const NavWrapper = styled.nav`
  float: right;
  position: relative;
  z-index: 1;
  height: 100%;
  font-size: 13px;
  margin-top: 20px;
`;

const UlList = styled.ul`
  padding-right: 20px;
  list-style: none;
  margin: 10px 0 0 0;
`;
const List = styled.li`
  float: left;
  position: relative;
  text-align: left;
  line-height: 40px;
  padding: 10px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  color: black;
`;

function Header() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { userInfo, isUserUpdateDone } = useSelector((state) => state.user);
  const [isProfileUpdate, setIsProfileUpdate] = useState(false);

  const onHistory = useCallback(
    (r) => {
      history.replace(r);
    },
    [history]
  );

  const onLogout = useCallback(() => {
    dispatch(logoutUser());
  }, [dispatch]);

  useEffect(() => {
    if (isUserUpdateDone) {
      dispatch(initUser());
    }
  }, [isUserUpdateDone]);

  return (
    <>
      <HeaderWrapper>
        <HeaderMenu>
          <LogoWrapper>
            <img
              src={logo}
              alt="a5183685242c9929e52ec8f20821c0cb"
              style={{
                verticalAlign: "middle",
                maxHeight: "40px",
                cursor: "pointer",
              }}
              onClick={() => onHistory("/")}
            />
          </LogoWrapper>
          <NavWrapper>
            <UlList>
              <List onClick={() => onHistory("/mentor")}>멘토찾기</List>
              {userInfo ? (
                <>
                  <List onClick={() => onHistory("/mentorcreate")}>
                    멘토등록
                  </List>
                  <List onClick={() => setIsProfileUpdate((prev) => !prev)}>
                    프로필수정
                  </List>
                  <List onClick={onLogout}>로그아웃</List>
                </>
              ) : (
                <>
                  {" "}
                  <List onClick={() => onHistory("/login")}>로그인</List>
                  <List onClick={() => onHistory("/join")}>회원가입</List>
                </>
              )}
            </UlList>
          </NavWrapper>
        </HeaderMenu>
      </HeaderWrapper>
      {isProfileUpdate ? (
        <Profileupdate setIsProfileUpdate={setIsProfileUpdate} />
      ) : null}
    </>
  );
}

export default Header;
