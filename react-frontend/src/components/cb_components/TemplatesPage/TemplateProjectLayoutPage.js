import React from "react";
import AppLayout from "../../Layouts/AppLayout";
import { connect } from "react-redux";
import TemplatesPage from "./TemplatesPage";

const TemplateProjectLayoutPage = (props) => {
  return (
    <AppLayout activeKey="email-templates" activeDropdown="messaging">
      <TemplatesPage />
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

export default connect(mapState, mapDispatch)(TemplateProjectLayoutPage);
