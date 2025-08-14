import { Star } from "lucide-react";
import Image from "next/image";

const TotalTrustedUser = () => {
  return (
    <div className="flex items-center ml-8 md:gap-2 gap-8">
      <figure className="flex items-center">
        {Array.from({ length: 4 }).map((_, index) => (
          <Image
            key={index}
            src={`https://imagetoaiart.com/public/img/users/user-${
              index + 1
            }.png`}
            alt={`User ${index + 1}`}
            width={50}
            height={50}
            className="rounded-full size-10 ring ring-primary -ml-4"
          />
        ))}
      </figure>
      <div>
        <p className="flex items-center gap-x-1">
          {Array.from({ length: 5 }).map((_, index) => (
            <Star
              key={index}
              size={18}
              fill="#ff9900"
              className="text-[#ff6c1e]"
            />
          ))}
        </p>
        <p className="text-gray-600 text-sm">
          Trusted by more than 2,00,000 users across the globe
        </p>
      </div>
    </div>
  );
};

export default TotalTrustedUser;
