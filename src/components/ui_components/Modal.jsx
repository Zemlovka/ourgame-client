import React from 'react';

// 🔑🙂☹️



function Modal(props) {
    
    return (
        
        <div className={"Modal-overlay"}>
            <div className={"Modal-container"}>
                {props.children}
            </div>
        </div>
        
        )
        
}


export default Modal;