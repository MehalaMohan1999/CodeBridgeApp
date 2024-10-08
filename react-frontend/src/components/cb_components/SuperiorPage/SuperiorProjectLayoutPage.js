import React from "react";
import AppLayout from "../../Layouts/AppLayout";
import { connect } from "react-redux";
import SuperiorPage from "./SuperiorPage";

const SuperiorProjectLayoutPage = (props) => {
  return (
    <AppLayout activeKey="superiors" activeDropdown="user-management">
      <SuperiorPage />
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

export default connect(mapState, mapDispatch)(SuperiorProjectLayoutPage);
