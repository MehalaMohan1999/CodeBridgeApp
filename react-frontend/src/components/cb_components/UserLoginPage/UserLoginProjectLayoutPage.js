import React from "react";
import AppLayout from "../../Layouts/AppLayout";
import { connect } from "react-redux";
import UserLoginPage from "./UserLoginPage1";

const UserLoginProjectLayoutPage = (props) => {
  return (
    <AppLayout activeKey="user-logins" activeDropdown="user-management">
      <UserLoginPage />
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

export default connect(mapState, mapDispatch)(UserLoginProjectLayoutPage);
