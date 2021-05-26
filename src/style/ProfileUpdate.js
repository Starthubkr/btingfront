import styled from "styled-components";

export const ProfileWrapper = styled.div`
  width: 550px;
  background: #fff;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 35px;
  z-index: 9999;
  border-radius: 10px;
`;

export const ProfileUpdateText = styled.div`
  font-size: 23px;
  font-weight: 700;
  margin-bottom: 20px;
`;
export const ProfileFlex = styled.div`
  display: flex;
  align-items: center;
  height: 180px;
`;

export const ProfileImgWrapper = styled.div`
  width: 150px;
  height: 150px;
  border: 1px solid lightgrey;
  border-radius: 5px;
  margin: auto;
  position: relative;
  margin-bottom: 0;
  z-index: 9999;
`;

export const ProfileFile = styled.input`
  width: 100%;
  height: 100%;
  opacity: 0;
`;

export const ProfileTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 150px;
  width: 300px;
`;

export const ProfileTextFlex = styled.div`
  display: flex;
  align-items: center;
`;

export const ProfileUpdateName = styled.div`
  width: 20%;
  font-size: 15px;
  font-weight: 700;
`;

export const ProfileUpdateNameInput = styled.input`
  width: 80%;
  height: 20px;
  padding: 8px;
  border: 1px solid lightgrey;
  border-radius: 10px;
`;

export const ProfileUpdateBtn = styled.button`
  width: 80px;
  height: 40px;
  background: lightgrey;
  border: 1px solid lightgrey;
  border-radius: 10px;
`;

export const ProfileUpdateBtnCnt = styled.span`
  color: #fff;
  font-weight: 800;
`;

export const UpdateBackground = styled.div`
  width: 100%;
  height: 100vh;
  background: black;
  opacity: 0.5;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9998;
`;
