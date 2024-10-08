import React from "react";
import AppLayout from "../../Layouts/AppLayout";
import { connect } from "react-redux";
import CompanyAddressesPage from "./CompanyAddressesPage";

const CompanyAddressProjectLayoutPage = (props) => {
  return (
    <AppLayout activeKey="company-addresses" activeDropdown="company-management">
      <CompanyAddressesPage />
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

export default connect(mapState, mapDispatch)(CompanyAddressProjectLayoutPage);
