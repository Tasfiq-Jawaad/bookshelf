import Image from "next/image";

const Banner = () => {
  return (
    <figure className="hero place-items-start wrapper relative h-max ">
      <Image
        quality={100}
        className="w-full aspect-[10/4] object-cover rounded-2xl"
        height={428}
        width={1264}
        alt="Books"
        src={"/assets/hero.jpg"}
      />
      <div className="hero-overlay rounded-2xl bg-opacity-50"></div>
      <figcaption className="absolute w-[calc(100%-8px)] sm:w-max bottom-2 flex flex-col justify-end px-2 gap-1 rounded-2xl text-white">
        <h1 className="text-sm sm:text-5xl font-bold">Book store</h1>
        <p className="text-sm">Find your fav book, discuss with the community, write review</p>
        <div className="form-control w-full">
            <input
              type="text"
              placeholder="Search"
              className="border-none outline-none rounded-lg w-full p-2 text-sm font-normal text-black"
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