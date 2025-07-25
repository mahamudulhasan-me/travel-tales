import { SignInFormModal } from "@/app/_authentication/SignInFormModal";
import TotalTrustedUser from "@/components/ui/TrustUser";
import SendIcon from "@/helper/icons/SendIcon";
import Image from "next/image";

const Banner = () => {
  return (
    <div
      style={{
        backgroundImage: `
        radial-gradient(circle at 30% 70%, rgba(173, 216, 230, 0.35), transparent 60%),
        radial-gradient(circle at 70% 30%, rgba(255, 182, 193, 0.4), transparent 60%)`,
      }}
      className="w-full h-full bg-gray-50 relative"
    >
      <div className=" min-h-screen pt-28 container mx-auto px-5 flex flex-col justify-center items-center">
        <h1 className="lg:text-6xl text-4xl font-semibold text-center flex mt-20">
          Every Journey Has a Story <br /> Share Yours <SendIcon />
        </h1>
        <h6 className="text-center text-base text-gray-600 mt-2 font-normal lg:text-xl">
          Discover real adventures, inspire future travels, and connect with a
          global tribe of explorers.
        </h6>
        <div className="w-full flex md:flex-row flex-col gap-y-2 items-center justify-center my-8">
          <SignInFormModal explore /> <TotalTrustedUser />
        </div>
        <div className="w-full flex lg:flex-row flex-col  items-center justify-center gap-5">
          <Image
            src="/images/banner/phone.png"
            alt="cover"
            width={1080}
            height={1080}
            className="2xl:w-[360px] xl:w-[320px] w-[300px]"
          />
          <Image
            src="/images/banner/laptop.png"
            alt="cover"
            width={1080}
            height={1080}
            className="2xl:w-[800px] xl:w-[750px]"
          />
        </div>
      </div>

      <div className="absolute top-0 -left-20 w-full h-full">
        <Image
          src="/images/home/star.svg"
          alt="cover"
          width={1080}
          height={1080}
          className="h-[500px] blur-3xl opacity-30 w-auto"
        />
      </div>
    </div>
  );
};

export default Banner;
