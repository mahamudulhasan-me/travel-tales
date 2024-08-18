import { Space, Table } from "antd";
import React from "react";
import { useGetAcademicSemestersQuery } from "../../redux/features/admin/academicManagement.api";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Year",
    dataIndex: "year",
    key: "year",
  },
  {
    title: "Start Month",
    dataIndex: "startMonth",
    key: "startMonth",
  },
  {
    title: "End MOnth",
    key: "endMonth",
    dataIndex: "endMonth",
    // render: (_, { tags }) => (
    //   <>
    //     {tags.map((tag) => {
    //       let color = tag.length > 5 ? "geekblue" : "green";
    //       if (tag === "loser") {
    //         color = "volcano";
    //       }
    //       return (
    //         <Tag color={color} key={tag}>
    //           {tag.toUpperCase()}
    //         </Tag>
    //       );
    //     })}
    //   </>
    // ),
  },
  {
    title: "Action",
    key: "action",
    render: () => (
      <Space size="middle">
        <a>Edit</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

const AcademicSemesterTable: React.FC = () => {
  const { data, isLoading } = useGetAcademicSemestersQuery({});

  return (
    <Table columns={columns} dataSource={data?.data} loading={isLoading} />
  );
};

export default AcademicSemesterTable;
