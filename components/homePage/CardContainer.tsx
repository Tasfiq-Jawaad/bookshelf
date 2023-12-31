import WideCard from "./WideCard";

const CardContainer = () => {
  return (
    <div>
      <ul className="grid sm:place-content-between sm:grid-cols-[min-content_min-content] lg:px-24 xl:px-4 xl:grid-cols-[repeat(4,_min-content)] w-full gap-y-3 px-4 gap-2">
        <WideCard />
        <WideCard />
        <WideCard />
        <WideCard />
      </ul>
    </div>
  );
};

export default CardContainer;
