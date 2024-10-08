import React from "react";
import AppLayout from "../../Layouts/AppLayout";
import { connect } from "react-redux";
import EmployeesPage from "./EmployeesPage";

const EmployeeProjectLayoutPage = (props) => {
  return (
    <AppLayout activeKey="employees" activeDropdown="user-management">
      <EmployeesPage />
    </AppLayout>
  );
};

const mapState = (state) => {
  const { user, isLoggedIn } = state.auth;
  return { user, isLoggedIn };
};

const mapDispatch = (dispatch) => ({
  alert: (data) => dispatch.toast.alert(data),
});

export default connect(mapState, mapDispatch)(EmployeeProjectLayoutPage);
