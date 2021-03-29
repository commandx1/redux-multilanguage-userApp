import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateLang } from "../../store/actions/actions";
import { translations } from "./translations";

const SelectField = () => {
  const { lang } = useSelector((state) => state);
  const dispatch = useDispatch();

  const { english, turkish, spanish } = translations;

  return (
    <div className="d-flex align-items-center justify-content-end ml-auto">
      <label htmlFor="lang" className="mb-0 mr-3">
        {lang === "en"
          ? english.menu.language
          : lang === "tr"
          ? turkish.menu.language
          : spanish.menu.language}
        :{" "}
      </label>
      <select
        className="form-control"
        name="lang"
        id="lang"
        value={lang}
        onChange={(e) => {
          dispatch(updateLang(e.target.value));
        }}
      >
        <option value="en">English</option>
        <option value="tr">Türkçe</option>
        <option value="es">Español</option>
      </select>
    </div>
  );
};

export default SelectField;
