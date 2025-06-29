import React, { useEffect } from "react";
import { useState } from "react";
import CreateCardModal from "./CreateCardModal";
import { closeIcon } from "../data/icons";
import AddStateModal from "./AddStateModal";
import UpdateDeleteCardModal from "./UpdateDeleteCardModal";
import DeleteStateModal from "./DeleteStateModal";
import KanbanBoardSelectorModal from "./KanbanBoardSelectorModal";
import TeamSelectorModal from "./TeamSelectorModal";

const NewStateCardModal = ({
  showModal,
  addState,
  hideModal,
  updateDeleteCard,
  deleteState,
  pillOption,
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
  } else if (pillOption) {
    if (pillOption === "boardSelection") {
      return (
        <div className={commonFormStyle}>
          <KanbanBoardSelectorModal
            hideModal={hideModal}
          ></KanbanBoardSelectorModal>
        </div>
      );
    } else if (pillOption === "teamsSelection") {
      return (
        <div className={commonFormStyle}>
          <TeamSelectorModal hideModal={hideModal}></TeamSelectorModal>
        </div>
      );
    }
  }
};

const commonFormStyle = `z-10 h-screen w-screen flex justify-center mx-auto rounded-sm absolute`;

export default NewStateCardModal;
