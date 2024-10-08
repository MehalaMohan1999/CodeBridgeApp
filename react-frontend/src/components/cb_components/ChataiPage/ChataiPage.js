// REACT 18 TEMPLATE - <Service>Page.js

import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link, useNavigate, useParams, useLocation } from "react-router-dom";
import client from "../../../services/restClient";
import _ from "lodash";
import { Button } from "primereact/button";
import { SplitButton } from "primereact/splitbutton";
import AreYouSureDialog from "../../common/AreYouSureDialog";
import ChataiDatatable from "./ChataiDataTable";
import ChataiEditDialogComponent from "./ChataiEditDialogComponent";
import ChataiCreateDialogComponent from "./ChataiCreateDialogComponent";
import ChataiFakerDialogComponent from "./ChataiFakerDialogComponent";
import ChataiSeederDialogComponent from "./ChataiSeederDialogComponent";

const ChataiPage = (props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [showAreYouSureDialog, setShowAreYouSureDialog] = useState(false);
  const [showEditDialog, setShowEditDialog] = useState(false);
  const [showCreateDialog, setShowCreateDialog] = useState(false);
  const [newRecord, setRecord] = useState({});
  const [showFakerDialog, setShowFakerDialog] = useState(false);
  const [showDeleteAllDialog, setShowDeleteAllDialog] = useState(false);
  const [showSeederDialog, setShowSeederDialog] = useState(false);
  const [selectedEntityIndex, setSelectedEntityIndex] = useState();
  const urlParams = useParams();

  useEffect(() => {
    //on mount
    client
      .service("chatai")
      .find({
        query: {
          $limit: 10000,
          $sort: { createdAt: -1 },

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
          ],
        },
      })
      .then((res) => {
        let results = res.data;

        setData(results);
      })
      .catch((error) => {
        console.log({ error });
        props.alert({
          title: "Chatai",
          type: "error",
          message: error.message || "Failed get chatai",
        });
      });
  }, [showFakerDialog, showDeleteAllDialog]);

  const onEditRow = (rowData, rowIndex) => {
    setSelectedEntityIndex(rowData._id);
    setShowEditDialog(true);
  };

  const onCreateResult = (newEntity) => {
    setData([...data, newEntity]);
  };
  const onFakerCreateResults = (newEntities) => {
    setSelectedEntityIndex();
    setData([...data, ...newEntities]);
  };
  const onSeederResults = (newEntities) => {
    setSelectedEntityIndex();
    setData([...data, ...newEntities]);
  };

  const onEditResult = (newEntity) => {
    let _newData = _.cloneDeep(data);
    _.set(_newData, { _id: selectedEntityIndex }, newEntity);
    setData(_newData);
  };

  const deleteRow = async () => {
    try {
      await client.service("chatai").remove(selectedEntityIndex);
      let _newData = data.filter((data) => data._id !== selectedEntityIndex);
      setData(_newData);
      setSelectedEntityIndex();
      setShowAreYouSureDialog(false);
    } catch (error) {
      console.log({ error });
      props.alert({
        title: "Chatai",
        type: "error",
        message: error.message || "Failed delete record",
      });
    }
  };
  const onRowDelete = (index) => {
    setSelectedEntityIndex(index);
    setShowAreYouSureDialog(true);
  };

  const onShowDeleteAll = (rowData, rowIndex) => {
    setShowDeleteAllDialog(true);
  };

  const deleteAll = async () => {
    if (process.env.REACT_APP_ENV !== "development") {
      props.alert({
        title: "Delete is disabled for non-dev envs",
        type: "error",
        message: "Delete is not recommended.",
      });
      return;
    }

    setShowDeleteAllDialog(false);
    const countDataItems = data?.length;
    const promises = data.map((e) => client.service("chatai").remove(e._id));
    await Promise.all(
      promises.map((p) =>
        p.catch((error) => {
          props.alert({
            title: "Chatai",
            type: "error",
            message: error.message || "Failed to delete all records",
          });
          console.log({ error });
        }),
      ),
    );
    await props.alert({
      title: "Chatai",
      type: "warn",
      message: `Successfully dropped ${countDataItems} records`,
    });
  };

  const onRowClick = ({ data }) => {
    navigate(`/chatai/${data._id}`);
  };

  const menuItems = [
    {
      label: "Faker",
      icon: "pi pi-sliders-h",
      command: (e) => {
        setShowFakerDialog(true);
      },
    },
    {
      label: "Seeder",
      icon: "pi pi-forward",
      command: (e) => {
        setShowSeederDialog(true);
      },
    },
    {
      label: `Drop ${data?.length}`,
      icon: "pi pi-trash",
      command: (e) => {
        setShowDeleteAllDialog(true);
      },
    },
  ];

  return (
    <div className="mt-5" style={{ minHeight: "calc(90vh - 9rem)" }}>
      <div className="grid">
        <div className="col-6 flex justify-content-start">
          <h3 className="mb-0 ml-2">Chatai </h3>
        </div>
        <div className="col-6 flex justify-content-end">
          <Button
            label="add"
            icon="pi pi-plus"
            onClick={() => setShowCreateDialog(true)}
            role="chatai-add-button"
          />
          <SplitButton
            model={menuItems.filter(
              (m) => !(m.icon === "pi pi-trash" && data?.length === 0),
            )}
            dropdownIcon="pi pi-ellipsis-v"
            buttonClassName="hidden"
            menuButtonClassName="ml-1 p-button-text"
          ></SplitButton>
        </div>
      </div>
      <div className="grid align-items-center">
        <div className="col-12" role="chatai-datatable">
          <ChataiDatatable
            items={data}
            onRowDelete={onRowDelete}
            onEditRow={onEditRow}
            onRowClick={onRowClick}
          />
        </div>
      </div>
      <AreYouSureDialog
        header="Delete"
        body="Are you sure you want to delete this record?"
        show={showAreYouSureDialog}
        onHide={() => setShowAreYouSureDialog(false)}
        onYes={() => deleteRow()}
      />
      <ChataiEditDialogComponent
        entity={_.find(data, { _id: selectedEntityIndex })}
        show={showEditDialog}
        onHide={() => setShowEditDialog(false)}
        onEditResult={onEditResult}
      />
      <ChataiCreateDialogComponent
        entity={newRecord}
        show={showCreateDialog}
        onHide={() => setShowCreateDialog(false)}
        onCreateResult={onCreateResult}
      />
      <ChataiFakerDialogComponent
        show={showFakerDialog}
        onHide={() => setShowFakerDialog(false)}
        onFakerCreateResults={onFakerCreateResults}
      />
      <ChataiSeederDialogComponent
        show={showSeederDialog}
        onHide={() => setShowSeederDialog(false)}
        onSeederResults={onSeederResults}
      />
      <AreYouSureDialog
        header={`Drop ${data?.length} records`}
        body={`Are you sure you want to drop ${data?.length} records?`}
        show={showDeleteAllDialog}
        onHide={() => setShowDeleteAllDialog(false)}
        onYes={() => deleteAll()}
      />
    </div>
  );
};
const mapState = (state) => ({
  //
});
const mapDispatch = (dispatch) => ({
  alert: (data) => dispatch.toast.alert(data),
  getSchema: (serviceName) => dispatch.db.getSchema(serviceName),
});

export default connect(mapState, mapDispatch)(ChataiPage);
