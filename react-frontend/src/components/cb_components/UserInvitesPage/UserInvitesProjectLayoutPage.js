import React from "react";
import AppLayout from "../../Layouts/AppLayout";
import { connect } from "react-redux";
import UserInvitesPage from "./UserInvitesPage1";

const UserInvitesProjectLayoutPage = (props) => {
  return (
    <AppLayout activeKey="user-invites" activeDropdown="user-management">
      <UserInvitesPage />
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

export default connect(mapState, mapDispatch)(UserInvitesProjectLayoutPage);
