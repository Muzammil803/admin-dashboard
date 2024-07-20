import React, { } from "react";
import ReactFlagsSelect from "react-flags-select";

const CountryDropDown = (props) => {
    const { onSelect, value } = props

    const customStyles = {
        backgroundColor: "white",
        border: "1px solid #fcb52736",
        fontSize: "16px !important",
        borderRadius: "8px !important",
        height: "60px",
        marginTop: "0px",
        marginBottom: "0px",
    };

    return (
        <>
            <p style={{ marginTop: "0px", marginBottom: "7px", fontWeight: "600", color: "#818D98" }}>Select a Country</p>
            <div style={{ fontSize: "17px" }}>
                <ReactFlagsSelect
                    selected={value}
                    optionsColor="black"
                    searchable
                    onSelect={onSelect}
                    customStyles={customStyles}
                    defaultCountry={value} 
                    placeholder="Select a country" 
                />
            </div>
        </>

    );
};

export default CountryDropDown;
