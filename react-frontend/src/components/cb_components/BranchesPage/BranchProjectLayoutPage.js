import React from "react";
import AppLayout from "../../Layouts/AppLayout";
import { connect } from "react-redux";
import BranchesPage from "./BranchesPage";

const BranchProjectLayoutPage = (props) => {
  return (
    <AppLayout activeKey="branches" activeDropdown="company-management">
      <BranchesPage />
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

export default connect(mapState, mapDispatch)(BranchProjectLayoutPage);
