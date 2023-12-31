import Banner from "@/components/homePage/Banner";
import CardContainer from "@/components/homePage/CardContainer";
import CarouselCard from "@/components/homePage/CarouselCard";
import WideCard from "@/components/homePage/WideCard";

export default function Home() {
  return (
    <>
      <Banner />
      <section className="mt-10">
        <h2 className="px-6 sm:px-16 py-6 text-2xl">Browse categories</h2>
        <CardContainer />
        <span className="flex justify-center pt-5">
          <button className="btn m-auto justify-self-center">
            See all categories
          </button>
        </span>
      </section>
      <section className="mt-10">
        <h2 className="px-6 sm:px-16 py-6 text-2xl">Popular books</h2>
        <CarouselCard />
      </section>
    </>
  );
}
