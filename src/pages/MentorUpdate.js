import React, { useCallback, useEffect, useRef, useState } from "react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState, convertToRaw, ContentState } from "draft-js";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";

import useInput from "../hooks/useInput";
import { useDispatch } from "react-redux";
import { mentorUpdate, mentorUpdateImg } from "../actions/mentoraction";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  MentorCreateTitle,
  MentorCreateText,
  MentorSub,
  MentorInfoButton,
  GlobalStyle,
  MentorWrapper,
} from "../style/MentorCreate";
import MentorProfile from "../components/MentorProfile";
import MentorInfo from "../components/MentorInfo";
import MentorContent from "../components/MentorContent";

function MentorUpdate() {
  const dispatch = useDispatch();
  const { isMentorUpdateDone, isMentorUpdateImgDone, imgPath, mentor } =
    useSelector((state) => state.mentor);
  const { userInfo } = useSelector((state) => state.user);
  const history = useHistory();
  const [editor, setEditor] = useState(EditorState.createEmpty());

  const [name, onChangeName] = useInput(mentor.name);
  const [company, onChangeCompany] = useInput(mentor.company);
  const [depart, onChangeDepart] = useInput(mentor.depart);
  const [mentorIntro, onChangeMentorIntro] = useInput(mentor.intro);
  const [mentorCareer, onChangeMentorCareer] = useInput(mentor.carrer);
  const [mentorDepart, onChangeMentorDepart] = useInput(mentor.field);

  const profile = useRef();
  const profileUD = useRef();
  const mentoInfo = useRef();
  const mentoInfoUD = useRef();
  const mentorCon = useRef();
  const mentorConUD = useRef();

  /**
   * 저장된 내용을 Html에서 draft.js로 변환
   */
  useEffect(() => {
    const blocksFromHtml = htmlToDraft(mentor.content);
    if (blocksFromHtml) {
      const { contentBlocks, entityMap } = blocksFromHtml;
      const contentState = ContentState.createFromBlockArray(
        contentBlocks,
        entityMap
      );
      const editorState = EditorState.createWithContent(contentState);
      setEditor(editorState);
    }
  }, []);

  useEffect(() => {
    if (isMentorUpdateDone) {
      history.replace("/mentor");
    }
  }, [isMentorUpdateDone, history]);

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

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();

      if (imgFile) {
        const imgUpload = new FormData();
        imgUpload.append("mentorImg", imgFile);
        dispatch(mentorUpdateImg({ data: imgUpload }));
      } else {
        const formData = new FormData();
        formData.append("name", name);
        formData.append("company", company);
        formData.append("depart", depart);
        formData.append("intro", mentorIntro);
        formData.append("carrer", mentorCareer);
        formData.append("field", mentorDepart);
        formData.append("content", editorToHtml);
        formData.append("id", mentor.id);
        formData.append("src", null);
        formData.append("prevSrc", null);
        dispatch(mentorUpdate({ data: formData }));
      }
    },
    [
      company,
      depart,
      dispatch,
      editorToHtml,
      imgFile,
      mentor.id,
      mentorCareer,
      mentorDepart,
      mentorIntro,
      name,
    ]
  );

  useEffect(() => {
    if (isMentorUpdateImgDone) {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("company", company);
      formData.append("depart", depart);
      formData.append("intro", mentorIntro);
      formData.append("carrer", mentorCareer);
      formData.append("field", mentorDepart);
      formData.append("content", editorToHtml);
      formData.append("id", mentor.id);
      formData.append("src", imgPath);
      formData.append("prevSrc", mentor.mentorImg.src);
      dispatch(mentorUpdate({ data: formData }));
    }
  }, [
    company,
    depart,
    dispatch,
    editorToHtml,
    imgPath,
    isMentorUpdateImgDone,
    mentor.id,
    mentor.mentorImg.src,
    mentorCareer,
    mentorDepart,
    mentorIntro,
    name,
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
        <MentorProfile
          profile={profile}
          profileUD={profileUD}
          handleChangeFile={handleChangeFile}
          imgFile={imgFile}
          mentor={mentor}
          imgBase64={imgBase64}
          name={name}
          onChangeName={onChangeName}
          company={company}
          onChangeCompany={onChangeCompany}
          depart={depart}
          onChangeDepart={onChangeDepart}
        />
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

export default MentorUpdate;
