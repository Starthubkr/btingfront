import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { certification } from "../actions/useraction";

function Certification({ match }) {
  const dispatch = useDispatch();
  const { isMailCertificationDone } = useSelector((state) => state.user);

  useEffect(() => {
    if (match.params.email) {
      dispatch(certification({ data: { email: match.params.email } }));
    }
  }, [match.params.email, dispatch]);

  return (
    <div>
      {isMailCertificationDone ? <div>SUCCESS</div> : <div>Loading</div>}
    </div>
  );
}

export default Certification;
