"use client";
import { useUser } from "@/context/userProvider";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import BannerPage from "./_components/Banner";

const ExplorePage = () => {
  const { user } = useUser();
  const navigate = useRouter();

  useEffect(() => {
    if (user) {
      navigate.push("/");
    } else {
      navigate.push("/explore");
    }
  }, [navigate, user]);

  return (
    <div>
      <BannerPage />
    </div>
  );
};

export default ExplorePage;
//  <SignInFormModal explore={true} />
