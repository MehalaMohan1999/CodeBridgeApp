import React from "react";
import AppLayout from "../../Layouts/AppLayout";
import { connect } from "react-redux";
import MailWHPage from "./MailWHPage1";

const MailWHProjectLayoutPage = (props) => {
  return (
    <AppLayout activeKey="mail-warehouse" activeDropdown="messaging">
      <MailWHPage />
    </AppLayout>
  );
};

const mapState = (state) => {
  const { user, isLoggedIn } = state.auth;
  return { user, isLoggedIn };
};

const mapDispatch = (dispatch) => ({
  alert: (data) => dispatch.toast.alert(data),
});

export default connect(mapState, mapDispatch)(MailWHProjectLayoutPage);
