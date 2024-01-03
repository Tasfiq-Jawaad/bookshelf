import Banner from "@/components/homePage/Banner";
import CardContainer from "@/components/homePage/CardContainer";
import CarouselCard from "@/components/homePage/CarouselCard";
import Hero from "@/components/homePage/Hero";
import IconCardContainer from "@/components/homePage/IconCardContainer";
import WideCard from "@/components/homePage/WideCard";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Banner />
      <section className="mt-10 px-16">
        <h2 className="px-6 lg:px-24 xl:px-4 py-6 text-2xl">
          Browse categories
        </h2>
        <CardContainer />
        <span className="flex justify-center pt-5">
          <Link href={"/Categories"}>
            <button className="btn m-auto justify-self-center">
              See all categories
            </button>
          </Link>
        </span>
      </section>
      <section className="mt-10">
        <h2 className="px-6 sm:px-16 py-6 text-2xl">Popular books</h2>
        <CarouselCard />
      </section>
      <section className="mt-10">
        <Hero />
      </section>
      <section className="mt-10 px-16">
        <h2 className="px-6 lg:px-24 xl:px-4 py-6 text-2xl">Best bundle</h2>
        <CardContainer />
        <span className="flex justify-center pt-5">
          <Link href={"/Search"}>
          <button className="btn m-auto justify-self-center">
            See all bundle
          </button>
          </Link>
        </span>
      </section>
      <section className="mt-10">
        <IconCardContainer />
      </section>
    </>
  );
}
