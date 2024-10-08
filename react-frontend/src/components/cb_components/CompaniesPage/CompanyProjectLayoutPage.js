import React from "react";
import AppLayout from "../../Layouts/AppLayout";
import { connect } from "react-redux";
import CompaniesPage from "./CompaniesPage";

const CompanyProjectLayoutPage = (props) => {
  return (
    <AppLayout activeKey="companies" activeDropdown="company-management">
      <CompaniesPage />
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

export default connect(mapState, mapDispatch)(CompanyProjectLayoutPage);
