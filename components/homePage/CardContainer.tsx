import WideCard from "./WideCard";

const CardContainer = () => {
  return (
    <section className="flex justify-center m-auto">
      <ul className="flex flex-wrap w-full gap-y-3 px-4 gap-2 *:m-auto justify-between">
        <WideCard />
        <WideCard />
        <WideCard />
        <WideCard />
      </ul>
    </section>
  );
};

export default CardContainer;
