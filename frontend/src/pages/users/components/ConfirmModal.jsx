import React from "react";
import Modal from "../../../components/modal/Modal";
import { useSelector } from "react-redux";
import { translations } from "../../../components/shared/translations";

const ConfirmModal = ({ goNext, open, close }) => {
  const lang = useSelector((state) => state.lang);
  const { english, turkish, spanish } = translations;
  return (
    <Modal open={open} closeModal={close}>
      <h4>
        {lang === "en"
          ? english.users.modalContent
          : lang === "tr"
          ? turkish.users.modalContent
          : spanish.users.modalContent}
      </h4>
      <div className="row mt-3">
        <div className="ml-auto col-sm-3">
          <button className="w-100 btn btn-success" onClick={goNext}>
            {lang === "en"
              ? english.users.yes
              : lang === "tr"
              ? turkish.users.yes
              : spanish.users.yes}
          </button>
        </div>
        <div className="col-sm-3 mt-2 mt-sm-0">
          <button className="w-100 btn btn-outline-dark" onClick={close}>
            {lang === "en"
              ? english.users.no
              : lang === "tr"
              ? turkish.users.no
              : spanish.users.no}
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default ConfirmModal;
