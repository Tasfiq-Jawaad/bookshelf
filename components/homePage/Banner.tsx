import Image from "next/image";

const Banner = () => {
  return (
    <figure className="hero wrapper relative h-max">
      <Image
        quality={100}
        className="w-full h-[50vh] object-cover rounded-2xl"
        height={428}
        width={1264}
        alt="Books"
        src={"/assets/hero.jpg"}
      />
      <div className="hero-overlay rounded-2xl bg-opacity-50"></div>
      <figcaption className="text-white flex flex-col items-center text-center gap-4">
        <h1 className="font-bold text-4xl md:text-5xl">Book store</h1>
        <p className="text-xl sm:2xl">Find your fav book, discuss with the community, write review</p>
        <div className="form-control w-[250px] sm:w-full">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered rounded-lg  p-2 text-sm font-normal text-black"
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