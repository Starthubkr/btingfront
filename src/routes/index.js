import React from "react";
import { Switch, Route } from "react-router-dom";
import User from "./User.route";

function Routers() {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(userCheck());
  // }, [dispatch]);
  return (
    <>
      <Switch>
        <Route path="/" component={User} />
      </Switch>
    </>
  );
}

export default Routers;
