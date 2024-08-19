import { IQueryParams } from "../../../types";
import baseApi from "../../api/baseApi";

const academicManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // get academic semesters
    getAcademicSemesters: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        if (args) {
          args.forEach((item: IQueryParams) =>
            params.append(item.name, item.value as string)
          );
        }
        return {
          url: "/academic-semesters",
          method: "GET",
          params,
        };
      },
    }),
    // create a academic semester
    createAcademicSemester: builder.mutation({
      query: (data) => ({
        url: "/academic-semesters/create-academic-semester",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  useGetAcademicSemestersQuery,
  useCreateAcademicSemesterMutation,
} = academicManagementApi;
