import { Button } from "primereact/button";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link, useNavigate, useParams, useLocation } from "react-router-dom";
import client from "../../../services/restClient";
import { Tag } from "primereact/tag";
import moment from "moment";
import { InputText } from "primereact/inputtext";
import ProjectLayout from "../../Layouts/ProjectLayout";

const SingleTemplatesPage = (props) => {
  const navigate = useNavigate();
  const urlParams = useParams();
  const [_entity, set_entity] = useState();

  useEffect(() => {
    //on mount
    client
      .service("templates")
      .get(urlParams.singleTemplatesId)
      .then((res) => {
        set_entity(res || {});
      })
      .catch((error) => {
        console.log({ error });
        props.alert({
          title: "Templates",
          type: "error",
          message: error.message || "Failed get templates",
        });
      });
  }, [props, urlParams.singleTemplatesId]);

  const goBack = () => {
    navigate("/templates");
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
            <h3 className="m-0">Templates</h3>
          </div>
          <p>templates/{urlParams.singleTemplatesId}</p>
          {/* ~cb-project-dashboard~ */}
        </div>
        <div className="card w-full">
          <div className="grid ">
            <div className="col-12 md:col-6 lg:col-3">
              <label className="text-sm text-primary">Name</label>
              <p className="m-0 ml-3">{_entity?.name}</p>
            </div>
            <div className="col-12 md:col-6 lg:col-3">
              <label className="text-sm text-primary">Subject</label>
              <p className="m-0 ml-3">{_entity?.subject}</p>
            </div>
            <div className="col-12 md:col-6 lg:col-3">
              <label className="text-sm text-primary">Body</label>
              <p
                className="m-0 ml-3"
                dangerouslySetInnerHTML={{ __html: _entity?.body }}
              ></p>
            </div>
            <div className="col-12 md:col-6 lg:col-3">
              <label className="text-sm text-primary">Variables</label>
              <p
                className="m-0 ml-3"
                dangerouslySetInnerHTML={{
                  __html: _entity?.variables?.map(
                    (v) => `<span className="col">${v}</span>`,
                  ),
                }}
              ></p>
            </div>
            <div className="col-12 md:col-6 lg:col-3">
              <label className="text-sm text-primary">Image</label>
              <p>
                <img
                  id="image"
                  src={_entity?.image}
                  className="m-0 ml-3"
                  width={300}
                />
              </p>
            </div>

            <div className="col-12">&nbsp;</div>
            <div className="col-12 md:col-6 lg:col-3">
              <Tag value="created At:"></Tag>
              <p className="m-0 ml-3">{moment(_entity?.createdAt).fromNow()}</p>
            </div>

            <div className="col-12 md:col-6 lg:col-3">
              <Tag value="updated At:"></Tag>
              <p className="m-0 ml-3">{moment(_entity?.updatedAt).fromNow()}</p>
            </div>
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

export default connect(mapState, mapDispatch)(SingleTemplatesPage);
