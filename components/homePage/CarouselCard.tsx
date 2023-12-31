import Link from "next/link";
import Card from "./Card";
import Image from "next/image";

const CarouselCard = () => {
  return (
    <div className="grid grid-flow-col gap-2 px-2 overflow-hidden overflow-x-auto overscroll-x-contain snap-mandatory snap-x *:snap-center">
      <ul>
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
