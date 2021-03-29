import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { deleteCurrentUser } from "../../../store/actions/actions";

export const useChangePage = (formElements, handleValid, resetFormElements) => {
  const [leaveFromUpdate, setLeaveFromUpdate] = useState(false);
  const [leaveFromNew, setLeaveFromNew] = useState(false);
  const [link, setLink] = useState("");
  const history = useHistory();
  const { currentUser } = useSelector((state) => state);
  const dispatch = useDispatch();

  const closeLeaveFromUpdateModal = () => {
    setLeaveFromUpdate(false);
  };

  const closeLeaveFromNewModal = () => {
    setLeaveFromNew(false);
  };

  const addNewUser = () => {
    if (
      currentUser.id.length > 0 &&
      (currentUser.name !== formElements[0].value ||
        currentUser.username !== formElements[1].value ||
        currentUser.email !== formElements[2].value)
    ) {
      setLeaveFromUpdate(true);
    } else {
      resetFormElements();
      dispatch(deleteCurrentUser());
      history.push("/users/new");
    }
  };

  const clickedTable = (u, location) => {
    const link = "/users/" + u.id + "?username=" + u.username;

    if (
      location.pathname.includes("new") &&
      (formElements[0].value.length > 0 ||
        formElements[1].value.length > 0 ||
        formElements[2].value.length > 0)
    ) {
      setLeaveFromNew(true);
      setLink(link);
    } else {
      handleValid();
      history.push(link);
    }
  };

  return {
    addNewUser,
    clickedTable,
    closeLeaveFromNewModal,
    closeLeaveFromUpdateModal,
    link,
    leaveFromNew,
    leaveFromUpdate,
  };
};
