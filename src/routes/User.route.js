import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "../components/Header";
import Join from "../pages/Join";
import Joinsuc from "../pages/Joinsuc";
import Login from "../pages/Login";
import Certification from "../pages/Certification";
import Main from "../pages/Main";
import MentorCreate from "../pages/MentorCreate";
import MentorList from "../pages/MentorList";
import MentorDetail from "../pages/MentorDetail";
import { useEffect } from "react";
import { userCheck } from "../actions/useraction";
import { useDispatch } from "react-redux";
import MentorUpdate from "../pages/MentorUpdate";

function User() {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(userCheck());
  // }, [dispatch]);
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/join" component={Join} />
        <Route exact path="/joinsuc" component={Joinsuc} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/mentor" component={MentorList} />
        <Route exact path="/mentorcreate" component={MentorCreate} />
        <Route exact path="/certification/:email" component={Certification} />
        <Route exact path="/mentordetail/:mentorid" component={MentorDetail} />
        <Route exact path="/mentorupdate" component={MentorUpdate} />
      </Switch>
    </>
  );
}

export default User;
