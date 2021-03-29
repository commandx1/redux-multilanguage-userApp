import { useEffect } from "react";
import { Route, useHistory, useLocation } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { deleteCurrentUser } from "../../store/actions/actions";
import useHttpClient from "../../hooks/useHttpClient";

import PageHeader from "../../components/shared/PageHeader";
import UserDetailForm from "./components/UserDetailForm";
import Table from "./components/Table";
import ConfirmModal from "./components/ConfirmModal";

import "./users.scss";
import { useHttpRequests } from "./hooks/useHttpRequests";
import { useChangePage } from "./hooks/useChangePage";
import { translations } from "../../components/shared/translations";

const Users = () => {
  const { lang } = useSelector((state) => state);

  const { english, turkish, spanish } = translations;

  const initialFormElements = [
    {
      id: 1,
      label:
        lang === "en"
          ? english.users.name
          : lang === "tr"
          ? turkish.users.name
          : spanish.users.name,
      required: true,
      value: "",
      class: "",
    },
    {
      id: 2,
      label:
        lang === "en"
          ? english.users.username
          : lang === "tr"
          ? turkish.users.username
          : spanish.users.username,
      required: true,
      value: "",
      class: "",
    },
    {
      id: 3,
      label:
        lang === "en"
          ? english.users.email
          : lang === "tr"
          ? turkish.users.email
          : spanish.users.email,
      required: false,
      value: "",
    },
  ];

  const { sendRequest, isLoading } = useHttpClient();
  const {
    state,
    resetFormElements,
    fetchUser,
    handleChange,
    formSubmitHandler,
    handleAddUserMode,
    isAddUserMode,
    fetchAllUsers,
    handleValid,
  } = useHttpRequests(initialFormElements);

  const {
    closeLeaveFromNewModal,
    closeLeaveFromUpdateModal,
    link,
    leaveFromNew,
    leaveFromUpdate,
    addNewUser,
    clickedTable,
  } = useChangePage(state, handleValid, resetFormElements);

  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    fetchAllUsers();
  }, [sendRequest, dispatch]);

  const goToNewPage = () => {
    dispatch(deleteCurrentUser());
    resetFormElements();
    closeLeaveFromUpdateModal();
    history.push("/users/new");
  };

  const goToUserPage = () => {
    closeLeaveFromNewModal();
    history.push(link);
  };

  return (
    <div className="users">
      <PageHeader users />
      <ConfirmModal
        open={leaveFromUpdate}
        close={closeLeaveFromUpdateModal}
        goNext={goToNewPage}
      />
      <ConfirmModal
        open={leaveFromNew}
        close={closeLeaveFromNewModal}
        goNext={goToUserPage}
      />
      <div className="d-flex align-items-center justify-content-between mt-4">
        <h4 className="mb-0">
          {lang === "en"
            ? english.menu.users
            : lang === "tr"
            ? turkish.menu.users
            : spanish.menu.users}
        </h4>
        <button className="btn btn-primary px-4" onClick={addNewUser}>
          {lang === "en"
            ? english.users.new
            : lang === "tr"
            ? turkish.users.new
            : spanish.users.new}
        </button>
      </div>
      <Table
        isLoading={isLoading}
        clickedTable={clickedTable}
        location={location}
      />
      <Route path="/users/:id">
        <UserDetailForm
          handleAddUserMode={handleAddUserMode}
          fetchUser={fetchUser}
          formSubmitHandler={formSubmitHandler}
          state={state}
          handleChange={handleChange}
          isAddUserMode={isAddUserMode}
        />
      </Route>
    </div>
  );
};

export default Users;
