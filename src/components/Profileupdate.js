import React, { useEffect, useState } from "react";
import { useCallback } from "react";
import { AiFillCamera } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import useInput from "../hooks/useInput";
import { JoinImg } from "../style/Join";
import { userUpdateImg, userUpdate } from "../actions/useraction";
import {
  ProfileFile,
  ProfileFlex,
  ProfileImgWrapper,
  ProfileUpdateText,
  ProfileWrapper,
  ProfileTextWrapper,
  ProfileTextFlex,
  ProfileUpdateName,
  ProfileUpdateNameInput,
  ProfileUpdateBtn,
  ProfileUpdateBtnCnt,
  UpdateBackground,
} from "../style/ProfileUpdate";

function Profileupdate({ setIsProfileUpdate }) {
  const dispatch = useDispatch();
  const [imgBase64, setImgBase64] = useState("");
  const [imgFile, setImgFile] = useState(null);
  const { userInfo, imgPath, isUserUpdateImgDone, isUserUpdateDone } =
    useSelector((state) => state.user);
  const [name, onChangeName] = useInput(userInfo.name);
  const [company, onChangeCompany] = useInput(userInfo.company);
  const [depart, onChangeDepart] = useInput(userInfo.depart);

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
        const imageFormData = new FormData();
        imageFormData.append("image", imgFile);
        dispatch(userUpdateImg({ data: imageFormData }));
      } else {
        const formData = new FormData();
        formData.append("id", userInfo.id);
        formData.append("name", name);
        formData.append("company", company);
        formData.append("depart", depart);
        formData.append("src", null);
        formData.append("prevSrc", null);
        dispatch(userUpdate({ data: formData }));
      }
    },
    [imgFile, dispatch, userInfo.id, name, company, depart]
  );

  useEffect(() => {
    if (isUserUpdateImgDone) {
      const formData = new FormData();
      formData.append("id", userInfo.id);
      formData.append("name", name);
      formData.append("company", company);
      formData.append("depart", depart);
      formData.append("src", imgPath);
      if (userInfo.profileimg) {
        formData.append("prevSrc", userInfo.profileimg.src);
      } else {
        formData.append("prevSrc", null);
      }
      dispatch(userUpdate({ data: formData }));
    }
  }, [
    company,
    depart,
    dispatch,
    imgPath,
    isUserUpdateImgDone,
    name,
    userInfo.id,
    userInfo.profileimg,
  ]);

  useEffect(() => {
    if (isUserUpdateDone) {
      setIsProfileUpdate((prev) => !prev);
    }
  }, [isUserUpdateDone]);

  return (
    <>
      <form onSubmit={onSubmit} encType="multipart/form-data">
        <ProfileWrapper>
          <ProfileUpdateText>프로필 수정</ProfileUpdateText>
          <ProfileFlex>
            <div style={{ marginRight: "auto" }}>
              <ProfileImgWrapper>
                <ProfileFile type="file" onChange={handleChangeFile} />
                <JoinImg>
                  {imgFile || userInfo.profileimg ? (
                    !imgFile ? (
                      <img
                        src={`https://bting-images.s3.ap-northeast-2.amazonaws.com/${userInfo.profileimg.src}`}
                        alt={userInfo.profileimg.src}
                        style={{ width: "100%", height: "100%" }}
                      />
                    ) : (
                      <img
                        src={imgBase64}
                        alt={imgBase64}
                        style={{ width: "100%", height: "100%" }}
                      />
                    )
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
              </ProfileImgWrapper>
            </div>
            <ProfileTextWrapper>
              <ProfileTextFlex>
                <ProfileUpdateName>이름</ProfileUpdateName>
                <ProfileUpdateNameInput
                  type="text"
                  value={name}
                  onChange={onChangeName}
                />
              </ProfileTextFlex>
              <ProfileTextFlex>
                <ProfileUpdateName>소속</ProfileUpdateName>
                <ProfileUpdateNameInput
                  type="text"
                  value={company}
                  onChange={onChangeCompany}
                />
              </ProfileTextFlex>
              <ProfileTextFlex>
                <ProfileUpdateName>직무</ProfileUpdateName>
                <ProfileUpdateNameInput
                  type="text"
                  value={depart}
                  onChange={onChangeDepart}
                />
              </ProfileTextFlex>
            </ProfileTextWrapper>
          </ProfileFlex>
          <div style={{ textAlign: "right" }}>
            <ProfileUpdateBtn
              type="button"
              onClick={() => setIsProfileUpdate((prev) => !prev)}
            >
              <ProfileUpdateBtnCnt>취소</ProfileUpdateBtnCnt>
            </ProfileUpdateBtn>{" "}
            <ProfileUpdateBtn
              style={{
                background: "black",
                border: "1px solid black",
              }}
              type="submit"
            >
              <ProfileUpdateBtnCnt>확인</ProfileUpdateBtnCnt>
            </ProfileUpdateBtn>
          </div>
        </ProfileWrapper>
        <UpdateBackground />
      </form>
    </>
  );
}

export default Profileupdate;
