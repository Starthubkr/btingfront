import styled from "styled-components";

export const JoinWrapper = styled.div`
  padding: 30px 0;
  display: flex;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  flex-direction: column;
`;

export const JoinEnter = styled.div`
  width: 410px;
  max-width: 410px;
  border-radius: 10px;
  background: #fff;
  overflow: hidden;
  position: relative;
`;

export const JoinSubEnter = styled.div`
  padding: 20px;
`;

export const JoinNextEnter = styled.div`
  display: none;
  position: absolute;
  top: 0;
  width: 100%;
  box-sizing: border-box;
  padding: 20px;
`;

export const JoinInput = styled.input`
  width: 80%;
  height: 40px;
  padding: 8px;
  box-sizing: border-box;
`;

export const JoinButton = styled.button`
  margin: 20px 5px 20px 5px;
  width: 100px;
  height: 40px;
  color: #fff;
  background-color: black;
  border: 1px solid black;
  border-radius: 5px;
`;
export const JoinDetailWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

export const JoinTextWrapper = styled.div`
  font-size: 25px;
  font-weight: 600;
  letter-spacing: -2;
  margin-bottom: 5px;
  margin-top: 10px;
`;
export const JoinStepWrapper = styled.div`
  display: inline-block;
  width: 60px;
  height: 25px;
  line-height: 25px;
  background: lightgrey;
  border-radius: 20px;
  font-weight: 700;
`;

export const JoinImgWrapper = styled.div`
  width: 158px;
  border: 1px solid lightgrey;
  border-radius: 5px;
  margin: auto;
  position: relative;
  margin-bottom: 20px;
`;

export const JoinImg = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: -1;
`;
