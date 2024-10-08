import React from "react";
import AppLayout from "../../Layouts/AppLayout";
import { connect } from "react-redux";
import RolesPage from "./RolesPage";

const RoleProjectLayoutPage = (props) => {
  return (
    <AppLayout activeKey="roles" activeDropdown="user-management">
      <RolesPage />
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

export default connect(mapState, mapDispatch)(RoleProjectLayoutPage);
