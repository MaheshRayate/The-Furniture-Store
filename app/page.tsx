import { Button } from "@/components/ui/button";
import Hero from "@/components/home/Hero";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import { Suspense } from "react";
import LoadingContainer from "@/components/global/LoadingContainer";

function Page() {
  return (
    <div>
      <Hero />

      <Suspense
        fallback={
          <div className="text-center text-green-600">
            <LoadingContainer />
          </div>
        }
      >
        <FeaturedProducts />
      </Suspense>
    </div>
  );
}

export default Page;
