import React from "react";
import ProjectLayout from "../../Layouts/ProjectLayout";
import { connect } from "react-redux";import AppLayout from "../../Layouts/AppLayout";
import ErrorsPage from "./ErrorsPage";

const ErrorProjectLayoutPage = (props) => {
  return (
    <AppLayout>
      <ErrorsPage />
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

export default connect(mapState, mapDispatch)(ErrorProjectLayoutPage);
