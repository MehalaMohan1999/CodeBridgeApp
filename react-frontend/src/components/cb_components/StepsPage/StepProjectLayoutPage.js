import React from "react";
import { connect } from "react-redux";
import StepsPage from "./StepsPage";
import AppLayout from "../../Layouts/AppLayout";

const StepProjectLayoutPage = (props) => {
  return (
    <AppLayout>
      <StepsPage />
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

export default connect(mapState, mapDispatch)(StepProjectLayoutPage);
