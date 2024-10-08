import React from "react";
import AppLayout from "../../Layouts/AppLayout";
import { connect } from "react-redux";
import UserPhonesPage from "./UserPhonesPage";

const UserPhoneProjectLayoutPage = (props) => {
  return (
    <AppLayout activeKey="phones" activeDropdown="user-management">
      <UserPhonesPage />
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

export default connect(mapState, mapDispatch)(UserPhoneProjectLayoutPage);
