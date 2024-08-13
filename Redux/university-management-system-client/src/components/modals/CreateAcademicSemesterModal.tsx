import { PlusOutlined } from "@ant-design/icons";
import { Button, Modal } from "antd";
import React, { useState } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import MyForm from "../form/MyForm";
import MyInput from "../form/MyInput";
import MySelect from "../form/MySelect";

const CreateAcademicSemesterModal: React.FC = () => {
  const [open, setOpen] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
    // Handle form submission logic here
    handleCancel();
  };

  return (
    <>
      <Button type="primary" onClick={showModal} icon={<PlusOutlined />}>
        Create
      </Button>
      <Modal
        title="Create academic semester"
        open={open}
        onCancel={handleCancel}
        footer={null} // We will handle the footer buttons manually
      >
        <MyForm onSubmit={onSubmit}>
          <MySelect label="Name" />
          <MyInput name="year" type="text" label="Name" />

          <footer className="flex justify-end gap-2 mt-2">
            <Button onClick={handleCancel}>Cancel</Button>
            <Button htmlType="submit" type="primary">
              Submit
            </Button>
          </footer>
        </MyForm>
      </Modal>
    </>
  );
};

export default CreateAcademicSemesterModal;
