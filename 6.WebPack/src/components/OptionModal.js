import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
        <Modal
            isOpen = {!!props.selectedOption}
            contentLabel = "Selected Option"
            onRequestClose = {props.handleModalClose}
        >
            <p>Selected Option</p>
            {props.selectedOption && <p>{props.selectedOption}</p>}
            <button onClick = {props.handleModalClose}>Okay</button>
        </Modal>
)

export default OptionModal;

// =====Challenge=====
// 1.Create a new event handle in IndecisionApp that clears the selected optin state
// 2.Pass that into OpionModal
// Call it on button click

// =====Challenge#2=====
// Modify the code in all the stateless functions in all the files where we've used them
// - Header.js
// - Action.js
// - Option.js
// - Options.js