import React from 'react';
import { Select } from 'antd';

const   SimpleSelect = ({ onChange, onSearch, options, label, label_value, placeholder, value,style ,isDisabled}) => {
    const selectOptions=(Array.isArray(options)&&options.length)?options.map(val=>{return{label:val[label],value:val[label_value]}}):"";


    const filterOption = (input, option) =>(option?.label ?? '').toLowerCase().includes(input.toLowerCase());
    return (
        <Select
            showSearch
            placeholder={placeholder}
            value={value}   
            optionFilterProp="children"
            onChange={onChange}
            filterOption={filterOption}
            options={selectOptions}
            labelInValue={{ label: label, value: label }}
            style={style||{height:"42px"}}
            disabled={isDisabled}
        />
    );
}
export default SimpleSelect;