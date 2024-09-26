import { Space, Table } from "antd";
import { ColumnsType, TableProps } from "antd/es/table";
import React, { useState } from "react";
import { useGetAcademicSemestersQuery } from "../../redux/features/admin/academicManagement.api";
import { IAcademicSemester, IQueryParams } from "../../types";

export type TAcademicSemesterTableProps = Pick<
  IAcademicSemester,
  "_id" | "name" | "year" | "startMonth" | "endMonth"
>;
const columns: ColumnsType<TAcademicSemesterTableProps> = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    filters: [
      {
        text: "Autumn",
        value: "Autumn",
      },
      {
        text: "Summer",
        value: "Summer",
      },
      {
        text: "Fall",
        value: "Fall",
      },
    ],
  },
  {
    title: "Year",
    dataIndex: "year",
    key: "year",
    filters: [
      {
        text: "2024",
        value: "2024",
      },
      {
        text: "2025",
        value: "2025",
      },
      {
        text: "2026",
        value: "2026",
      },
      {
        text: "2027",
        value: "2027",
      },
    ],
  },
  {
    title: "Start Month",
    dataIndex: "startMonth",
    key: "startMonth",
  },
  {
    title: "End Month",
    key: "endMonth",
    dataIndex: "endMonth",
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
  const [params, setParams] = useState<IQueryParams[] | []>([]);
  const { data, isLoading, isFetching } = useGetAcademicSemestersQuery(params);

  const onChange: TableProps<TAcademicSemesterTableProps>["onChange"] = (
    _pagination,
    filters,
    _sorter,
    extra
  ) => {
    if (extra.action === "filter") {
      const queryParams: IQueryParams[] = [];

      if (filters.name) {
        filters.name.forEach((item) => {
          queryParams.push({ name: "name", value: item });
        });
      }

      if (filters.year) {
        filters.year.forEach((item) => {
          queryParams.push({ name: "year", value: item });
        });
      }

      setParams(queryParams);
    }
  };

  return (
    <Table
      className="h-full"
      columns={columns}
      onChange={onChange}
      dataSource={data?.data}
      loading={isFetching || isLoading}
    />
  );
};

export default AcademicSemesterTable;
