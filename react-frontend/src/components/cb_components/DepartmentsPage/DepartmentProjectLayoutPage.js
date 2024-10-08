import React from "react";
import AppLayout from "../../Layouts/AppLayout";
import { connect } from "react-redux";
import DepartmentsPage from "./DepartmentsPage";

const DepartmentProjectLayoutPage = (props) => {
  return (
    <AppLayout activeKey="departments" activeDropdown="company-management">
      <DepartmentsPage />
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

export default connect(mapState, mapDispatch)(DepartmentProjectLayoutPage);
