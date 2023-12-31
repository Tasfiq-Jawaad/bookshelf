import Image from "next/image";
import Link from "next/link";

const WideCard = () => {
  return (
    <li className="list-none">
      <Link href={"/"}>
        <div className="card card-compact w-96 bg-base-100 shadow-xl pt-5 border border-solid ">
          <figure>
            <Image
              className="w-full aspect-square object-cover"
              width="928"
              height="928"
              src="/assets/book1.png"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Novels</h2>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default WideCard;
