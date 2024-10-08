import React from "react";
import AppLayout from "../../Layouts/AppLayout";
import { connect } from "react-redux";
import DepartmentAdminPage from "./DepartmentAdminPage";

const DepartmentAdminProjectLayoutPage = (props) => {
  return (
    <AppLayout activeKey="department-admin" activeDropdown="admin-controls">
      <DepartmentAdminPage />
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

export default connect(mapState, mapDispatch)(DepartmentAdminProjectLayoutPage);
