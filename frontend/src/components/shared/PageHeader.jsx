import React from "react";
import { useSelector } from "react-redux";
import Navigation from "./Navigation";
import SelectField from "./SelectField";
import { translations } from "./translations";

const PageHeader = ({ users }) => {
  const { lang } = useSelector((state) => state);

  const { english, turkish, spanish } = translations;

  return (
    <div>
      <p className="page-header">
        {users && lang === "en"
          ? english.users.header
          : users && lang === "tr"
          ? turkish.users.header
          : users
          ? spanish.users.header
          : lang === "en"
          ? english.home.header
          : lang === "tr"
          ? turkish.home.header
          : spanish.home.header}
      </p>
      <SelectField />
      <Navigation users={users} />
    </div>
  );
};

export default PageHeader;
