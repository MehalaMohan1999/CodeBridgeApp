import React from "react";
import AppLayout from "../../Layouts/AppLayout";
import { connect } from "react-redux";
import PermissionServicesPage from "./PermissionServicesPage";

const PermissionServiceProjectLayoutPage = (props) => {
  return (
    <AppLayout activeKey="service-permissions" activeDropdown="admin-controls">
      <PermissionServicesPage />
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

export default connect(
  mapState,
  mapDispatch,
)(PermissionServiceProjectLayoutPage);
