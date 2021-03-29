import React from "react";
import { useSelector } from "react-redux";
import { translations } from "../../../components/shared/translations";

const Buttons = ({ isAddUserMode }) => {
  const lang = useSelector((state) => state.lang);
  const { english, turkish, spanish } = translations;

  return (
    <div className="row justify-content-end mt-3">
      <div className="col-sm-3">
        {isAddUserMode ? (
          <button className="btn btn-primary w-100">
            {lang === "en"
              ? english.users.add
              : lang === "tr"
              ? turkish.users.add
              : spanish.users.add}
          </button>
        ) : (
          <button className="btn btn-success w-100">
            {lang === "en"
              ? english.users.save
              : lang === "tr"
              ? turkish.users.save
              : spanish.users.save}
          </button>
        )}
      </div>
    </div>
  );
};

export default Buttons;
