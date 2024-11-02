import { SignInFormModal } from "@/app/_authentication/SignInFormModal";
import { InView } from "@/components/core/InView";
import { TextEffect } from "@/components/core/TextEffect";
import Image from "next/image";

const ExplorePage = () => {
  return (
    <section className="container mx-auto px-5 h-[calc(100vh-5rem)] flex flex-col-reverse md:flex-row md:justify-between justify-evenly items-center">
      <aside className="flex flex-col gap-y-6">
        <div>
          <TextEffect
            per="char"
            preset="fade"
            className="md:text-8xl text-5xl leading-tight"
          >
            Discover
          </TextEffect>
          <TextEffect
            delay={0.5}
            per="char"
            preset="blur"
            className="md:text-8xl text-5xl leading-tight"
          >
            Hidden Gems!
          </TextEffect>
        </div>
        <TextEffect
          delay={1}
          per="word"
          preset="fade"
          className="text-xl text-gray-700"
        >
          A place to read, write, and deepen your understanding.
        </TextEffect>
        <InView
          variants={{
            hidden: {
              opacity: 0,
              y: 30,
              scale: 0.95,
              filter: "blur(4px)",
            },
            visible: {
              opacity: 1,
              y: 0,
              scale: 1,
              filter: "blur(0px)",
            },
          }}
          transition={{ duration: 1, ease: "easeInOut" }}
          viewOptions={{ margin: "0px 0px -150px 0px" }}
        >
          <SignInFormModal explore={true} />
        </InView>
      </aside>
      <figure className="md:absolute md:right-0">
        <InView
          variants={{
            hidden: {
              opacity: 0,
              x: 100,
            },
            visible: {
              opacity: 1,
              x: 0,
            },
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          viewOptions={{ margin: "0px 0px -350px 0px" }}
        >
          <Image
            src={"/images/undraw_adventure_re_ncqp.svg"}
            alt="banner image"
            width={800}
            height={800}
          />
        </InView>
      </figure>
    </section>
  );
};

export default ExplorePage;
