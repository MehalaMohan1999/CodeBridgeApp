import { Button } from "primereact/button";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link, useNavigate, useParams, useLocation } from "react-router-dom";
import client from "../../../services/restClient";
import { Tag } from "primereact/tag";
import moment from "moment";
import { InputText } from "primereact/inputtext";
import ProjectLayout from "../../Layouts/ProjectLayout";

import SectionsPage from "../SectionsPage/SectionsPage";
import ProfilesPage from "../ProfilesPage/ProfilesPage";

const SingleDepartmentsPage = (props) => {
  const navigate = useNavigate();
  const urlParams = useParams();
  const [_entity, set_entity] = useState();

  const [companyId, setCompanyId] = useState([]);

  useEffect(() => {
    //on mount
    client
      .service("departments")
      .get(urlParams.singleDepartmentsId, {
        query: {
          $populate: [
            {
              path: "createdBy",
              service: "users",
              select: ["name"],
            },
            {
              path: "updatedBy",
              service: "users",
              select: ["name"],
            },
            "companyId",
          ],
        },
      })
      .then((res) => {
        set_entity(res || {});
        const companyId = Array.isArray(res.companyId)
          ? res.companyId.map((elem) => ({ _id: elem._id, name: elem.name }))
          : res.companyId
            ? [{ _id: res.companyId._id, name: res.companyId.name }]
            : [];
        setCompanyId(companyId);
      })
      .catch((error) => {
        console.log({ error });
        props.alert({
          title: "Departments",
          type: "error",
          message: error.message || "Failed get departments",
        });
      });
  }, [props, urlParams.singleDepartmentsId]);

  const goBack = () => {
    navigate("/departments");
  };

  return (
    <ProjectLayout>
      <div className="col-12 flex flex-column align-items-center">
        <div className="col-10">
          <div className="flex align-items-center justify-content-start">
            <Button
              className="p-button-text"
              icon="pi pi-chevron-left"
              onClick={() => goBack()}
            />
            <h3 className="m-0">Departments</h3>
          </div>
          <p>departments/{urlParams.singleDepartmentsId}</p>
          {/* ~cb-project-dashboard~ */}
        </div>
        <div className="card w-full">
          <div className="grid ">
            <div className="col-12 md:col-6 lg:col-3">
              <label className="text-sm text-primary">Name</label>
              <p className="m-0 ml-3">{_entity?.name}</p>
            </div>
            <div className="col-12 md:col-6 lg:col-3">
              <label className="text-sm text-primary">Code</label>
              <p className="m-0 ml-3">{_entity?.code}</p>
            </div>
            <div className="col-12 md:col-6 lg:col-3">
              <label className="text-sm text-primary">Is default</label>
              <p className="m-0 ml-3">
                <i
                  id="isDefault"
                  className={`pi ${_entity?.isDefault ? "pi-check" : "pi-times"}`}
                ></i>
              </p>
            </div>
            <div className="col-12 md:col-6 lg:col-3">
              <label className="text-sm">Company</label>
              {companyId.map((elem) => (
                <Link key={elem._id} to={`/companies/${elem._id}`}>
                  <div className="card">
                    <p className="text-xl text-primary">{elem.name}</p>
                  </div>
                </Link>
              ))}
            </div>

            <div className="col-12">&nbsp;</div>
          </div>
        </div>
      </div>
      <SectionsPage />
      <ProfilesPage />
    </ProjectLayout>
  );
};

const mapState = (state) => {
  const { user, isLoggedIn } = state.auth;
  return { user, isLoggedIn };
};

const mapDispatch = (dispatch) => ({
  alert: (data) => dispatch.toast.alert(data),
});

export default connect(mapState, mapDispatch)(SingleDepartmentsPage);
