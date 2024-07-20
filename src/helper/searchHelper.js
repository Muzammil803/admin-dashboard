import React, { useState, useRef } from 'react';
import { Space, Input, Select, Button } from 'antd';
import { CloseSquare } from 'iconsax-react';
import { SearchOutlined } from '@ant-design/icons';
import Highlighter from 'react-highlight-words';

const { Option } = Select;

const GetColumnSearchProps = (dataIndex, statusValues) => {
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef(null);

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters, close, dataIndex) => {
    clearFilters();
    setSearchText('');
    setSearchedColumn('');
    close();
  };

  return {
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => {
      return (
        <div style={{ padding: 10 }}>
          {dataIndex === 'status' ? (
            <Select
              ref={searchInput}
              placeholder={`Select Status`}
              value={selectedKeys[0]}
              onChange={(value) => setSelectedKeys(value ? [value] : [])}
              style={{ display: 'block', width: '100%' }}
            >
              {statusValues.map((status) => (
                <Option key={status} value={status}>
                  {status === 1 ? 'Active' : 'Inactive'}
                </Option>
              ))}
            </Select>
          ) : (
            <Input
              ref={searchInput}
              placeholder={`Search`}
              value={selectedKeys[0]}
              onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
              onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
              style={{ display: 'block' }}
            />
          )}
          <Space className="searchButtons mt-2">
            <Button
              className="click"
              type="primary"
              onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
              icon={<SearchOutlined />}
              variant="outlined"
            >
              Search
            </Button>
            <Button
              className="click"
              type="primary"
              style={{ backgroundColor: '#DBE0E5', color: 'red' }}
              variant="outlined"
              icon={<CloseSquare size={20} />}
              onClick={() => clearFilters && handleReset(clearFilters, close, dataIndex)}
            >
              Reset
            </Button>
          </Space>
        </div>
      );
    },
    filterIcon: (filtered) => <SearchOutlined style={{ color: filtered ? '#1677ff' : undefined }} />,
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.focus(), 100);
      }
    },
    render: (text) => {
      return searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[searchText]}
          autoEscape={true}
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      );
    }
  };
};

export default GetColumnSearchProps;
