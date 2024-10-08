import React from "react";
import { connect } from "react-redux";
import PermissionFieldsPage from "./PermissionFieldsPage";
import AppLayout from "../../Layouts/AppLayout";

const PermissionFieldProjectLayoutPage = (props) => {
  return (
    <AppLayout>
      <PermissionFieldsPage />
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

export default connect(mapState, mapDispatch)(PermissionFieldProjectLayoutPage);
