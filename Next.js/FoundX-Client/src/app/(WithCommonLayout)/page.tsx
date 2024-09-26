import { Suspense } from "react";

import HeroLanding from "@/src/components/home/HeroLanding";
import RecentPosts from "@/src/components/home/RecentPosts";

export default function Home() {
  return (
    <section>
      <HeroLanding />
      <Suspense fallback="Loading...">
        <RecentPosts />
      </Suspense>
    </section>
  );
}
