import { Cake, Mail } from "lucide-react";

const About = () => {
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
          Born: <strong>October 20, 2000</strong>
        </li>
        <li className="text-gray-700 flex items-center gap-x-2">
          <Mail size={20} />
          Email: <strong>mahamudulhasan.org@gmail.com</strong>
        </li>
      </ul>
    </div>
  );
};

export default About;
