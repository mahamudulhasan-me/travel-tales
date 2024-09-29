import Image from "next/image";
import BtnExplore from "../ui/buttons/BtnExplore";

const Banner = () => {
  return (
    <section className=" container mx-auto  px-5 h-[calc(100vh-5rem)] flex justify-between items-center">
      <aside className="flex flex-col gap-y-5">
        <h1 className="text-8xl  leading-tight">
          Discover <br /> Hidden Gems!
        </h1>
        <h3 className="text-xl text-gray-700">
          A place to read, write, and deepen your understanding.
        </h3>
        <BtnExplore />
      </aside>
      <figure className="absolute right-0">
        <Image
          src={"/images/undraw_adventure_re_ncqp.svg"}
          alt="banner image"
          width={800}
          height={800}
        />
      </figure>
    </section>
  );
};

export default Banner;
