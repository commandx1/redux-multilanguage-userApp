import {
  FETCH_CURRENT_USER,
  FETCH_USERS,
  DELETE_CURRENT_USER,
  DELETE_USERS,
  ADD_USER,
  UPDATE_USER,
  UPDATE_CURRENT_USER,
  UPDATE_LANG,
} from "../types";

export const fetchUsers = (users) => {
  return {
    type: FETCH_USERS,
    payload: users,
  };
};

export const fetchCurrentUser = (user) => {
  return {
    type: FETCH_CURRENT_USER,
    payload: user,
  };
};

export const deleteCurrentUser = () => {
  return {
    type: DELETE_CURRENT_USER,
  };
};

export const updateCurrentUser = (user) => {
  return {
    type: UPDATE_CURRENT_USER,
    payload: user,
  };
};

export const deleteUsers = () => {
  return {
    type: DELETE_USERS,
  };
};

export const addUser = (user) => {
  return {
    type: ADD_USER,
    payload: user,
  };
};

export const updateUser = (user) => {
  return {
    type: UPDATE_USER,
    payload: user,
  };
};

export const updateLang = (lang) => {
  return {
    type: UPDATE_LANG,
    payload: lang,
  };
};
