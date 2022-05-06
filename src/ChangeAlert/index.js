import React from "react";
import { withStorageListener } from "./withStorageListener";
import "./ChangeAlert.css";

function ChangeAlert({ show, toggleShow, cancelShow }) {
  const onCancel = () => {
    cancelShow(false);
  };

  if (show) {
    return (
      <div className="ChangeAlert">
        <div className="ChangeAlertContainer">
          <p className="textAlert">there are changes in the local storage</p>
          <div className="ChangeAlert-buttonContainer">
            <button
              className="ChangeAlert-button ChangeAlert-button-cancel"
              onClick={onCancel}
            >
              Cancel
            </button>

            <button
              className="ChangeAlert-button ChangeAlert-button-reload"
              onClick={() => toggleShow(false)}
            >
              Reload
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);

export { ChangeAlertWithStorageListener };
