import React from "react";

function ReturnButton(props)
{
    // (?) Minor changes in width
    return(
        <div className="Return-button" onClick={props.onClick}>
            <svg width="15" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.57141 2.14285L3.21427 7.5L8.57141 12.8571L7.49998 15L-1.82561e-05 7.5L7.49998 -3.57628e-06L8.57141 2.14285Z" fill="white"/>
            </svg>
        </div>
    )
}

ReturnButton.defaultProps = 
{
    onClick: () => {console.log("This button doesn't have assigned function!")},
};

export default ReturnButton;

/*
    ORIGINAL SVG
    <svg width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.57141 2.14285L3.21427 7.5L8.57141 12.8571L7.49998 15L-1.82561e-05 7.5L7.49998 -3.57628e-06L8.57141 2.14285Z" fill="white"/>
    </svg>

*/