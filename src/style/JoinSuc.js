import styled from "styled-components";

export const JoinWrapper = styled.div`
  padding: 30px 0;
  display: flex;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const JoinSucWrapper = styled.div`
  width: 410px;
  max-width: 410px;
  border-radius: 10px;
  background: #fff;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const EmogiWrapper = styled.div`
  font-size: 50px;
  margin-top: 23px;
  padding: 5px;
`;
export const EmailEnter = styled.div`
  font-size: 25px;
  font-weight: 700;
  padding: 5px;
`;

export const EmailText = styled.div`
  font-size: 12px;
  color: gray;
`;

export const ButtonWrapper = styled.div`
  margin: 30px 0 30px 0;

  & button {
    width: 150px;
    height: 50px;
    border-radius: 10px;
    border: 1px solid lightgrey;
    background-color: lightgrey;
  }
`;
