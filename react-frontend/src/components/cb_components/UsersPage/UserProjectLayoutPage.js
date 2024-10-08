import React from "react";
import AppLayout from "../../Layouts/AppLayout";
import { connect } from "react-redux";
import UsersPage from "./UsersPage";

const UserProjectLayoutPage = (props) => {
  return (
    <AppLayout activeKey="users" activeDropdown="user-management">
      <UsersPage />
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

export default connect(mapState, mapDispatch)(UserProjectLayoutPage);
