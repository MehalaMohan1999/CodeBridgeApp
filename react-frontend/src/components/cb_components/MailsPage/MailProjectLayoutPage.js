import React from "react";
import AppLayout from "../../Layouts/AppLayout";
import { connect } from "react-redux";
import MailsPage from "./MailsPage";

const MailProjectLayoutPage = (props) => {
  return (
    <AppLayout>
      <MailsPage />
    </AppLayout>
  );
};

const mapState = (state) => {
  const { user, isLoggedIn } = state.auth;
  const { selectedUser } = state.user;
  return { user, isLoggedIn, selectedUser };
};

const mapDispatch = (dispatch) => ({
  alert: (data) => dispatch.toast.alert(data),
});

export default connect(mapState, mapDispatch)(MailProjectLayoutPage);
