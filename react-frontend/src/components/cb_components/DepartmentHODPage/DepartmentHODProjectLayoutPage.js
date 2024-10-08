import React from "react";
import AppLayout from "../../Layouts/AppLayout";
import { connect } from "react-redux";
import DepartmentHODPage from "./DepartmentHODPage";

const DepartmentHODProjectLayoutPage = (props) => {
  return (
    <AppLayout activeKey="head-of-department" activeDropdown="admin-controls">
      <DepartmentHODPage />
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

export default connect(mapState, mapDispatch)(DepartmentHODProjectLayoutPage);
