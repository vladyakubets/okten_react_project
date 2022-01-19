import React from 'react';

import './Modal.css'
import Form from "../Form/Form";

const Modal = ({children, isOpened, onClose, formSubmit, update, info}) => {
    return (isOpened &&

        <div className="modal-bgr" onClick={() => onClose()}>
            <div className="modal" onClick={e => e.stopPropagation()}>
                {children}
                <Form submit={formSubmit} update={update} info={info}/>
            </div>
        </div>
    );
};

export default Modal;