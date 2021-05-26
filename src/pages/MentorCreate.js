import React, { useCallback, useEffect, useRef, useState } from "react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";

import { AiFillCamera, AiOutlineUp } from "react-icons/ai";
import { JoinImg } from "../style/Join";
import useInput from "../hooks/useInput";
import { useDispatch } from "react-redux";
import { createMentor, mentorImage } from "../actions/mentoraction";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  GlobalStyle,
  InputFile,
  MentorCreateText,
  MentorCreateTitle,
  MentorImgWrapper,
  MentorInfoButton,
  MentorSub,
  MentorWrapper,
  ProfileComFlex,
  ProfileComWrapper,
  ProfileInput,
  ProfileNameFlex,
  ProfileNameWrapper,
  ProfilePicture,
  ProfileSub,
  ProfileTextWrapper,
  ProfileWrapper,
} from "../style/MentorCreate";
import MentorInfo from "../components/MentorInfo";
import MentorContent from "../components/MentorContent";

function MentorCreate() {
  const dispatch = useDispatch();
  const { isMentorCraeteDone, isMentorImageDone, imgPath } = useSelector(
    (state) => state.mentor
  );
  const { userInfo } = useSelector((state) => state.user);
  const history = useHistory();
  const [editor, setEditor] = useState(EditorState.createEmpty());

  const [name, onChangeName] = useInput();
  const [company, onChangeCompany] = useInput();
  const [depart, onChangeDepart] = useInput();
  const [mentorIntro, onChangeMentorIntro] = useInput();
  const [mentorCareer, onChangeMentorCareer] = useInput();
  const [mentorDepart, onChangeMentorDepart] = useInput();

  const profile = useRef();
  const profileUD = useRef();
  const mentoInfo = useRef();
  const mentoInfoUD = useRef();
  const mentorCon = useRef();
  const mentorConUD = useRef();

  useEffect(() => {
    if (isMentorCraeteDone) {
      history.replace("/mentor");
    }
  }, [isMentorCraeteDone, history]);

  const onEditorStateChange = (editorState) => {
    setEditor(editorState);
  };

  const editorToHtml = draftToHtml(convertToRaw(editor.getCurrentContent()));

  const [imgBase64, setImgBase64] = useState("");
  const [imgFile, setImgFile] = useState(null);

  const handleChangeFile = (e) => {
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
  };

  const onProfileMove = useCallback(() => {
    if (profile.current.classList.contains("offProfile")) {
      profile.current.classList.remove("offProfile");
      profile.current.classList.add("onProfile");
      profileUD.current.classList.remove("upProfile");
    } else {
      profile.current.classList.remove("profile");
      profile.current.classList.remove("onProfile");
      profile.current.classList.add("offProfile");
      profileUD.current.classList.add("upProfile");
    }
  }, []);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const imgUpload = new FormData();
      imgUpload.append("mentorImg", imgFile);
      dispatch(mentorImage({ data: imgUpload }));
    },
    [dispatch, imgFile]
  );

  useEffect(() => {
    if (isMentorImageDone) {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("company", company);
      formData.append("depart", depart);
      formData.append("intro", mentorIntro);
      formData.append("carrer", mentorCareer);
      formData.append("field", mentorDepart);
      formData.append("content", editorToHtml);
      formData.append("userId", userInfo.id);
      formData.append("src", imgPath);
      dispatch(createMentor({ data: formData }));
    }
  }, [
    company,
    depart,
    dispatch,
    editorToHtml,
    imgPath,
    isMentorImageDone,
    mentorCareer,
    mentorDepart,
    mentorIntro,
    name,
    userInfo.id,
  ]);

  return (
    <form onSubmit={onSubmit} encType="multipart/form-data">
      <MentorWrapper>
        <GlobalStyle />
        <MentorSub>
          <MentorCreateTitle>멘토등록</MentorCreateTitle>
          <MentorCreateText>
            비즈니스 매칭이 필요한 당신, 지금 바로 등록하세요!
          </MentorCreateText>
        </MentorSub>
        <div className="profile" ref={profile}>
          <ProfileWrapper>
            <ProfileSub>1. 프로필</ProfileSub>
            <ProfilePicture ref={profileUD}>
              <AiOutlineUp onClick={onProfileMove} />
            </ProfilePicture>
          </ProfileWrapper>
          <ProfileTextWrapper>
            <div style={{ marginRight: "auto" }}>
              <MentorImgWrapper>
                <InputFile type="file" onChange={handleChangeFile} />
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
              </MentorImgWrapper>
            </div>
            <ProfileNameWrapper>
              <ProfileNameFlex>
                <ProfileComWrapper>이름</ProfileComWrapper>
                <ProfileInput
                  type="text"
                  placeholder="이름을 입력해주세요"
                  value={name}
                  onChange={onChangeName}
                />
              </ProfileNameFlex>
              <ProfileComFlex>
                <ProfileComWrapper>소속</ProfileComWrapper>
                <ProfileInput
                  type="text"
                  placeholder="소속을 입력해주세요"
                  value={company}
                  onChange={onChangeCompany}
                />
              </ProfileComFlex>
              <ProfileComFlex>
                <ProfileComWrapper>직무</ProfileComWrapper>
                <ProfileInput
                  type="text"
                  placeholder="직무를 입력해주세요"
                  value={depart}
                  onChange={onChangeDepart}
                />
              </ProfileComFlex>
            </ProfileNameWrapper>
          </ProfileTextWrapper>
        </div>
        <MentorInfo
          mentoInfo={mentoInfo}
          mentoInfoUD={mentoInfoUD}
          mentorIntro={mentorIntro}
          onChangeMentorIntro={onChangeMentorIntro}
          mentorCareer={mentorCareer}
          onChangeMentorCareer={onChangeMentorCareer}
          mentorDepart={mentorDepart}
          onChangeMentorDepart={onChangeMentorDepart}
        />
        <MentorContent
          mentorCon={mentorCon}
          mentorConUD={mentorConUD}
          editor={editor}
          onEditorStateChange={onEditorStateChange}
        />

        <div style={{ marginBottom: "50px" }}>
          <MentorInfoButton type="submit">
            <span
              style={{ color: "#FFF", fontWeight: "800", fontSize: "18px" }}
            >
              등록하기
            </span>
          </MentorInfoButton>
        </div>
      </MentorWrapper>
    </form>
  );
}

export default MentorCreate;
