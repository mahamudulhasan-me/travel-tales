import { PlusOutlined } from "@ant-design/icons";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Modal } from "antd";
import React, { useEffect, useState } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { monthOptions } from "../../assets/constants/global";
import {
  semesterNameOptions,
  yearOptions,
} from "../../assets/constants/semester";
import { useCreateAcademicSemesterMutation } from "../../redux/features/admin/academicManagement.api";
import { useAppDispatch } from "../../redux/hooks";
import { isSubmitted } from "../../redux/utils/utils";
import { zAcademicSemesterSchema } from "../../schemas/semester.schema";
import { IError } from "../../types/global.type";
import Toast from "../../utils/Toast";
import MyForm from "../form/MyForm";
import MySelect from "../form/MySelect";

const CreateAcademicSemesterModal: React.FC = () => {
  const [open, setOpen] = useState(false);

  const dispatch = useAppDispatch();
  const [createAcademicSemester, { isError, isLoading, isSuccess, error }] =
    useCreateAcademicSemesterMutation();

  const showModal = () => {
    setOpen(true);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const { name, year, startMonth, endMonth } = data;
    const nameByCode = semesterNameOptions[Number(data.name) - 1].label;
    const semesterInfo = {
      name: nameByCode,
      code: name,
      year,
      startMonth,
      endMonth,
    };
    try {
      dispatch(isSubmitted(false));
      await createAcademicSemester(semesterInfo);
    } catch (error) {
      Toast.fire({
        icon: "error",
        title: "Something went wrong",
      });
    }
  };

  useEffect(() => {
    if (isSuccess) {
      handleCancel();
      Toast.fire({
        icon: "success",
        title: "Semester created successfully",
      });
      dispatch(isSubmitted(true));
    }

    if (isError) {
      Toast.fire({
        icon: "error",
        title: `${(error as IError).data.message}` || "Something went wrong",
      });
    }
  }, [isSuccess, isError, error, dispatch]);

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
        <MyForm
          onSubmit={onSubmit}
          resolver={zodResolver(zAcademicSemesterSchema)}
        >
          <MySelect label="Name" name="name" options={semesterNameOptions} />
          <MySelect label="Year" name="year" options={yearOptions} />
          <MySelect
            label="Start Month"
            name="startMonth"
            options={monthOptions}
          />
          <MySelect label="End Month" name="endMonth" options={monthOptions} />

          {/* <MyInput name="year" type="text" label="Name" /> */}

          <footer className="flex justify-end gap-2 mt-2">
            <Button onClick={handleCancel}>Cancel</Button>
            <Button htmlType="submit" type="primary" loading={isLoading}>
              Submit
            </Button>
          </footer>
        </MyForm>
      </Modal>
    </>
  );
};

export default CreateAcademicSemesterModal;
