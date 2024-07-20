import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { IoCheckmarkSharp } from "react-icons/io5";
import { Modal, Upload } from 'antd';
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
const MultipleImageUpload = ({ maxCount, images, setImages, disabled }) => {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [previewTitle, setPreviewTitle] = useState('');
  const handleCancel = () => setPreviewOpen(false);
  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
    setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
  };
  const handleChange = (value, v) => {  setImages(value?.fileList) };
  const uploadButton = (
    <div className='mx-4 d-flex align-items-center'>
      <div
        style={{
          width:"120px",
          height:"50px",
          border:"2px solid #FF264C",
          borderRadius:7,
          display:"flex",
          justifyContent:"center",
          alignItems:"center",
          color:"#FF264C",
          marginRight:"10px"
        }}
      >
        Add Image
      </div>
      <div className='d-flex justify-content-start flex-column text-left pl-2'>
       
       <span  style={{textAlign:"left"}}><IoCheckmarkSharp/> Upload max 6 images </span>
        <span style={{textAlign:"left"}}><IoCheckmarkSharp/> Use high quality images. </span>
       
      </div>
    </div>
  );
  return (
    <>
      <Upload
        action={getBase64}
        listType="picture-card"
        fileList={images}
        onPreview={handlePreview}
        onChange={handleChange}
        maxCount={maxCount}
        disabled={disabled}
      >
        {images.length >= maxCount ? null : uploadButton}
      </Upload>
      <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
        <img
          alt="example"
          style={{
            width: '100%',
          }}
          src={previewImage}
        />
      </Modal>
    </>
  );
};
export default MultipleImageUpload;