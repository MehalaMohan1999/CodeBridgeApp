import React from "react";
import AppLayout from "../../Layouts/AppLayout";
import { connect } from "react-redux";
import DynaFieldsPage from "./DynaFieldsPage";

const DynaFieldProjectLayoutPage = (props) => {
  return (
    <AppLayout activeKey="dyna-loader" activeDropdown="data-management">
      <DynaFieldsPage />
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

export default connect(mapState, mapDispatch)(DynaFieldProjectLayoutPage);
