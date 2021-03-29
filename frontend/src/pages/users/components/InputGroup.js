import { useSelector } from "react-redux";
import { translations } from "../../../components/shared/translations";

const InputGroup = ({ formEl, handleChange }) => {
  const lang = useSelector((state) => state.lang);
  const { english, turkish, spanish } = translations;

  return (
    <div className="row align-items-center mb-3">
      <div className="col-3">
        <label className="mb-0">{formEl.label}</label>
      </div>
      <div className="col-9">
        <input
          placeholder={formEl.label}
          value={formEl.value}
          onChange={(e) => handleChange(e, formEl.id)}
          type="text"
          className={`form-control border-${formEl.class}`}
        />
        {formEl.class && (
          <div className={"mt-1 text-" + formEl.class}>
            {lang === "en"
              ? english.users.inputRequired(formEl.label.toLowerCase())
              : lang === "tr"
              ? turkish.users.inputRequired(formEl.label.toLowerCase())
              : spanish.users.inputRequired(formEl.label.toLowerCase())}
          </div>
        )}
      </div>
    </div>
  );
};

export default InputGroup;
