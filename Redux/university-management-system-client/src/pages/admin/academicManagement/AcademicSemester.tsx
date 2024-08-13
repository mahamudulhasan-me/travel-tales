import CreateAcademicSemesterModal from "../../../components/modals/CreateAcademicSemesterModal";
import AcademicSemesterTable from "../../../components/tables/AcademicSemesterTable";
import { useGetAcademicSemestersQuery } from "../../../redux/features/academicSemester/academicSemesterApi";

const AcademicSemester = () => {
  const { data: academicSemesters } = useGetAcademicSemestersQuery({});

  console.log(academicSemesters);
  return (
    <div>
      Academic semester
      <CreateAcademicSemesterModal />
      <AcademicSemesterTable />
    </div>
  );
};

export default AcademicSemester;
