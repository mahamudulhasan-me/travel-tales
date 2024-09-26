import { Input } from "@nextui-org/input";
import { Kbd } from "@nextui-org/kbd";

import { SearchIcon } from "../icons";

const HeroLanding = () => {
  return (
    <div className="h-[calc(100vh-4rem)] bg-[url('/images/banner2.jpg')] bg-cover bg-center bg-slate-900 bg-blend-overlay bg-opacity-50">
      {" "}
      <form
        action=""
        className="flex justify-center items-center w-1/2 mx-auto pt-20"
      >
        <Input
          aria-label="Search"
          classNames={{
            inputWrapper: "bg-default-100 h-12",
            input: "text-sm",
          }}
          endContent={
            <Kbd className="hidden lg:inline-block" keys={["command"]}>
              K
            </Kbd>
          }
          labelPlacement="outside"
          placeholder="Search..."
          startContent={
            <SearchIcon className="text-lg text-default-400 pointer-events-none flex-shrink-0" />
          }
          type="search"
        />
      </form>
    </div>
  );
};

export default HeroLanding;
