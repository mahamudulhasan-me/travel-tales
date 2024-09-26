import CreateAcademicSemesterModal from "../../../components/modals/CreateAcademicSemesterModal";
import AcademicSemesterTable from "../../../components/tables/AcademicSemesterTable";

const AcademicSemester = () => {
  return (
    <div className="h-screen overflow-auto p-10">
      <div className="flex justify-between items-center mb-5  rounded-md  bg-gray-200">
        <h5 className="text-2xl">Academic semester</h5>
        <CreateAcademicSemesterModal />
      </div>
      <AcademicSemesterTable />
    </div>
  );
};

export default AcademicSemester;
