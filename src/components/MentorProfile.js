import React from "react";
import { useCallback } from "react";
import { AiFillCamera, AiOutlineUp } from "react-icons/ai";
import { JoinImg } from "../style/Join";
import {
  InputFile,
  MentorImgWrapper,
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

function MentorProfile({
  profile,
  profileUD,
  handleChangeFile,
  imgFile,
  mentor,
  imgBase64,
  name,
  onChangeName,
  company,
  onChangeCompany,
  depart,
  onChangeDepart,
}) {
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
  }, [profile, profileUD]);
  return (
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
              {imgFile || mentor ? (
                !imgFile ? (
                  <img
                    src={`https://bting-images.s3.ap-northeast-2.amazonaws.com/${mentor.mentorImg.src}`}
                    alt={mentor.mentorImg.src}
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
                  <div style={{ color: "lightgrey" }}>프로필 사진 업로드</div>
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
  );
}

MentorProfile.defaultProps = {
  mentor: null,
};

export default MentorProfile;
