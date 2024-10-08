import React from "react";
import AppLayout from "../../Layouts/AppLayout";
import { connect } from "react-redux";
import StaffinfoPage from "./StaffinfoPage";

const StaffinfoProjectLayoutPage = (props) => {
  return (
    <AppLayout activeKey="staff-info" activeDropdown="data-management">
      <StaffinfoPage />
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

export default connect(mapState, mapDispatch)(StaffinfoProjectLayoutPage);
