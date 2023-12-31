import Image from "next/image";
import Link from "next/link";

const WideCard = () => {
  return (
    <li className="list-none">
      <Link href={"/Search"}>
        <div className="card card-compact bg-base-100  p-5  w-full sm:w-min">
          <figure>
            <Image
              className="max-w-full sm:max-w-[265px] md:max-w-[310px] lg:max-w-[360px] xl:max-w-[272px] 2xl:max-w-[271px] aspect-square object-cover rounded-2xl"
              width="928"
              height="928"
              src="/assets/homeBanner1.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="px-0 text-center">
            <h2 className="font-semibold text-xl px-0 pt-5 my-0">Novels</h2>
          </div>
        </div>
      </Link>
    </li>
    
  );
};

export default WideCard;
