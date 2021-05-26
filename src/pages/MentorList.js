import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { initMentor, mentorList } from "../actions/mentoraction";
import { initUser } from "../actions/useraction";
import Footer from "../components/Footer";
import Mentor from "../components/Mentor";
import loadingbar from "../images/loadingbar.svg";

const ListWrapper = styled.div`
  padding-top: 90px;
`;

const Title = styled.h1`
  max-width: 1200px;
  margin: 0 auto;
  padding: 15px 0;
  font-size: 30px;
  font-weight: 400;
  color: #000;
  text-align: center;
  font-weight: 700;
`;

function MentorList() {
  const dispatch = useDispatch();
  const { isMentorListDone, mentorLists } = useSelector(
    (state) => state.mentor
  );

  useEffect(() => {
    dispatch(initUser());
    dispatch(initMentor());
    dispatch(mentorList());
  }, [dispatch]);

  return (
    <>
      {/* <Header /> */}
      <ListWrapper>
        <Title>멘토와의 만남</Title>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            width: "100%",
            maxWidth: "1200px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          {isMentorListDone ? (
            mentorLists.map((mentor, b) => (
              <Mentor mentor={mentor} key={mentor.id} />
            ))
          ) : (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <img src={loadingbar} alt={loadingbar} />
            </div>
          )}
        </div>
        <Footer />
      </ListWrapper>
    </>
  );
}

export default MentorList;
