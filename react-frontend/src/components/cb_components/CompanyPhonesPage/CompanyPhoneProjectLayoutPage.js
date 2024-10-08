import React from "react";
import AppLayout from "../../Layouts/AppLayout";
import { connect } from "react-redux";
import CompanyPhonesPage from "./CompanyPhonesPage";

const CompanyPhoneProjectLayoutPage = (props) => {
  return (
    <AppLayout activeKey="company-phones" activeDropdown="company-management">
      <CompanyPhonesPage />
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

export default connect(mapState, mapDispatch)(CompanyPhoneProjectLayoutPage);
