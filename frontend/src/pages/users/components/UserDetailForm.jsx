import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouteMatch } from "react-router";
import useHttpClient from "../../../hooks/useHttpClient";
import Spinner from "../../../components/Spinner/Spinner";
import Buttons from "./Buttons";
import InputGroup from "./InputGroup";
import { translations } from "../../../components/shared/translations";

const UserDetailForm = ({
  handleAddUserMode,
  fetchUser,
  formSubmitHandler,
  state,
  handleChange,
  isAddUserMode,
}) => {
  const { sendRequest, isLoading } = useHttpClient();
  const { currentUser, lang } = useSelector((state) => state);

  const dispatch = useDispatch();
  const route = useRouteMatch();
  const paramsId = route.params.id;

  const { english, turkish, spanish } = translations;

  useEffect(() => {
    handleAddUserMode(route);
  }, [route]);

  useEffect(() => {
    paramsId !== "new" && fetchUser(paramsId);
  }, [paramsId, sendRequest, dispatch]);

  return (
    <div className="mt-4">
      <h4 className="mb-4">
        {lang === "en"
          ? english.users.formHeader
          : lang === "tr"
          ? turkish.users.formHeader
          : spanish.users.formHeader}
      </h4>
      {(currentUser.id.length > 0 && !isLoading) || paramsId === "new" ? (
        <form onSubmit={(e) => formSubmitHandler(e, paramsId)}>
          {state.map((formEl) => (
            <InputGroup
              key={formEl.id}
              formEl={formEl}
              handleChange={handleChange}
            />
          ))}
          <Buttons isAddUserMode={isAddUserMode} />
        </form>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default UserDetailForm;
