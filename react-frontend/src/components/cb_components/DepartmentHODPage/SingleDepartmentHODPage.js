import { Button } from "primereact/button";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import client from "../../../services/restClient";
import { Tag } from "primereact/tag";
import moment from "moment";
import { InputText } from "primereact/inputtext";
import ProjectLayout from "../../Layouts/ProjectLayout";

const SingleDepartmentHODPage = (props) => {
  const navigate = useNavigate();
  const urlParams = useParams();
  const [_entity, set_entity] = useState();

  const [departmentId, setDepartmentId] = useState([]);
  const [employeeId, setEmployeeId] = useState([]);

  useEffect(() => {
    //on mount
    client
      .service("departmentHOD")
      .get(urlParams.singleDepartmentHODId, {
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
            "departmentId",
            "employeeId",
          ],
        },
      })
      .then((res) => {
        set_entity(res || {});
        const departmentId = Array.isArray(res.departmentId)
          ? res.departmentId.map((elem) => ({ _id: elem._id, name: elem.name }))
          : res.departmentId
            ? [{ _id: res.departmentId._id, name: res.departmentId.name }]
            : [];
        setDepartmentId(departmentId);
        const employeeId = Array.isArray(res.employeeId)
          ? res.employeeId.map((elem) => ({ _id: elem._id, name: elem.name }))
          : res.employeeId
            ? [{ _id: res.employeeId._id, name: res.employeeId.name }]
            : [];
        setEmployeeId(employeeId);
      })
      .catch((error) => {
        console.log({ error });
        props.alert({
          title: "DepartmentHOD",
          type: "error",
          message: error.message || "Failed get departmentHOD",
        });
      });
  }, [props, urlParams.singleDepartmentHODId]);

  const goBack = () => {
    navigate("/departmentHOD");
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
            <h3 className="m-0">DepartmentHOD</h3>
          </div>
          <p>departmentHOD/{urlParams.singleDepartmentHODId}</p>
          {/* ~cb-project-dashboard~ */}
        </div>
        <div className="card w-full">
          <div className="grid ">
            <div className="col-12 md:col-6 lg:col-3">
              <label className="text-sm">DepartmentId</label>
              {departmentId.map((elem) => (
                <Link key={elem._id} to={`/departments/${elem._id}`}>
                  <div className="card">
                    <p className="text-xl text-primary">{elem.name}</p>
                  </div>
                </Link>
              ))}
            </div>
            <div className="col-12 md:col-6 lg:col-3">
              <label className="text-sm">EmployeeId</label>
              {employeeId.map((elem) => (
                <Link key={elem._id} to={`/employees/${elem._id}`}>
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

export default connect(mapState, mapDispatch)(SingleDepartmentHODPage);
