import React from 'react';
import Chip from '@mui/material/Chip';
import GetColumnSearchProps from 'helper/searchHelper';
import { format } from 'date-fns';
import { CloseCircleOutlined ,CheckCircleOutlined} from "@ant-design/icons";
import { Tooltip } from "antd";
// permissionUser = localStorage.getItem('LoginData');
//let permissions = JSON.parse(permissionUser)?.permissions;
//const allowedPermissions = permissions && permissions.length !== 0 ? permissions.map((permission) => permission?.permission) : [];

//Columns tables
export const CompanyColumns = ({ params, setparams }) => {
  return [
    {
      title: 'Code',
      dataIndex: 'company_code',
      key: 'company_code',
      ...GetColumnSearchProps('company_code', params, setparams),
      width:"5%"

    },
    {
      title: 'Name',
      dataIndex: 'company_name',
      key: 'company_name',
      ...GetColumnSearchProps('company_name', params, setparams),
      width:"5%"

    },
    {
      title: 'Logo',
      dataIndex: 'image',
      key: 'image',
      render: (image) => <img src={image} alt="User" style={{ width: '50px', height: '50px' }} />,
      width:"5%"

    },
    {
      title: 'Address',
      dataIndex: 'company_address',
      key: 'company_address',
      width:"44%",
    },
    {
      title: 'Country',
      dataIndex: 'company_country',
      key: 'company_country',
      ...GetColumnSearchProps('company_country', params, setparams),
      width:"5%"


    },
    {
      title: 'City',
      dataIndex: 'company_city',
      key: 'company_city',
      ...GetColumnSearchProps('company_city', params, setparams),
      width:"1%"

    },
    {
      title: 'Email Address',
      dataIndex: 'company_email',
      key: 'company_email',
      ...GetColumnSearchProps('company_email', params, setparams),
      width:"10%"

    },
    
   
    {
      title: 'Phone',
      dataIndex: 'company_phone',
      key: 'company_phone',
      ...GetColumnSearchProps('company_phone', params, setparams),
      width:"5%"

    },
    {
      title: 'Url',
      dataIndex: 'company_url',
      key: 'company_url',
      ...GetColumnSearchProps('company_url', params, setparams),
      width:"5%"

    },
    {
      title: 'Role',
      dataIndex: 'role_name',
      key: 'role_name',
      ...GetColumnSearchProps('role_name', params, setparams),
      width:"5%"

    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      width:"10%"
,
      ...GetColumnSearchProps('status', params, setparams, [1, 5]),
      render: (status) => (
        <span>
          
          {status === 1 ? (
            <Tooltip title="Active">
            <CheckCircleOutlined
        style={{ color: "green", fontSize: "24px" }}
      />
      </Tooltip>
          ) : (
            <Tooltip title="Inactive">
             <CloseCircleOutlined
        style={{ color: "red", fontSize: "24px" }}
      />

</Tooltip>
          )}
        </span>
      )
    }
  ];
};
export const CategoryColumns = ({ params, setparams }) => {
  return [
    {
      title: 'Category Name',
      dataIndex: 'name',
      key: 'name',
      ...GetColumnSearchProps('name', params, setparams)
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
      ...GetColumnSearchProps('description', params, setparams)
    },
    {
      title: 'Company Name',
      dataIndex: 'company_name',
      key: 'company_name',
      ...GetColumnSearchProps('company_name', params, setparams)
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      ...GetColumnSearchProps('status', params, setparams, [1, 5]),
      render: (status) => (
        <span>
                  {status === 1 ? (
            <CheckCircleOutlined
        style={{ color: "green", fontSize: "24px" }}
      />
          ) : (
             <CloseCircleOutlined
        style={{ color: "red", fontSize: "24px" }}
      />
          )}
        </span>
      )
    }
  ];
};
export const BrandColumns = ({ params, setparams }) => {
  return [
    {
      title: 'Company Name',
      dataIndex: 'company_name',
      key: 'user_type',
      ...GetColumnSearchProps('company_name', params, setparams)
    },
    {
      title: 'Brand Logo/ArtWork',
      dataIndex: 'brand_logo',
      key: 'brand_logo',
      render: (image) => <img src={image} alt="User" style={{ width: '50px', height: '50px' }} />
    },
    {
      title: 'Brand Email',
      dataIndex: 'brand_email',
      key: 'brand_email'
    },
    {
      title: 'Brand Country',
      dataIndex: 'brand_country',
      key: 'brand_country'
    },
    {
      title: 'Brand City',
      dataIndex: 'brand_city',
      key: 'brand_city'
    },
    {
      title: 'Brand Address',
      dataIndex: 'brand_address',
      key: 'brand_address'
    },

    {
      title: 'Brand Name',
      dataIndex: 'brand_name',
      key: 'brand_name'
    },
    {
      title: 'Brand Phone',
      dataIndex: 'brand_phone',
      key: 'brand_phone'
    },
    {
      title: 'Brand Url',
      dataIndex: 'brand_url',
      key: 'brand_url'
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status) => <span>
              {status === 1 ? (
            <CheckCircleOutlined
        style={{ color: "green", fontSize: "24px" }}
      />
          ) : (
             <CloseCircleOutlined
        style={{ color: "red", fontSize: "24px" }}
      />
          )}
        </span>
    }
    // {
    //   title: 'Actions',
    //   key: 'actions',
    //   render: (text, record) => (
    //     <span>
    //       {allowedPermissions.includes('edit-brand') ? <Button
    //          type="primary" className="mx-2"
    //          variant="contained"

    //         onClick={() => handleEdit(record.id)}

    //       >
    //         Edit
    //       </Button> : null}
    //       {allowedPermissions.includes('deactivate-brand') ? <Popconfirm
    //         title={`Are you sure you want to ${record.status === 1 ? 'Deactivate' : 'Activate'
    //           } this user?`}
    //         onConfirm={() => handleUpdateStatus(record.id, record.status === 1 ? 0 : 1)}
    //       >
    //           <Button variant="contained" color={record.status === 1 ? 'error' : 'success'}>
    //                     {record.status === 1 ? 'Deactivate' : 'Activate'}
    //                     </Button>
    //       </Popconfirm> : null}
    //     </span>
    //   ),

    // },
  ];
};
export const BatchColumns = ({ params, setparams }) => {
  return [
    {
      title: 'Batch',
      dataIndex: 'batch_name',
      key: 'batch_name',
      ...GetColumnSearchProps('batch_name', params, setparams)
    },

    {
      title: 'Company',
      dataIndex: 'company_name',
      key: 'company_name',
      ...GetColumnSearchProps('company_name', params, setparams)
    },
    {
      title: 'Product',
      dataIndex: 'product_name',
      key: 'product_name',
      ...GetColumnSearchProps('product_name', params, setparams)
    },

    {
      title: 'Start Serial Range',
      dataIndex: 'serial_start_rng',
      key: 'serial_start_rng',
      // ...GetColumnSearchProps('serial_qty', params, setparams)
    },
    {
      title: 'End Serial Range',
      dataIndex: 'serial_end_rng',
      key: 'serial_end_rng',
      // ...GetColumnSearchProps('serial_qty', params, setparams)
    },
    {
      title: 'Manufacturing Date',
      dataIndex: 'manufacturing_date',
      key: 'manufacturing_date',
      ...GetColumnSearchProps('manufacturing_date', params, setparams)
    },
    {
      title: 'Expiry Date',
      dataIndex: 'expiry_date',
      key: 'expiry_date',
      ...GetColumnSearchProps('expiry_date', params, setparams)
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',

      render: (status) => (
        <span>
                  {status === 1 ? (
            <CheckCircleOutlined
        style={{ color: "green", fontSize: "24px" }}
      />
          ) : (
             <CloseCircleOutlined
        style={{ color: "red", fontSize: "24px" }}
      />
          )}
        </span>
      )
    }
  ];
};
export const SubCategoryColumns = ({ params, setparams }) => {
  return [
    {
      title: 'Sub Category Name',
      dataIndex: 'name',
      key: 'name',
      ...GetColumnSearchProps('name', params, setparams)
    },

    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
      ...GetColumnSearchProps('description', params, setparams)
    },
    {
      title: 'Parent Category Name',
      dataIndex: 'category_name',
      key: 'category_name',
      ...GetColumnSearchProps('category_name', params, setparams)
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',

      render: (status) => (
        <span>
                 {status === 1 ? (
            <CheckCircleOutlined
        style={{ color: "green", fontSize: "24px" }}
      />
          ) : (
             <CloseCircleOutlined
        style={{ color: "red", fontSize: "24px" }}
      />
          )}
        </span>
      )
    }
  ];
};
export const UsersColumns = ({ params, setparams }) => {
  return [
    {
      title: 'User Type',
      dataIndex: 'user_type',
      key: 'user_type',
      ...GetColumnSearchProps('user_type', params, setparams)
    },
    {
      title: 'Image',
      dataIndex: 'image',
      key: 'image',
      render: (image) => <img src={image} alt="User" style={{ width: '50px', height: '50px' }} />
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      ...GetColumnSearchProps('name', params, setparams)
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      ...GetColumnSearchProps('email', params, setparams)
    },
    {
      title: 'Created By',
      dataIndex: 'createdUser',
      key: 'createdUser',
      ...GetColumnSearchProps('createdUser', params, setparams)
    },
 
    {
      title: 'Date Added',
      dataIndex: 'date_added',
      key: 'date_added',
      ...GetColumnSearchProps('date_added', params, setparams)
    },
    {
      title: 'Date Modified',
      dataIndex: 'date_modified',
      key: 'date_modified'
    },
    {
      title: 'Role',
      dataIndex: 'role',
      key: 'role',
      ...GetColumnSearchProps('role', params, setparams)
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status) => (
        <span>
                 {status === 1 ? (
              <Tooltip title="Active">
          <CheckCircleOutlined
        style={{ color: "green", fontSize: "24px" }}
      />
</Tooltip>

          ) : (

            <Tooltip title="Inactive">
             <CloseCircleOutlined
        style={{ color: "red", fontSize: "24px" }}
      />
      </Tooltip>
          )}
        </span>
      )
    }
  ];
};
export const RandomColumns = ({ params, setparams }) => {
  return [
    {
      title: 'QR Code',
      dataIndex: 'svg_code',
      key: 'svg_code',
      render: (iconUrl) => <div dangerouslySetInnerHTML={{ __html: iconUrl }} />
    },
    {
      title: 'Random Number',
      dataIndex: 'random_code',
      key: 'random_code',
      ...GetColumnSearchProps('random_code', params, setparams)
    },
    {
      title: 'Serial Number',
      dataIndex: 'pair_value',
      key: 'pair_value',
      ...GetColumnSearchProps('pair_value', params, setparams)
    },
    {
      title: 'Company',
      dataIndex: 'company',
      key: 'company',
      ...GetColumnSearchProps('company', params, setparams)
    },
  

    {
      title: 'Verfication Count',
      dataIndex: 'verified_count',
      key: 'verified_count'
    },
    {
      title: 'Random Digits',
      dataIndex: 'digits',
      key: 'digits'
    },
   
    {
      title: 'Activation Status',
      dataIndex: 'activation_status',
      key: 'activation_status',
      render: (status) => (
        <span>
                  {status === 1 ? (
            <CheckCircleOutlined
        style={{ color: "green", fontSize: "24px" }}
      />
          ) : (
             <CloseCircleOutlined
        style={{ color: "red", fontSize: "24px" }}
      />
          )}
        </span>
      )
    },
    {
      title: 'Batch ID',
      dataIndex: 'batch_id',
      key: 'batch_id',
      ...GetColumnSearchProps('batch_id', params, setparams)
    },
    {
      title: 'Created Date',
      dataIndex: 'created_at',
      key: 'created_at',
      render: (created_at) => {
        const date = new Date(created_at);
        const formattedDate = format(date, 'dd/MM/yyyy');
        return <span>{formattedDate}</span>;
      }
    }
  ];
};
export const ProductsColumns = ({ params, setparams }) => {
  return [
    // {
    //   title: 'Created By',
    //   dataIndex: 'CreatedUser',
    //   key: 'CreatedUser',
    //   ...GetColumnSearchProps('CreatedUser', params, setparams)
    // },
    {
      title: 'Company Name',
      dataIndex: 'company_name',
      key: 'company_name',
      ...GetColumnSearchProps('company_name', params, setparams)
    },{
      title: 'Product',
      dataIndex: 'name',
      key: 'product_name',
      ...GetColumnSearchProps('name', params, setparams)
    },
    {
      title: 'Image',
      dataIndex: 'image',
      key: 'image',
      render: (image) => <img src={image} alt="User" style={{ width: '50px', height: '50px' }} />
    },
    
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
      // ...GetColumnSearchProps('description', params, setparams)
    },
    

    {
      title: 'Category Name',
      dataIndex: 'category_name',
      key: 'category_name',
      ...GetColumnSearchProps('category_name', params, setparams)
    },
    {
      title: 'Date Added',
      dataIndex: 'date_added',
      key: 'date_added',
      render: (date_added) => {
        const date = new Date(date_added);
        const formattedDate = format(date, 'dd/MM/yyyy');
        return <span>{formattedDate}</span>;
      }
    },

    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status) => (
        <span>
                  {status === 1 ? (
            <CheckCircleOutlined
        style={{ color: "green", fontSize: "24px" }}
      />
          ) : (
             <CloseCircleOutlined
        style={{ color: "red", fontSize: "24px" }}
      />
          )}
        </span>
      )
    }
  ];
};
