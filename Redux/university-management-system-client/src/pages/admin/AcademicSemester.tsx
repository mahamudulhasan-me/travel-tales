import { useGetAcademicSemestersQuery } from "../../redux/features/academicSemester/academicSemesterApi";

const AcademicSemester = () => {
  const { data: academicSemesters } = useGetAcademicSemestersQuery({});

  console.log(academicSemesters);
  return <div>Academic semester</div>;
};

export default AcademicSemester;
