import React from "react";
import { connect } from "react-redux";
import UserChangePasswordPage from "./UserChangePasswordPage";
import AppLayout from "../../Layouts/AppLayout";

const UserChangePasswordProjectLayoutPage = (props) => {
  return (
    <AppLayout>
      <UserChangePasswordPage />
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

export default connect(
  mapState,
  mapDispatch,
)(UserChangePasswordProjectLayoutPage);
