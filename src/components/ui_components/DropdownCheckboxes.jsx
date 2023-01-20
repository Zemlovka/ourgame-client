import React, {useState} from "react";

function DropdownCheckboxes(props)
{
    let [expanded, setExpanded] = useState(false);

    function showCheckboxes() {setExpanded(!expanded);}

    return(
        <div className="Dropdown" >

            <div className="Dropdown-button" onClick={()=>{showCheckboxes()}}>
                    Select Tags
            </div>

            <div id="checkboxes" style={expanded ? { display: "block" } : { display: "none" }}>
                <label><input type="checkbox" />Tag A</label>
                <label><input type="checkbox" />Tag B</label>
                <label><input type="checkbox" />Tag C</label>
                <label><input type="checkbox" />Tag D</label>
                <label><input type="checkbox" />Tag E</label>
                <label><input type="checkbox" />Tag F</label>
            </div>

        </div>)
}

export default DropdownCheckboxes;