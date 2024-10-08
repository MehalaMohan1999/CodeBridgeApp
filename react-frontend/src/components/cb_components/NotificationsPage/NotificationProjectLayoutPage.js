import React from "react";
import AppLayout from "../../Layouts/AppLayout";
import { connect } from "react-redux";
import NotificationsPage from "./NotificationsPage";

const NotificationProjectLayoutPage = (props) => {
  return (
    <AppLayout activeKey="notifications" activeDropdown="messaging">
      <NotificationsPage />
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

export default connect(mapState, mapDispatch)(NotificationProjectLayoutPage);
