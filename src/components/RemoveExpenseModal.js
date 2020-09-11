import React from "react";
import Modal from "react-modal";

const RemoveExpenseModal = (props) => (
    <Modal
        className="modal"
        isOpen={props.deletingExpense}
        onRequestClose={props.onClearDeletingExpense}
        contentLabel="remove expense"
        ariaHideApp={false} //recomendado por error de la consola
        closeTimeoutMS={200}
    >
        <h3 className="modal__title">"Are you sure you want to remove this expense?"</h3>
        <div className="modal__body">
            <button className="button" onClick={props.onRemove}>Yes</button>
            <button className="button button--secondary" onClick={props.onClearDeletingExpense}>No</button>
        </div>
    </Modal>
);

export default RemoveExpenseModal;