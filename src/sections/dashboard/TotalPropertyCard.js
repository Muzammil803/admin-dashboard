import React from "react";
import { useState, useEffect } from "react";
import { Space, Table, Tag } from "antd";
import { connect } from "react-redux";
import { dispatch } from "store/index";

const TotalPropertyCard = ({ allCount }) => {
  const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  }, []);



  const columns = [
    {
      title: "Shops/Flats Name",
      dataIndex: "flat",
      key: "flat_name",
      render: (flat) => flat?.flat_name,
    },

    {
      title: "Total Amount",
      dataIndex: "total_amount",
      key: "total_amount ",
      // render: (flat) => flat?.price
    },
    // {
    //   title: 'Resident Name ',
    //   dataIndex: 'address',
    //   key: 'address',
    // },

    // {
    //   title: 'Status',
    //   key: 'action',
    //   render: (_, record) => (
    //     <Space size="middle">
    //       <a>Invite {record.name}</a>
    //       <a>Delete</a>
    //     </Space>
    //   ),
    // },
  ];

  return (
    <div className="container-fluid" >
      <div className="row">
        <div>
          <h4 style={{ fontFamily: "poppins", fontWeight: "bold" }}>
            Top Flats/Shops{" "}
          </h4>
        </div>
        <div>
          <Table
            columns={columns}
            bordered={false}
            dataSource={allCount?.top_flat_property ?? []}
            pagination={false}
          />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    allCount: state?.AllCountReducers?.allcount,
  };
};

export default connect(mapStateToProps)(TotalPropertyCard);
