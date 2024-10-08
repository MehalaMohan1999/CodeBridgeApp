import React from "react";
import AppLayout from "../../Layouts/AppLayout";
import { connect } from "react-redux";
import PositionsPage from "./PositionsPage";

const PositionProjectLayoutPage = (props) => {
  return (
    <AppLayout activeKey="positions" activeDropdown="user-management">
      <PositionsPage />
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

export default connect(mapState, mapDispatch)(PositionProjectLayoutPage);
