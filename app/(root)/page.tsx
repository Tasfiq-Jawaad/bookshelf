import Banner from "@/components/homePage/Banner";
import CardContainer from "@/components/homePage/CardContainer";
import CarouselCard from "@/components/homePage/CarouselCard";
import WideCard from "@/components/homePage/WideCard";

export default function Home() {
  return (
    <>
      <Banner />
      <div className="mt-10">
        <h2 className="px-6 sm:px-16 pt-6 text-2xl">Popular books</h2>
        <CarouselCard />
      </div>
      <CardContainer/>
    </>
  );
}
