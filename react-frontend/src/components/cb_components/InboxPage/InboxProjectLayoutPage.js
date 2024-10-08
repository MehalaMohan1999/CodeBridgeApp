import React from "react";
import AppLayout from "../../Layouts/AppLayout";
import { connect } from "react-redux";
import InboxPage from "./InboxPage";

const InboxProjectLayoutPage = (props) => {
  return (
    <AppLayout>
      <InboxPage />
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

export default connect(mapState, mapDispatch)(InboxProjectLayoutPage);
