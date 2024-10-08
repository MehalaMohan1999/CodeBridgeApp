import React from "react";
import AppLayout from "../../Layouts/AppLayout";
import { connect } from "react-redux";
import SectionsPage from "./SectionsPage";

const SectionProjectLayoutPage = (props) => {
  return (
    <AppLayout activeKey="sections" activeDropdown="company-management">
      <SectionsPage />
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

export default connect(mapState, mapDispatch)(SectionProjectLayoutPage);
