import React from "react";
import AppLayout from "../../Layouts/AppLayout";
import { connect } from "react-redux";
import DepartmentHOSPage from "./DepartmentHOSPage";

const DepartmentHOProjectLayoutPage = (props) => {
  return (
    <AppLayout activeKey="haed-of-section" activeDropdown="admin-controls">
      <DepartmentHOSPage />
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

export default connect(mapState, mapDispatch)(DepartmentHOProjectLayoutPage);
