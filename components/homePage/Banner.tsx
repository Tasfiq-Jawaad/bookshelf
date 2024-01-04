import Image from "next/image";

const Banner = () => {
  return (
    // <figure className="hero wrapper relative h-max">
    //   <Image
    //     quality={100}
    //     className="object-cover rounded-2xl"
    //     height={428}
    //     width={1264}
    //     alt="Books"
    //     src={"/assets/hero.jpg"}
    //   />
    //   <div className="hero-overlay rounded-2xl bg-opacity-50"></div>
    <div
      style={{
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/assets/hero.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      className="text-white bg-cover flex flex-col items-center text-center gap-4 py-20 md:py-28 lg:py-36 xl:py-48 2xl:py-80 mx-2 md:mx-4 xl:mx-6 rounded-2xl"
    >
      <h1 className="font-bold text-4xl md:text-5xl">Book store</h1>
      <p className="text-xl sm:2xl">
        Find your fav book, discuss with the community, write review
      </p>
      <div className="form-control w-[250px] sm:w-full">
        <input
          type="text"
          placeholder="Search"
          className="input input-bordered rounded-lg m-auto w-full sm:w-4/5 p-2 text-sm font-normal text-black"
        />
      </div>
    </div>
    // /</figure>
  );
};

export default Banner;

{
  /* <figure className="relative w-full max-h-[70svh] px-3">
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
    </figure> */
}
