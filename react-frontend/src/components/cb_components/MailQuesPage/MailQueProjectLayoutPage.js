import React from "react";
import AppLayout from "../../Layouts/AppLayout";
import { connect } from "react-redux";
import MailQuesPage from "./MailQuesPage1";

const MailQueProjectLayoutPage = (props) => {
  return (
    <AppLayout activeKey="mail-job-ques" activeDropdown="messaging">
      <MailQuesPage />
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

export default connect(mapState, mapDispatch)(MailQueProjectLayoutPage);
