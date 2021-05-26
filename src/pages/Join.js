import React, { useCallback, useEffect, useRef, useState } from "react";
import useInput from "../hooks/useInput";
import { useDispatch } from "react-redux";
import { createImgUser, createUser } from "../actions/useraction";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  JoinButton,
  JoinDetailWrapper,
  JoinEnter,
  JoinImg,
  JoinImgWrapper,
  JoinInput,
  JoinNextEnter,
  JoinStepWrapper,
  JoinSubEnter,
  JoinTextWrapper,
  JoinWrapper,
} from "../style/Join";
import { AiFillCamera } from "react-icons/ai";
import loadingbar from "../images/loginloading.svg";

function Join() {
  const dispatch = useDispatch();
  const history = useHistory();
  const {
    isUserCreateDone,
    imgPath,
    isCreateImgDone,
    isUserCreateLoading,
  } = useSelector((state) => state.user);

  const [email, onChangeEmail] = useInput();
  const [password, onChangePassword] = useInput();
  const [passwordCh, onChangePasswordCh] = useInput();
  const [name, onChangeName] = useInput();
  const [phone, onChangePhone] = useInput();
  const [depart, onChangeDepart] = useInput("");
  const [company, onChangeCompany] = useInput("");
  const nextAni = useRef();
  const preAni = useRef();

  const [imgBase64, setImgBase64] = useState("");
  const [imgFile, setImgFile] = useState(null);

  const handleChangeFile = useCallback((e) => {
    let reader = new FileReader();

    reader.onloadend = () => {
      const base64 = reader.result;
      if (base64) {
        setImgBase64(base64.toString());
      }
    };
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
      setImgFile(e.target.files[0]);
    }
  }, []);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (email.length === 0) {
        alert("email을 입력해주세요");
        return;
      }
      if (password.length === 0) {
        alert("비밀번호를 입력해주세요");
        return;
      }
      if (password !== passwordCh) {
        alert("비밀번호가 같지 않습니다.");
        return;
      }
      if (name === 0) {
        alert("비밀번호를 입력해주세요");
        return;
      }
      if (imgFile) {
        const imgFormData = new FormData();
        imgFormData.append("profileImage", imgFile);
        dispatch(createImgUser({ data: imgFormData }));
      } else {
        const formData = new FormData();
        formData.append("email", email);
        formData.append("password", password);
        formData.append("name", name);
        formData.append("phone", phone);
        formData.append("company", company);
        formData.append("depart", depart);
        if (!imgFile) {
          formData.append("src", "");
        } else {
          formData.append("src", imgFile);
        }
        dispatch(
          createUser({
            data: formData,
          })
        );
      }
    },
    [
      email,
      password,
      passwordCh,
      name,
      imgFile,
      dispatch,
      phone,
      company,
      depart,
    ]
  );

  const onMove = useCallback(() => {
    history.replace("/");
  }, []);

  useEffect(() => {
    if (isCreateImgDone) {
      const formData = new FormData();
      formData.append("email", email);
      formData.append("password", password);
      formData.append("name", name);
      formData.append("phone", phone);
      formData.append("company", company);
      formData.append("depart", depart);
      formData.append("src", imgPath);
      dispatch(
        createUser({
          data: formData,
        })
      );
    }
  }, [
    company,
    depart,
    dispatch,
    email,
    imgPath,
    isCreateImgDone,
    name,
    password,
    phone,
  ]);

  const onNextStep = useCallback(() => {
    preAni.current.classList.remove("nextToPrev");
    preAni.current.classList.add("prev");
    nextAni.current.classList.remove("prevToNext");
    nextAni.current.classList.add("next");
    nextAni.current.style.display = "block";
  }, []);

  const nextToPrev = useCallback(() => {
    preAni.current.classList.remove("prev");
    preAni.current.classList.add("nextToPrev");
    nextAni.current.classList.remove("next");
    nextAni.current.classList.add("prevToNext");
    setTimeout(() => nextAni.current.style.display === "none", 500);
  }, []);

  useEffect(() => {
    if (isUserCreateDone) {
      history.push("/joinsuc");
    }
  }, [isUserCreateDone, history]);

  return (
    <>
      <form onSubmit={onSubmit} encType="multipart/form-data">
        <JoinWrapper>
          <div
            style={{
              fontWeight: 700,
              marginBottom: "5px",
              cursor: "pointer",
            }}
            onClick={onMove}
          >
            &#60; 홈 화면으로 돌아가기
          </div>
          <JoinEnter>
            <JoinSubEnter ref={preAni}>
              <JoinTextWrapper>회원가입</JoinTextWrapper>
              <div style={{ color: "gray", marginBottom: "30px" }}>
                회원가입하고, 다양한 비즈니스 멘토들을 만나보세요!
              </div>
              <div style={{ marginBottom: "15px", textAlign: "center" }}>
                <JoinStepWrapper>STEP1</JoinStepWrapper>
              </div>

              <JoinDetailWrapper>
                <div style={{ width: "100px", paddingBottom: "3px" }}>
                  이메일 주소
                </div>
                <JoinInput
                  placeholder="email"
                  type="email"
                  value={email}
                  onChange={onChangeEmail}
                />
              </JoinDetailWrapper>

              <JoinDetailWrapper>
                <div style={{ width: "100px", paddingBottom: "3px" }}>
                  비밀번호
                </div>
                <JoinInput
                  placeholder="password"
                  type="password"
                  value={password}
                  onChange={onChangePassword}
                />
              </JoinDetailWrapper>
              <JoinDetailWrapper>
                <div style={{ width: "100px", paddingBottom: "3px" }}>
                  비밀번호 확인
                </div>
                <JoinInput
                  placeholder="password check"
                  type="password"
                  value={passwordCh}
                  onChange={onChangePasswordCh}
                />
              </JoinDetailWrapper>
              <JoinDetailWrapper>
                <div style={{ width: "100px", paddingBottom: "3px" }}>이름</div>
                <JoinInput
                  placeholder="name"
                  type="text"
                  value={name}
                  onChange={onChangeName}
                />
              </JoinDetailWrapper>
              <JoinDetailWrapper>
                <div style={{ width: "100px", paddingBottom: "3px" }}>
                  전화번호
                </div>
                <JoinInput
                  placeholder="'-' 없이 입력해주세요"
                  type="text"
                  value={phone}
                  onChange={onChangePhone}
                />
              </JoinDetailWrapper>

              <div style={{ textAlign: "center" }}>
                <JoinButton type="button" onClick={onNextStep}>
                  <span style={{ fontWeight: 800, letterSpacing: "-1px" }}>
                    다음 단계로
                  </span>
                </JoinButton>
              </div>
            </JoinSubEnter>
            <JoinNextEnter ref={nextAni}>
              <JoinTextWrapper>사진 / 소속</JoinTextWrapper>
              <div style={{ color: "gray", marginBottom: "30px" }}>
                회원가입하고, 다양한 비즈니스 멘토들을 만나보세요!
              </div>
              <div style={{ marginBottom: "15px", textAlign: "center" }}>
                <JoinStepWrapper>STEP2</JoinStepWrapper>
              </div>
              <div>
                <JoinImgWrapper>
                  <input
                    type="file"
                    style={{
                      width: "100%",
                      height: "158px",
                      opacity: 0,
                    }}
                    onChange={handleChangeFile}
                  />
                  <JoinImg>
                    {imgFile ? (
                      <img
                        src={imgBase64}
                        alt={imgBase64}
                        style={{ width: "100%", height: "100%" }}
                      />
                    ) : (
                      <>
                        {" "}
                        <AiFillCamera
                          style={{
                            width: "35px",
                            height: "35px",
                            color: "lightgrey",
                          }}
                        />
                        <div style={{ color: "lightgrey" }}>
                          프로필 사진 업로드
                        </div>
                      </>
                    )}
                  </JoinImg>
                </JoinImgWrapper>
              </div>
              <JoinDetailWrapper>
                <JoinInput
                  placeholder="소속을 입력해주세요. (예: 비팅 주식회사)"
                  type="text"
                  value={company}
                  onChange={onChangeCompany}
                  style={{ width: "100%" }}
                />
              </JoinDetailWrapper>
              <JoinDetailWrapper>
                <JoinInput
                  placeholder="직무를 입력해주세요. (예: 대표이사, 마케터 등)"
                  type="text"
                  value={depart}
                  onChange={onChangeDepart}
                  style={{ width: "100%" }}
                />
              </JoinDetailWrapper>

              <div
                style={{ textAlign: "center" }}
                disabled={isUserCreateLoading}
              >
                <JoinButton type="button" onClick={nextToPrev} disabled>
                  {isUserCreateLoading ? (
                    <img src={loadingbar} alt={loadingbar} />
                  ) : (
                    <span
                      style={{
                        fontWeight: 800,
                        letterSpacing: "-1px",
                      }}
                    >
                      이전 단계
                    </span>
                  )}
                </JoinButton>
                <JoinButton type="submit" disabled={isUserCreateLoading}>
                  {isUserCreateLoading ? (
                    <img src={loadingbar} alt={loadingbar} />
                  ) : (
                    <span
                      style={{
                        fontWeight: 800,
                        letterSpacing: "-1px",
                      }}
                    >
                      완료
                    </span>
                  )}
                </JoinButton>
              </div>
            </JoinNextEnter>
          </JoinEnter>
        </JoinWrapper>
      </form>
    </>
  );
}

export default Join;
