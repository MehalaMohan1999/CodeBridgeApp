import { Button } from "primereact/button";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link, useNavigate, useParams, useLocation } from "react-router-dom";
import client from "../../../services/restClient";
import { Tag } from "primereact/tag";
import moment from "moment";
import { InputText } from "primereact/inputtext";
import ProjectLayout from "../../Layouts/ProjectLayout";

const SingleCompanyPhonesPage = (props) => {
  const navigate = useNavigate();
  const urlParams = useParams();
  const [_entity, set_entity] = useState();

  const [companyId, setCompanyId] = useState([]);

  useEffect(() => {
    //on mount
    client
      .service("companyPhones")
      .get(urlParams.singleCompanyPhonesId, {
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
          title: "CompanyPhones",
          type: "error",
          message: error.message || "Failed get companyPhones",
        });
      });
  }, [props, urlParams.singleCompanyPhonesId]);

  const goBack = () => {
    navigate("/companyPhones");
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
            <h3 className="m-0">Company Phones</h3>
          </div>
          <p>companyPhones/{urlParams.singleCompanyPhonesId}</p>
          {/* ~cb-project-dashboard~ */}
        </div>
        <div className="card w-full">
          <div className="grid ">
            <div className="col-12 md:col-6 lg:col-3">
              <label className="text-sm text-primary">Country code</label>
              <p id="countryCode" className="m-0">
                {_entity?.countryCode}
              </p>
            </div>
            <div className="col-12 md:col-6 lg:col-3">
              <label className="text-sm text-primary">Operator code</label>
              <p id="operatorCode" className="m-0">
                {_entity?.operatorCode}
              </p>
            </div>
            <div className="col-12 md:col-6 lg:col-3">
              <label className="text-sm text-primary">Number</label>
              <p id="number" className="m-0">
                {_entity?.number}
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

export default connect(mapState, mapDispatch)(SingleCompanyPhonesPage);
