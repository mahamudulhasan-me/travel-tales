import Banner from "@/components/home/Banner";

export default function Home() {
  const login = false;
  return login && <Banner />;
}
