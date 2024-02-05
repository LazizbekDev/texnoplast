import { useState } from "react";
import Select, { components } from "react-select";

const Option = (props) => (
    <components.Option {...props} className="country-option flex items-center justify-between">
        {props.data.label}
    </components.Option>
);

const Selector = ({selectedPanel,handleChange, options}) => {

    const SingleValue = ({ children, ...props }) => (
        <components.SingleValue {...props} className={"flex items-center justify-start"}>
            <img src={selectedPanel.icon} alt="s-logo" className="selected-logo w-7 bg-[#DE5A03] mr-2" />
            {children}
        </components.SingleValue>
    );

    return (
        <div>
            <Select
                placeholder={"menu"}
                value={selectedPanel}
                isSearchable={false}
                options={options}
                onChange={handleChange}
                styles={{
                    singleValue: (base) => ({
                        ...base,
                        display: "flex",
                        alignItems: "center"
                    })
                }}
                components={{
                    Option,
                    SingleValue
                }}
            />
        </div>
    );
};

export default Selector;
