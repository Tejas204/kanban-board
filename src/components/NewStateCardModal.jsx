import React, { useEffect } from "react";
import { useState } from "react";
import CreateCardModal from "./CreateCardModal";
import { closeIcon } from "../data/icons";
import AddStateModal from "./AddStateModal";
import UpdateDeleteCardModal from "./UpdateDeleteCardModal";
import DeleteStateModal from "./DeleteStateModal";

const NewStateCardModal = ({
  showModal,
  addState,
  hideModal,
  updateDeleteCard,
  deleteState,
}) => {
  // If user wants to add card
  if (showModal.active) {
    return (
      <div
        className={
          commonFormStyle + ` ${showModal.active ? "visible" : "hidden"}`
        }
      >
        <CreateCardModal
          hideModal={hideModal}
          columnId={showModal.columnId}
        ></CreateCardModal>
      </div>
    );
  } else if (addState) {
    // If user wants to add state
    return (
      <div className={commonFormStyle + ` ${addState ? "visible" : "hidden"}`}>
        <AddStateModal hideModal={hideModal}></AddStateModal>
      </div>
    );
  } else if (updateDeleteCard) {
    return (
      <div className={commonFormStyle}>
        <UpdateDeleteCardModal
          updateDeleteCard={updateDeleteCard}
          hideModal={hideModal}
        ></UpdateDeleteCardModal>
      </div>
    );
  } else if (deleteState.active) {
    return (
      <div className={commonFormStyle}>
        <DeleteStateModal
          hideModal={hideModal}
          columnId={deleteState.columnId}
        ></DeleteStateModal>
      </div>
    );
  }
};

const commonFormStyle = `z-10 h-screen w-screen flex justify-center mx-auto rounded absolute`;

export default NewStateCardModal;
