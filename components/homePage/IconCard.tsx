import Image from "next/image"

const IconCard = () => {
  return (
    <div className="flex justify-center">
        <figure className="flex flex-col w-4/5 gap-4 px-2 items-center">
            <Image
            width={30}
            height={30}
                src={"/assets/truck-solid.svg"}
                alt="delivery"
                className="w-20"
            />

            <figcaption className="text-center text-wrap *:mb-4">
                <h3 className="font-extrabold text-2xl">Fast delivery</h3>
                <p className="text-xl">7 days a week, at a time that suits you</p>
            </figcaption>
        </figure>
    </div>
  )
}

export default IconCard