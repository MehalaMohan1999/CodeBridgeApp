import React from "react";
import AppLayout from "../../Layouts/AppLayout";
import { connect } from "react-redux";
import TestsPage from "./TestsPage";

const TestProjectLayoutPage = (props) => {
  return (
    <AppLayout activeKey="testing-job-tasks" activeDropdown="admin-controls">
      <TestsPage />
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

export default connect(mapState, mapDispatch)(TestProjectLayoutPage);
