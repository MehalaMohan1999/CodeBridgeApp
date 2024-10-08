import React from "react";
import AppLayout from "../../Layouts/AppLayout";
import { connect } from "react-redux";
import ProfilesPage from "./ProfilesPage";

const ProfileProjectLayoutPage = (props) => {
  return (
    <AppLayout activeKey="Profiles" activeDropdown="user-management">
      <ProfilesPage />
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

export default connect(mapState, mapDispatch)(ProfileProjectLayoutPage);
