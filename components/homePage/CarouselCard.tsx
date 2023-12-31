import Link from "next/link";
import Card from "./Card";
import Image from "next/image";

const CarouselCard = () => {
  return (
    <div>
      <ul className="grid grid-flow-col gap-2 sm:gap-5 md:gap-10 pt-6 pb-16 px-16 overflow-hidden overflow-x-auto overscroll-x-contain snap-mandatory snap-x *:snap-center">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </ul>
    </div>
  );
};

export default CarouselCard;
