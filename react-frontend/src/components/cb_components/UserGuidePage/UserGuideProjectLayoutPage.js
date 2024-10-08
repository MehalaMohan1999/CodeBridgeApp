import React from "react";
import { connect } from "react-redux";
import UserGuidePage from "./UserGuidePage";
import AppLayout from "../../Layouts/AppLayout";

const UserGuideProjectLayoutPage = (props) => {
  return (
    <AppLayout>
      <UserGuidePage />
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

export default connect(mapState, mapDispatch)(UserGuideProjectLayoutPage);
