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
        <p>there are changes in the local storage</p>
        <button onClick={() => toggleShow(false)}>Reload Tasks</button>
        <button onClick={onCancel}>Cancel</button>
      </div>
    );
  } else {
    return null;
  }
}

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);

export { ChangeAlertWithStorageListener };
