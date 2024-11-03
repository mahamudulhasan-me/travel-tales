import {
  BookCheck,
  CassetteTape,
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Telescope,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const teams = [
  {
    id: 1,
    name: "Leroy Jenkins",
    role: "CEO",
    image: "/images/teams/1.jpg",
  },
  {
    id: 2,
    name: "Dianne Russell",
    role: "CTO",
    image: "/images/teams/2.jpg",
  },
  {
    id: 3,
    name: "Sofia Cruz",
    role: "Software Engineer",
    image: "/images/teams/3.jpg",
  },
  {
    id: 4,
    name: "Esther Howard",
    role: "Software Engineer",
    image: "/images/teams/4.jpg",
  },
];

const AboutUsPage = () => {
  return (
    <section className="container my-5 mx-auto bg-white common-shadow p-5 rounded-md">
      <div className="w-full">
        {/* about us  */}
        <div className="grid md:grid-cols-2 gap-10 items-center justify-center">
          <aside>
            <h1 className="text-4xl font-semibold w-full text-left my-5 ">
              About Us
            </h1>
            <h1 className="text-3xl font-semibold">
              We Improve Your Travel Experience Day by Day with Travel Tales.{" "}
            </h1>
            <p className="text-gray-600 mt-5 text-justify">
              Welcome to Travel Tales, your ultimate platform for sharing and
              discovering travel stories from around the globe. We believe that
              every journey has a unique tale, and through this platform,
              travelers can connect, inspire, and learn from one another.
              Whether you’re a seasoned explorer or just starting your
              adventures, Travel Tales offers a space to share experiences, seek
              advice, and discover new destinations through the eyes of fellow
              travelers.
            </p>
            <div className="mt-5 flex items-center gap-x-10">
              <BookCheck size={32} />
              <article>
                <h1 className="text-xl font-semibold">Share Your Stories</h1>
                <p className="text-gray-600">
                  A platform where travelers share their personal adventures,
                  from exciting discoveries to valuable tips.
                </p>
              </article>
            </div>
            <div className="mt-5 flex items-center gap-x-10">
              <CassetteTape size={32} />
              <article>
                <h1 className="text-xl font-semibold">
                  Connect with Travelers
                </h1>
                <p className="text-gray-600">
                  Join a community of like-minded explorers, exchanging
                  experiences and advice to enrich your travel plans.
                </p>
              </article>
            </div>
            <div className="my-5 flex items-center gap-x-10">
              <Telescope size={32} />
              <article>
                <h1 className="text-xl font-semibold">
                  Explore New Destinations
                </h1>
                <p className="text-gray-600">
                  Discover hidden gems and off-the-beaten-path destinations
                  through real stories from fellow travelers.
                </p>
              </article>
            </div>
          </aside>
          <aside className="relative">
            <figure className="ml-20">
              <Image
                src="/images/traveller.jpg"
                alt="space"
                width={700}
                height={700}
              />
            </figure>
            <Image
              src="/images/traveller-2.jpg"
              alt="space"
              width={280}
              height={250}
              className="absolute -bottom-10 left-0 rounded-md"
            />
            <div className="absolute bg-primary text-white -top-10 -right-3 common-shadow p-2 rounded-md">
              <figure className="size-10 bg-white flex justify-center items-center rounded-md">
                <Users color="#2563eb" />
              </figure>
              <h1 className="text-lg font-semibold">
                {" "}
                10K People <br />
                Choose Travel Tales
              </h1>
            </div>
          </aside>
        </div>

        {/* our vision */}

        <div className="grid md:grid-cols-2 gap-10 items-center justify-center my-20">
          <aside>
            <Image
              src="/images/2147732544.jpg"
              alt="space"
              width={700}
              height={700}
              className="rounded-md"
            />
          </aside>
          <aside>
            <h1 className="text-3xl font-semibold">Our Mission</h1>
            <p className="text-gray-600 mt-5 text-justify">
              At Travel Tales, our mission is to connect and empower travelers
              by fostering a space where stories, insights, and travel wisdom
              can be shared. We want to inspire curiosity and exploration,
              helping everyone feel more confident and prepared to embark on
              their own adventures.
            </p>
            <div className="mt-5">
              <h6 className="uppercase font-semibold border-b">
                Our mission focuses on:
              </h6>
              <ul className="text-gray-800 mt-4 space-y-2">
                <li>
                  🌍 <strong>Inspiring Exploration</strong>: Encourage travelers
                  to discover new destinations through shared stories.
                </li>
                <li>
                  🗺️ <strong>Building Community</strong> : Connect like-minded
                  travelers to exchange advice, tips, and experiences.
                </li>
                <li>
                  ✈️ <strong>Empowering Travelers</strong> : Provide reliable
                  and practical travel tips to help you plan and explore
                  confidently.
                </li>
                <li>
                  🌟 <strong>Highlighting Unique Experiences</strong>: Share
                  off-the-beaten-path destinations and experiences that make
                  each journey memorable.
                </li>
              </ul>
            </div>
          </aside>
        </div>

        {/*our team  */}
        <div className="w-full">
          <h1 className="text-3xl font-semibold text-center">Meet Our Team</h1>
          <p className="text-gray-600  text-center md:w-1/2 mx-auto">
            A passionate group of travelers and storytellers dedicated to
            bringing you the best travel experiences, tips, and inspiration from
            around the globe. 🌍✈️ Together, we work to build a community that
            connects and empowers adventurers everywhere.
          </p>
          <div className="grid md:grid-cols-4 gap-10 mt-10">
            {teams.map((team) => (
              <div
                key={team.id}
                className="flex flex-col justify-center max-w-xs p-6 shadow-md rounded-xl sm:px-12 bg-gray-100  text-gray-100"
              >
                <Image
                  width={150}
                  height={150}
                  src={team.image}
                  alt=""
                  className="w-32 h-32 mx-auto rounded-full  aspect-square"
                />
                <div className="space-y-4 text-center divide-y  divide-gray-700">
                  <div className="my-2 space-y-1">
                    <h2 className="text-xl text-slate-950 font-semibold sm:text-2xl">
                      {team.name}
                    </h2>
                    <p className="text-xs font-semibold sm:text-base  text-gray-900">
                      {team.role}
                    </p>
                  </div>
                  <div className="w-full flex justify-center items-center pt-2 space-x-4 mt-2">
                    <Link
                      rel="noopener noreferrer"
                      href="#"
                      aria-label="GitHub"
                      className="text-primary"
                    >
                      <Github />
                    </Link>
                    <Link
                      rel="noopener noreferrer"
                      href="#"
                      aria-label="Facebook"
                      className="text-primary"
                    >
                      <Facebook />
                    </Link>
                    <Link
                      rel="noopener noreferrer"
                      href="#"
                      aria-label="Instagram"
                      className="text-primary"
                    >
                      <Instagram />
                    </Link>
                    <Link
                      rel="noopener noreferrer"
                      href="#"
                      aria-label="LinkedIn"
                      className="text-primary"
                    >
                      <Linkedin />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsPage;
