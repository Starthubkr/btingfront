import styled, { createGlobalStyle } from "styled-components";

export const MentorSub = styled.div`
  text-align: "center";
`;
export const MentorCreateTitle = styled.div`
  font-size: 35px;
  font-weight: 700;
  margin-bottom: 5px;
  text-align: center;
`;
export const MentorCreateText = styled.div`
  font-size: 14px;
  font-weight: 400;
`;
export const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
export const ProfileSub = styled.div`
  font-size: 25px;
  font-weight: 700;
  margin-right: auto;
`;
export const ProfilePicture = styled.div`
  font-size: 16px;
  font-weight: 700;
  height: 15px;
  line-height: 16px;
  cursor: pointer;
`;
export const ProfileTextWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 180px;
`;

export const MentorImgWrapper = styled.div`
  width: 180px;
  height: 180px;
  border: 1px solid lightgrey;
  border-radius: 5px;
  margin: auto;
  position: relative;
  margin-bottom: 0;
  z-index: 9999;
`;

export const InputFile = styled.input`
  width: 100%;
  height: 100%;
  opacity: 0;
`;

export const ProfileNameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 300px;
`;

export const ProfileNameFlex = styled.div`
  display: flex;
  align-items: center;
`;

export const ProfileComFlex = styled.div`
  display: flex;
  align-items: center;
`;

export const ProfileComWrapper = styled.div`
  width: 20%;
  font-size: 15px;
  font-weight: 700;
`;

export const ProfileInput = styled.input`
  width: 80%;
  height: 22px;
  padding: 8px;
`;

export const MentorInputWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const MentorInfoSec = styled.div`
  font-size: 25px;
  font-weight: 700;
  margin-right: auto;
`;

export const MentorInfoSecSub = styled.div`
  font-size: 16px;
  font-weight: 700;
  height: 15px;
  line-height: 16px;
  cursor: pointer;
`;

export const MentorColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 380px;
  width: 50%;
`;

export const MentorInfoFir = styled.div`
  font-size: 15px;
  font-weight: 700;
  margin-bottom: 8px;
`;
export const MentorInfoFirTextarea = styled.textarea`
  width: 100%;
  height: 80px;
  resize: none;
  border-radius: 10px;
  box-sizing: border-box;
  padding: 8px;
`;
export const MentorInfoButton = styled.button`
  width: 130px;
  height: 50px;
  background: black;
  border: 1px solid black;
  border-radius: 10px;
`;

export const GlobalStyle = createGlobalStyle`
    
.rdw-editor-main{
    border:1px solid #f1f1f1;
    border-top:0px;
    padding:8px;
    height: 400px;
}
.toolbar-class{
    margin-bottom:0
}
`;

export const MentorWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 150px;
`;
