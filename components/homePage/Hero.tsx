import Image from "next/image";

const Hero = () => {
  return (
    <figure className="flex flex-col sm:flex-row px-4 w-4/5 m-auto">
        <div className="w-full sm:order-last sm:sm:w-1/2">
          <Image
            width={"400"}
            height={"300"}
            src="/assets/hero.jpg"
            alt="banner"
            className="rounded-t-xl w-full sm:rounded-none sm:rounded-e-xl object-cover sm:h-full"
          />
        </div>
        <figcaption className="bg-blue-800 text-white px-4 md:px-7 lg:px-10 pt-4 rounded-b-xl sm:rounded-none sm:rounded-s-xl sm:w-1/2 sm:flex sm:flex-col justify-center sm:gap-4 *:mb-4">
          <h2 className="text-3xl font-bold  md:text-5xl lg:text-7xl">
            Great deal!!!
          </h2>
          <p className="text-2xl">Save money with great deal Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem, nam.</p>
          <button className="btn w-max text-2xl">Save money</button>
        </figcaption>
      </figure>
  );
};

export default Hero;

{/* <figure className="relative sm:flex w-4/5 h-min bg-base-200 m-auto rounded-xl">
        <div className="w-full relative sm:w-1/2 order-last">
          <Image
            width={"400"}
            height={"300"}
            src="/assets/hero.jpg"
            alt="banner"
            className="w-full rounded-xl sm:rounded-s-none sm:rounded-e-xl shadow-2xl object-cover aspect-[4/3]"
          />
        </div>
        <figcaption className="bg-gray-800 bg-opacity-50 sm:bg-transparent text-white sm:text-black h-full sm:h-auto rounded-xl absolute top-0 w-full sm:w-1/2 px-3 sm:px-10 sm:static flex flex-col justify-center gap-2 sm:gap-4">
          <h2 className="text-3xl font-bold  md:text-5xl lg:text-7xl">
            Great deal!!!
          </h2>
          <p className="text-2xl">Save money with great deal</p>
          <button className="btn btn-primary w-max text-2xl">Save money</button>
        </figcaption>
      </figure> */}
