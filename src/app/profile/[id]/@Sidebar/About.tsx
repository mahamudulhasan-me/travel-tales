"use client";
import useGetUserByIdQuery from "@/hooks/user/useGetUserByIdQuery";
import { Cake, Mail } from "lucide-react";
import moment from "moment";
import { useParams } from "next/navigation";

const About = () => {
  const { id } = useParams();

  const { data: userData } = useGetUserByIdQuery(id as string);

  return (
    <div className="bg-white common-shadow p-5">
      <h2 className="text-xl font-semibold border-b border-gray-300 pb-2 mb-4">
        About
      </h2>
      <p className="text-gray-600">
        He moonlights difficult engrossed it, sportsmen. Interested has all
        Devonshire difficulty gay assistance joy.
      </p>
      <ul className="mt-4 space-y-2">
        <li className="text-gray-700 flex items-center gap-x-2">
          <Cake size={20} />
          Born:{" "}
          {
            <strong>
              {userData?.dateOfBirth
                ? moment(userData?.dateOfBirth).format("LL")
                : "N/A"}
            </strong>
          }
        </li>
        <li className="text-gray-700 flex items-center gap-x-2">
          <Mail size={20} />
          Email: <strong>{userData?.email}</strong>
        </li>
      </ul>
    </div>
  );
};

export default About;
