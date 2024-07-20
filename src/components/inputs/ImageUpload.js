import React, { useState } from 'react';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
import { toast } from 'react-toastify';
const getBase64 = (file) =>
new Promise((resolve, reject) => {
  if (!(file instanceof File)) {
    reject(new Error('Invalid file input'));
    return;
  }
  const reader = new FileReader();
  reader.onload = () => resolve(reader.result);
  reader.onerror = (error) => reject(error);
  reader.readAsDataURL(file);
});
const beforeUpload = (file) => {
  const isJpgOrPng =  file.type.startsWith('image/');
  if (!isJpgOrPng) {
    toast.error('You can only upload Image file!');
  }
  
  return isJpgOrPng ;
};
const ImageUpload = ({value,onChange}) => {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState(value??"");
  const handleChange = (info) => {
    if (info.file.status === 'uploading') {
      setLoading(true);
      return;
    }
    if (info.file.status === 'done') {
        onChange(info.file.originFileObj)
        getBase64(info.file.originFileObj)
        .then(res=>{
        setImageUrl(res)
        setLoading(false)
         })
    }
  };
  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );
  return (
    <>
      <Upload
        name="avatar"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        action={getBase64}
        beforeUpload={beforeUpload}
        onChange={handleChange}
      >
        {imageUrl ? (
          <img
            src={imageUrl}
            alt="avatar"
            style={{
              width: '100%',
            }}
          />
        ) : (
          uploadButton
        )}
      </Upload>
    
    </>
  );
};
export default ImageUpload;