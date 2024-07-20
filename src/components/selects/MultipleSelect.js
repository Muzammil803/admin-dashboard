import React from 'react';
import { Select } from 'antd';
import "assets/css/multiSelect.css"
const MultiSelect = ({ options, value, handleChange }) => {
  const handleSelectAll = (selected) => {
    if (selected.includes('all')) {
      handleChange(options.map((option) => option.id));
    } else {
      handleChange(selected);
    }
  };

  return (
    <Select
      mode="multiple"
      className="multi_select_product"
      style={{
        width: '100%',
        height: '48px',
       
      }}
      placeholder="Select Product"
      value={value}
      onChange={handleSelectAll}
      filterOption={(inputValue, option) => {
        // Implement your custom filtering logic here
        return option.children.toLowerCase().includes(inputValue.toLowerCase());
      }}
    >
      <Select.Option value="all" label="Select All">
        Select All
      </Select.Option>
      {options.map((option) => (
        <Select.Option key={option.id} value={option.id} label={option.name}>
          {option.name}
        </Select.Option>
      ))}
    </Select>
  );
};

export default MultiSelect;
