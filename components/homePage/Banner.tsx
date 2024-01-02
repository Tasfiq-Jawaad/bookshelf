import Image from "next/image";

const Banner = () => {
  return (
    <figure className="px-3 relative max-h-[70svh]">
      <Image
        quality={100}
        className="w-full h-[70svh] object-cover rounded-2xl"
        height={428}
        width={1264}
        alt="Books"
        src={"/assets/homeBanner1.jpg"}
      />
      <figcaption className="absolute bottom-0 flex flex-col justify-end px-[5%] gap-4 bg-gray-800 bg-opacity-50 w-[calc(100%-24px)] h-[70svh] rounded-2xl text-white">
        <h1 className="text-5xl">Book store</h1>
        <p className="text-2xl">Find your fav book, discuss with the community, write review</p>
        <div className="form-control w-52 mb-20">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-full"
            />
          </div>
      </figcaption>
    </figure>
  );
};

export default Banner;

{/* <figure className="relative w-full max-h-[70svh] px-3">
      <Image
        quality={100}
        className="m-auto w-full h-full rounded-2xl"
        height={428}
        width={1264}
        alt="Books"
        src={"/assets/homeBanner1.jpg"}
      />
      <figcaption className="absolute top-0 w-full h-full bg-gray-800 bg-opacity-50 rounded-2xl">
        <h1>Find your fav book, discuss with the community, write review</h1>
      </figcaption>
    </figure> */}
