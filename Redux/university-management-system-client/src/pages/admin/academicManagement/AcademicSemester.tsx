import CreateAcademicSemesterModal from "../../../components/modals/CreateAcademicSemesterModal";
import AcademicSemesterTable from "../../../components/tables/AcademicSemesterTable";

const AcademicSemester = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-5  rounded-md  bg-gray-200 p-1">
        <h5 className="text-2xl pl-1">Academic semester</h5>
        <CreateAcademicSemesterModal />
      </div>
      <AcademicSemesterTable />
    </div>
  );
};

export default AcademicSemester;
