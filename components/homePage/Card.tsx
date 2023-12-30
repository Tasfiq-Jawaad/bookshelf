import Image from "next/image";
import Link from "next/link";

const Card = () => {
  return (
    <li className="list-none">
      <Link style={{textDecoration: "none"}} className="text-" href={"/"}>
        <span className="card w-[280px] bg-base-100 shadow-2xl">
          <figure className="">
            <Image className="h-[180px] w-auto"
              width="928"
              height="548"
              src="/assets/book1.png"
              alt="Shoes"
            />
          </figure>
          <div className="card-body w-fit">
            <h4 className="card-title">
              Books
              <span>
                <small className="badge badge-outline text-red-600">
                  15% off
                </small>
              </span>
            </h4>
            <div className="card-actions justify-start items-center">
              <div className="text-xl">£17</div>
              <div className="text-base">Was: £20</div>
            </div>
          </div>
        </span>
      </Link>
    </li>
  );
};

export default Card;
