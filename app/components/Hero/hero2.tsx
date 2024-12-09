import Image from "next/image";

export default function Hero2(){
    return(
        <div className="w-screen pt-[25px]">
            <h1 className="text-center font-bold text-[32px]">Browse The Range</h1>
            <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="pt-[20px] flex flex-col md:flex-row lg:flex-row  justify-between items-center" >
                    <div className="flex flex-col ">
                        <Image src={"/image1.png"} alt="image1" width={361} height={480} />
                        <h1 className="font-semibold text-[24px] text-center pt-2">Dining</h1>
                    </div>
                    <div className="flex flex-col">
                        <Image src={"/image2.png"} alt="image2" width={361} height={480} />
                        <h1 className="font-semibold text-[24px] text-center pt-2">Living</h1>
                    </div>
                    <div className="flex flex-col">
                        <Image src={"/image3.png"} alt="image3" width={361} height={480} />
                        <h1 className="font-semibold text-[24px] text-center pt-2">Bedroom</h1>
                    </div>
            </div>
            {/* top div */}
        </div>
    )
}