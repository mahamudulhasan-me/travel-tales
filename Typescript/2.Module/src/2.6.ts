{
  // constraint

  const courseStudent = <T extends { id: string; name: string; roll: number }>(
    student: T
  ) => {
    const course: string = "Next Level Web Development";

    return {
      ...student,
      course,
    };
  };

  interface StudentType {
    id: string;
    name: string;
    roll: number;
    email: string;
  }

  courseStudent<StudentType>({
    id: "22ME3",
    name: "Mahmudul",
    roll: 22,
    email: "m@gmail.com",
  });

  courseStudent({
    id: "3DN4",
    name: "Mahamudul",
    roll: 78,
  });
}
