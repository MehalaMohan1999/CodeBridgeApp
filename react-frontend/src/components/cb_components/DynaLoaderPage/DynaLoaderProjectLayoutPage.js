import React from "react";
import AppLayout from "../../Layouts/AppLayout";
import { connect } from "react-redux";
import DynaLoaderPage from "./DynaLoaderPage1";

const DynaLoaderProjectLayoutPage = (props) => {
  return (
    <AppLayout>
      <DynaLoaderPage />
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

export default connect(mapState, mapDispatch)(DynaLoaderProjectLayoutPage);
