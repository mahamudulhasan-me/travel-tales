import Banner from "@/components/home/Banner";

export default function Home() {
  const login = true;
  return login && <Banner />;
}
