import { Popconfirm } from "antd";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import { AES, enc } from "crypto-js";
import * as url from "../../store/constant/Endpoints";

import { EditOutlined } from "@ant-design/icons";

let permissionUser = localStorage.getItem("data");

let decryptedData = null;
if (permissionUser) {
  try {
    // Code that may throw an exception
    decryptedData = AES.decrypt(permissionUser, url.encryptionSecret).toString(
      enc.Utf8
    );
    // ...
  } catch (error) {
    console.log(error, "er");
  }
}

let permissions = [];

try {
  permissions = JSON.parse(decryptedData)?.permissions || [];
} catch (error) {
  console.error("Error parsing user permissions:", error);
}

const allowedPermissions = permissions.map(
  (permission) => permission?.permission
);

const RenderEditButton = (r, p, cb) => {
  return (
    // <Button className="mx-1" type="primary" variant="contained" onClick={() => cb(p, r)}>
    //   <EditOutlined />
    // </Button>

    <IconButton onClick={() => cb(p, r)}>
      <EditOutlined />
    </IconButton>
  );
};

const RenderDeactivateButton = (record, cb) => {
  return (
    <Popconfirm
      title={`Are you sure you want to ${
        record.status === 1 ? "Deactivate" : "Activate"
      } this?`}
      onConfirm={() => cb(record.id, record.status === 1 ? 0 : 1)}
    >
      <IconButton
        variant="contained"
        color={record.status === 1 ? "success" : "error"}
      >
        {record.status === 1 ? <CheckIcon /> : <CloseIcon />}
      </IconButton>
    </Popconfirm>
  );
};
const CustomConfirmButton = (record, cb, Icon) => {
  return (
    <Popconfirm
      title={`Are you sure you want to ${
        record.status === 1 ? "Deactivate" : "Activate"
      } this?`}
      onConfirm={() => cb(record.id, record.status === 1 ? 0 : 1)}
    >
      <IconButton
        variant="contained"
        color={record.status === 1 ? "success" : "error"}
      >
        {record.status === 1 ? <CheckIcon /> : <CloseIcon />}
      </IconButton>
    </Popconfirm>
  );
};

const RenderButton = (link, lable) => {
  return (
    <Link to={link}>
      <Button
        sx={{ margin: "10px" }}
        disableElevation
        size="medium"
        type="submit"
        variant="contained"
        color="primary"
      >
        {lable}
      </Button>
    </Link>
  );
};

export const editButton = (permission, path, record, cb) =>
  allowedPermissions.includes(permission)
    ? RenderEditButton(record, path, cb)
    : null;
export const deactivateButton = (permission, record, cb) =>
  true ? RenderDeactivateButton(record, cb) : null;
// allowedPermissions.includes(permission) ? RenderDeactivateButton(record, cb) : null;
export const renderButton = (permission, link, lable) =>
  allowedPermissions.includes(permission) ? RenderButton(link, lable) : null;
