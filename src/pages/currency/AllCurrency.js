import { useEffect, useState } from "react";
import MainCard from "components/MainCard";
import { Table, Spin } from "antd";
import { connect } from "react-redux";
import { Grid, Button } from "@mui/material";
import { IoMdAddCircle } from "react-icons/io";
import { useNavigate } from "react-router-dom";

import { FaRegEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import { dispatch } from "store/index";
import {
  GetAllCurrency
} from "store/action/index";
import GetColumnSearchProps from "helper/searchHelper";
const AllUsers = ({ getAllCurrency }) => {
  const [loading, setLoading] = useState(true);
  const [dataSource, setDataSource] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(getAllCurrency)
    if (getAllCurrency) {

      setDataSource(getAllCurrency);
    }
  }, [getAllCurrency]);

  useEffect(() => {
    dispatch(GetAllCurrency({ setLoading: setLoading }));
  }, []);

  const handleEdit = (data) => {
    navigate("/currency/add-currency", { state: data });
  };

  const columns = [
    {
      title: "Icon",
      dataIndex: "flag",
      key: "flag",
      render: (text, record) => {
        return (
          <span>
            <img alt={record.short_code} src={`https://epaisachanger.com/api/public/${record.flag}`} style={{ width: '30px', height: '30px', borderRadius: '15px' }} />
          </span>
        );
      },
    },
    {
      title: "Currency",
      dataIndex: "currency",
      key: "currency",
      ...GetColumnSearchProps('currency')
    },
    {
      title: "Short Code",
      dataIndex: "short_code",
      key: "short_code",
      ...GetColumnSearchProps('short_code')
    },
    {
      title: "Buy",
      dataIndex: "buy",
      key: "buy",
      sorter: (a, b) => a.buy - b.buy,
    },
    {
      title: "Sell",
      dataIndex: "sell",
      key: "sell",
      sorter: (a, b) => a.sell - b.sell,
    },

    {
      title: "Action",
      key: "action",
      render: (text, record) => {
        return (
          <span>
            {(
              <Button onClick={() => handleEdit(record)}>
                <FaRegEdit />
              </Button>
            )}
          </span>
        );
      },
    },
  ];

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          height: "75px",
          borderRadius: "12px",
          marginBottom: "20px",
          padding: "0 16px",
          backgroundColor: "#fff",
          border: '1px solid',
          borderColor: 'rgba(219, 224, 229, 0.65)',
        }}
      >
        <Grid container alignItems="center" justifyContent="flex-start">
          <Grid item>
            <span
              style={{
                fontSize: "22px",
                fontWeight: "600",
              }}
            >
              All Currency
            </span>
          </Grid>
        </Grid>
        <Grid container alignItems="center" justifyContent="flex-end">
          <Grid item>
            <Link to={"/currency/add-currency"}>
              <Button
                disableElevation
                className="px-2"
                size="large"
                type="submit"
              >
                <span className="mx-2">
                  <IoMdAddCircle color="#FF264C" size={26} />
                </span>
                Add Currency
              </Button>
            </Link>
          </Grid>

        </Grid>
      </div>

      <MainCard>

        <Spin spinning={loading}>
          <Table
           style={{ overflowX: 'auto' }}
           pagination={false}
            dataSource={dataSource}
            columns={columns}
          />
        </Spin>

      </MainCard>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    getAllCurrency: state?.GetAllCurrency?.getAllCurrency,
  };
};

export default connect(mapStateToProps)(AllUsers);
