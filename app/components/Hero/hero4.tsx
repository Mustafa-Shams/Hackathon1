import Image from "next/image";
import { Button } from "@/components/ui/button"

export default function Hero4(){
    return(
        <div className="w-screen  mt-5 pt-5">
            <div className="flex flex-row justify-between items-center">
                <div className="flex flex-col justify-center items-center space-y-4" >
            <h1 className="font-bold text-[40px] text-center">50+ Beautiful rooms <br />
            inspiration</h1>
            <p>Our designer already made a lot of beautiful <br /> prototipe of rooms that inspire you</p>
            <Button className="bg-[#B88E2F]" size={"lg"}>Explore More</Button>
                </div>
                <div className="flex flex-row">
                    <div className="flex-row flex justify-center items-center relative">
                        <div className="bg-cover bg-center flex flex-col justify-center gap-5 items-center relative w-[404px] h-[582px]  rounded-md">
                          <div className="w-[404px] h-[582px]"><Image src={"/image11.png"} alt=",."   layout="fill" objectFit="cover" quality={100} className="-z-10 "/></div> 
                          <div className="flex flex-row bg-white bg-opacity-40 w-[217px] h-[130px]  justify-center items-center gap-5">
                                <div className="space-y-4 p-5  bg-white bg-opacity-40 w-[217px] h-[130px]">
                                    <h1>01 --- BedRoom</h1>
                                    <p className="font-semibold text-[28px]">Inner Peace</p>
                                </div>
                                <div className="w-[48px] h-[48px] flex justify-center items-center bg-[#B88E2F] mt-7">
                                <Image src={"/rightarrow.png"} alt="arrow" width={16} height={16} />
                                </div>
                          </div>
                          
                            </div>
                            </div>
                    <div className="flex flex-col justify-end items-end">
                      <div><Image src={"/image12.png"} alt="./" width={372} height={486} /></div>  
                    <div className="pt-[20px] self-start"><Image src={"/Indicator.png"} alt=",." width={120} height={27} /></div>
                    </div>
                </div>
                <div></div>
                <div className="w-[48px] h-[48px] bg-black flex justify-center items-center rounded-full">
                    <Image src={"/right.png"} alt=".."width={24} height={24} />
                </div>
            </div>
            {/* top div */}
        </div>
    )
}