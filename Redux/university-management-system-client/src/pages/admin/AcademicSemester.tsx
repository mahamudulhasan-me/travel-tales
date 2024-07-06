import { useGetAcademicSemesterQuery } from "../../redux/features/academicSemester/academicSemesterApi";

const AcademicSemester = () => {
  const { data: academicSemesters } = useGetAcademicSemesterQuery({});

  console.log(academicSemesters);
  return <div>Academic semester</div>;
};

export default AcademicSemester;
