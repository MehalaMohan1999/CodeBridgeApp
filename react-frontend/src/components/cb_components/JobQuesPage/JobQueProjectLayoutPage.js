import React from "react";
import AppLayout from "../../Layouts/AppLayout";
import { connect } from "react-redux";
import JobQuesPage from "./JobQuesPage";

const JobQueProjectLayoutPage = (props) => {
  return (
    <AppLayout activeKey="job-ques" activeDropdown="data-management">
      <JobQuesPage />
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

export default connect(mapState, mapDispatch)(JobQueProjectLayoutPage);
