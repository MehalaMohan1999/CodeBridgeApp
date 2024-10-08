import React from "react";
import AppLayout from "../../Layouts/AppLayout";
import { connect } from "react-redux";
import UserAddressesPage from "./UserAddressesPage";

const UserAddressProjectLayoutPage = (props) => {
  return (
    <AppLayout activeKey="addresses" activeDropdown="user-management">
      <UserAddressesPage />
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

export default connect(mapState, mapDispatch)(UserAddressProjectLayoutPage);
