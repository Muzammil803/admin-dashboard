import React from 'react'
import { useState, useEffect } from 'react'
import { Space, Table, Tag } from 'antd';
import { connect } from "react-redux";
import { dispatch } from 'store/index';


const TopClientsCard = ({ allCount }) => {
  const [dataSource, setDataSource] = useState([])
  const [loading, setLoading] = useState(true);




  useEffect(() => {

  }, [])



  useEffect(() => {
    // console.log("vffeferfrrff", allCount?.top_flat_property)
  }, [])



  const columns = [
    {
      title: 'Tenant Name',
      dataIndex: 'client',
      key: 'client_name',
      render: (client) => client?.client_name
    },


  ];

  return (
    <>
      <div>
        <h4 style={{ fontFamily: "poppins", fontWeight: 'bold' }}>Top Tenants </h4>
      </div>
      <div >
        <Table
          columns={columns}
          bordered={false}
          dataSource={allCount?.top_flat_property ?? []}
          pagination={false}
        />
      </div>



    </>
  )
}

const mapStateToProps = (state) => {
  return {
    allCount: state?.AllCountReducers?.allcount,
  };
};

export default connect(mapStateToProps)(TopClientsCard);
