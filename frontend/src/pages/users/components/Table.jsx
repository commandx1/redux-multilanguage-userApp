import React from "react";
import { useSelector } from "react-redux";
import { translations } from "../../../components/shared/translations";
import Spinner from "../../../components/Spinner/Spinner";
import classes from "./Table.module.scss";

const Table = ({ isLoading, clickedTable, location }) => {
  const { currentUser, users } = useSelector((state) => state);
  const { lang } = useSelector((state) => state);
  const { english, turkish, spanish } = translations;

  return users.length > 0 && !isLoading ? (
    <div className={classes.wrapper}>
      <table>
        <thead>
          <tr>
            <th>
              {lang === "en"
                ? english.users.name
                : lang === "tr"
                ? turkish.users.name
                : spanish.users.name}
            </th>
            <th>
              {lang === "en"
                ? english.users.username
                : lang === "tr"
                ? turkish.users.username
                : spanish.users.username}
            </th>
            <th>
              {lang === "en"
                ? english.users.email
                : lang === "tr"
                ? turkish.users.email
                : spanish.users.email}
            </th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 &&
            users.map((u) => (
              <tr
                style={
                  currentUser.id === u.id
                    ? {
                        background: "#212529",
                        color: "#fff",
                      }
                    : null
                }
                key={u.id}
                onClick={() => {
                  clickedTable(u, location);
                }}
              >
                <td
                  data-label={
                    lang === "en"
                      ? english.users.name
                      : lang === "tr"
                      ? turkish.users.name
                      : spanish.users.name
                  }
                >
                  <div>{u.name}</div>
                </td>
                <td
                  data-label={
                    lang === "en"
                      ? english.users.username
                      : lang === "tr"
                      ? turkish.users.username
                      : spanish.users.username
                  }
                >
                  <div>{u.username}</div>
                </td>
                <td
                  data-label={
                    lang === "en"
                      ? english.users.email
                      : lang === "tr"
                      ? turkish.users.email
                      : spanish.users.email
                  }
                >
                  <div>{u.email}</div>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  ) : (
    <Spinner />
  );
};

export default Table;
