import Image from "next/image";

const Banner = () => {
  return (
    <div className="flex gap-3 px-3">
      <Image
        quality={100}
        className="m-auto w-full h-[428px] rounded-2xl"
        height={428}
        width={1264}
        alt="Books"
        src={"/assets/homeBanner1.jpg"}
      />

      <div className="grid gap-3">
        <div className="card col-span-2 h-52 bg-base-100 shadow-xl image-full">
          <figure>
            <Image height={208} width={588}
              src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card h-52 w-72 bg-base-100 shadow-xl image-full">
          <figure>
            <Image
            height={208} width={288}
              src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>

        <div className="card h-52 w-72 bg-base-100 shadow-xl image-full">
          <figure>
            <Image height={208} width={288}
              src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
