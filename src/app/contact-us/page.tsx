import PageCover from "@/components/pageCover/PageCover";
import Footer from "@/components/shared/Footer";
import {
  Facebook,
  MapPinHouse,
  Phone,
  Send,
  Twitter,
  Youtube,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ContactUsPage = () => {
  return (
    <div className="bg-white overflow-hidden">
      <PageCover title="Contact Us" image="/images/about-2.jpg" />
      <section className="w-full h-[calc(100vh-4rem)] container mx-auto md:px-0 py-20 px-5">
        <div
          className="grid md:grid-cols-2 
    items-center justify-center gap-10 "
        >
          <aside className="bg-white common-shadow p-5 rounded-md">
            <h1 className="text-3xl font-semibold">Get in Touch</h1>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor
              sit amet, consectetur adipiscing.
            </p>

            <form className="w-full mt-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  className="input-style w-full"
                  placeholder="Enter Your Name"
                />
                <input
                  type="text"
                  className="input-style w-full"
                  placeholder="Enter Your Name"
                />
              </div>
              <textarea
                name=""
                id=""
                className="input-style w-full"
                cols={30}
              />

              <button className="w-full bg-primary text-white py-3 rounded font-semibold">
                Send Message
              </button>
            </form>
          </aside>
          <aside className=" bg-white common-shadow p-5 rounded-md">
            <div className="grid grid-cols-2">
              <div>
                <h1 className="text-2xl font-semibold">Get The App:</h1>
                <button className="mt-6 flex items-center justify-start gap-x-2 bg-violet-100 rounded-md font-semibold px-4 py-1">
                  <Image
                    src={"/icons/play-store.png"}
                    width={40}
                    height={40}
                    alt={"play-store"}
                  />
                  <h3 className="w-full flex flex-col items-center justify-start gap-x-2">
                    <p className="text-xs uppercase font-semibold">Get IT ON</p>
                    <p> Google Play</p>
                  </h3>
                </button>
                <button className="mt-4 flex items-center justify-start gap-x-2 bg-violet-100 rounded-md font-semibold px-6 py-2">
                  <Image
                    src={"/icons/app-store.png"}
                    width={40}
                    height={40}
                    alt={"play-store"}
                  />
                  <h3 className="w-full flex flex-col items-center justify-start gap-x-2">
                    <p className="text-xs uppercase font-semibold">Get IT ON</p>
                    <p>App Store</p>
                  </h3>
                </button>
              </div>
              <div>
                <h1 className="text-2xl font-semibold mb-6">Contacts:</h1>

                <div className="text-slate-900 space-y-4">
                  <p className="flex items-center gap-x-2">
                    <Phone size={18} /> +8801710648088
                  </p>
                  <p className="flex items-center gap-x-2">
                    <Send size={18} /> admin@traveltales.com
                  </p>
                  <p className="flex items-center gap-x-2">
                    <MapPinHouse size={18} />
                    Uttara, Dhaka-1230, Bangladesh
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2  items-center  border-t-2 mt-12">
              <div className="flex gap-x-4 mt-4">
                <button className="size-12 bg-primary text-white py-3 rounded-full flex justify-center items-center font-semibold shadow-md">
                  <Facebook />
                </button>
                <button className="size-12 bg-primary text-white py-3 rounded-full flex justify-center items-center font-semibold shadow-md">
                  <Twitter />
                </button>
                <button className="size-12 bg-primary text-white py-3 rounded-full flex justify-center items-center font-semibold shadow-md">
                  <Youtube />
                </button>
              </div>
              <p className="text-slate-900 mt-4">
                © 2024. Travel Tales. <Link href="#">Privacy Policy</Link>
              </p>
            </div>
          </aside>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ContactUsPage;
