import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { translations } from "../../../components/shared/translations";
import useHttpClient from "../../../hooks/useHttpClient";
import {
  addUser,
  fetchCurrentUser,
  fetchUsers,
  updateCurrentUser,
  updateUser,
} from "../../../store/actions/actions";

export const useHttpRequests = (initialState) => {
  const dispatch = useDispatch();
  const { lang } = useSelector((state) => state);
  const { english, turkish, spanish } = translations;
  const [state, setstate] = useState(initialState); //formElements state

  useEffect(() => {
    setstate([
      {
        ...state[0],
        label:
          lang === "en"
            ? english.users.name
            : lang === "tr"
            ? turkish.users.name
            : spanish.users.name,
      },
      {
        ...state[1],
        label:
          lang === "en"
            ? english.users.username
            : lang === "tr"
            ? turkish.users.username
            : spanish.users.username,
      },
      {
        ...state[2],
        label:
          lang === "en"
            ? english.users.email
            : lang === "tr"
            ? turkish.users.email
            : spanish.users.email,
      },
    ]);
  }, [lang]);

  const [isAddUserMode, setisAddUserMode] = useState(false);

  const { sendRequest } = useHttpClient();

  const fetchUser = async (paramsId) => {
    const response = await sendRequest(
      process.env.REACT_APP_BACKEND_URL + "/test/" + paramsId
    );
    setstate([
      { ...state[0], value: response.name },
      { ...state[1], value: response.username },
      { ...state[2], value: response.email },
    ]);
    dispatch(fetchCurrentUser(response));
    return response;
  };

  const handleChange = (event, id) => {
    const updatedFormElements = state.map((el) => {
      if (el.id === id) {
        if (event.target.value.length > 0) {
          return { ...el, value: event.target.value, class: "" };
        }
        return { ...el, value: event.target.value, class: "danger" };
      } else return el;
    });
    setstate(updatedFormElements);
  };

  const formSubmitHandler = async (e, paramsId) => {
    e.preventDefault();
    let isValid = true;
    let updatedFormElements = [];
    state.forEach((el) => {
      if (el.value.length < 1 && el.required) {
        isValid = false;
        updatedFormElements.push({ ...el, class: "danger" });
      } else {
        updatedFormElements.push({ ...el, class: "" });
      }
    });
    setstate(updatedFormElements);

    if (isValid) {
      if (isAddUserMode) {
        addNewUser();
      } else {
        patchUser(paramsId);
      }
    }
  };

  const patchUser = async (paramsId) => {
    const response = await sendRequest(
      process.env.REACT_APP_BACKEND_URL + "/test/" + paramsId,
      "PATCH",
      JSON.stringify({
        user: {
          name: state[0].value,
          username: state[1].value,
          email: state[2].value,
        },
      }),
      { "Content-Type": "application/json" }
    );
    handleValid();
    dispatch(updateUser(response));
    dispatch(updateCurrentUser(response));
  };

  const handleValid = () => {
    const updatedFormElements = state.map((formEl) => {
      return { ...formEl, class: "" };
    });
    setstate(updatedFormElements);
  };

  const resetFormElements = () => setstate(initialState);

  const addNewUser = async () => {
    const response = await sendRequest(
      process.env.REACT_APP_BACKEND_URL + "/test/",
      "POST",
      JSON.stringify({
        user: {
          id: Math.random().toString(),
          name: state[0].value,
          username: state[1].value,
          email: state[2].value,
        },
      }),
      { "Content-Type": "application/json" }
    );
    dispatch(addUser(response));
    resetFormElements();
  };

  const handleAddUserMode = (route) => {
    if (route.url.includes("new")) {
      setisAddUserMode(true);
    } else {
      setisAddUserMode(false);
    }
  };

  const fetchAllUsers = async () => {
    try {
      const response = await sendRequest(
        process.env.REACT_APP_BACKEND_URL + "/test"
      );
      dispatch(fetchUsers(response.users));
    } catch (error) {}
  };

  return {
    fetchUser,
    state,
    handleChange,
    formSubmitHandler,
    handleValid,
    patchUser,
    addNewUser,
    handleAddUserMode,
    isAddUserMode,
    resetFormElements,
    fetchAllUsers,
  };
};
