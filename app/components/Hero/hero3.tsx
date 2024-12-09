import Image from "next/image";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
  } from "@/components/ui/card"
  import { Button } from "@/components/ui/button"



export default function Hero3(){
    return(
        <div className="w-screen pt-[20px]">
          <h1 className="text-[40px] font-bold text-center">Our Products</h1>
          <div className="flex flex-col gap-6">
            {/* 1st card row */}
            <div className="flex flex-col md:flex-row lg:flex-row justify-between items-center ">
            {/* 1st card */}
            <div>
                <Card className="bg-[#F4F5F7]">
                    <CardHeader>
                        <Image src={"/image 4.png"} alt="image-4" width={285} height={301} />
                    </CardHeader>
                    <CardContent >
                        <CardDescription>
                            <div className="space-y-4">
                            <h1 className="font-semibold text-[24px] text-black">Syltherine</h1>
                            <p className="text-gray-400">Stylish cafe chair</p>
                            </div>
                        </CardDescription>
                    </CardContent>
                    <CardFooter className="mb-3">
                        <div className="flex flex-row gap-3">
                        <h1 className="font-semibold text-[20px]">Rp 2.500.000</h1>
                        <h1 className="text-gray-400 line-through self-center">Rp 3.500.000</h1>
                        </div>
                    </CardFooter>
                </Card>
                {/* 1st card */}
            </div>
            {/* 2nd card div */}
           <div className="bg-cover bg-center flex justify-center items-center relative w-[285px] h-[500px] rounded-md">
           <div  className="bg-black blur-[6px]"></div>
           <div className="flex flex-col bg-black bg-opacity-40 w-[295px] h-[500px] justify-center items-center gap-5">
                <div ><Button className="bg-white text-black" size={"lg"}>Add To Cart</Button></div>
                <div className="flex flex-row gap-6">
                <div className="flex flex-row">
                   <div> <Image src={"/share.png"} alt="share" width={16} height={16} /></div>
                    Share
                </div>
                <div className="flex flex-row">
                   <div><Image src={"/shuffle.png"} alt="shuffel" width={16} height={16} /></div> 
                    Compare
                </div>
                <div className="flex flex-row">
                  <div> <Image src={"/Heart.png"} alt="like" width={16} height={16} /></div> 
                    Like 
                </div>
                </div>
           </div>
           </div>
           {/* 3rd card */}
           <div>
                <Card className="bg-[#F4F5F7]">
                    <CardHeader>
                        <Image src={"/image5.png"} alt="image-5" width={285} height={301} />
                    </CardHeader>
                    <CardContent >
                        <CardDescription>
                            <div className="space-y-4">
                            <h1 className="font-semibold text-[24px] text-black">lolito</h1>
                            <p className="text-gray-400">Luxury Big sofa</p>
                            </div>
                        </CardDescription>
                    </CardContent>
                    <CardFooter className="mb-3">
                        <div className="flex flex-row gap-3">
                        <h1 className="font-semibold text-[20px]">Rp 7.000.000</h1>
                        <h1 className="text-gray-400 line-through self-center">Rp 14.000.000</h1>
                        </div>
                    </CardFooter>
                </Card>
                {/* 3nd card */}
                
            </div>
              {/* 4th card */}
              <div className="hidden md:flex lg:flex">
                <Card className="bg-[#F4F5F7]">
                    <CardHeader>
                        <Image src={"/Image6.png"} alt="image-6" width={285} height={301} />
                    </CardHeader>
                    <CardContent >
                        <CardDescription>
                            <div className="space-y-4">
                            <h1 className="font-semibold text-[24px] text-black">Respira</h1>
                            <p className="text-gray-400">Outdoor bar table and stool</p>
                            </div>
                        </CardDescription>
                    </CardContent>
                    <CardFooter className="mb-3">
                        <div className="flex flex-row gap-3">
                        <h1 className="font-semibold text-[20px]">Rp 500.000</h1>
                        {/* <h1 className="text-gray-400 line-through self-center">Rp 14.000.000</h1> */}
                        </div>
                    </CardFooter>
                </Card>
                {/* 4th card */}
                
            </div>
                {/* 1st card row div */}
            </div>
            {/* 2nd card row */}
            <div className=" hidden md:flex lg:flex md:flex-row lg:flex-row justify-between items-center ">
            {/* 1st card */}
            <div>
                <Card className="bg-[#F4F5F7]">
                    <CardHeader>
                        <Image src={"/Image7.png"} alt="image-4" width={285} height={301} />
                    </CardHeader>
                    <CardContent >
                        <CardDescription>
                            <div className="space-y-4">
                            <h1 className="font-semibold text-[24px] text-black">Griffo</h1>
                            <p className="text-gray-400">Night Lamp</p>
                            </div>
                        </CardDescription>
                    </CardContent>
                    <CardFooter className="mb-3">
                        <div className="flex flex-row gap-3">
                        <h1 className="font-semibold text-[20px]">Rp 1.500.000</h1>
                        {/* <h1 className="text-gray-400 line-through self-center">Rp 3.500.000</h1> */}
                        </div>
                    </CardFooter>
                </Card>
                {/* 1st card */}
            </div>
            {/* 2nd card div */}
            <div>
                <Card className="bg-[#F4F5F7]">
                    <CardHeader>
                        <Image src={"/image8.png"} alt="image-4" width={285} height={301} />
                    </CardHeader>
                    <CardContent >
                        <CardDescription>
                            <div className="space-y-4">
                            <h1 className="font-semibold text-[24px] text-black">Muggo</h1>
                            <p className="text-gray-400">Small Mug</p>
                            </div>
                        </CardDescription>
                    </CardContent>
                    <CardFooter className="mb-3">
                        <div className="flex flex-row gap-3">
                        <h1 className="font-semibold text-[20px]">Rp 150.000</h1>
                        {/* <h1 className="text-gray-400 line-through self-center">Rp 3.500.000</h1> */}
                        </div>
                    </CardFooter>
                </Card>
                {/* 2nd card */}
            </div>
           {/* 3rd card */}
           <div>
                <Card className="bg-[#F4F5F7]">
                    <CardHeader>
                        <Image src={"/Image9.png"} alt="image-5" width={285} height={301} />
                    </CardHeader>
                    <CardContent >
                        <CardDescription>
                            <div className="space-y-4">
                            <h1 className="font-semibold text-[24px] text-black">Pingky</h1>
                            <p className="text-gray-400">Cute Bed Set</p>
                            </div>
                        </CardDescription>
                    </CardContent>
                    <CardFooter className="mb-3">
                        <div className="flex flex-row gap-3">
                        <h1 className="font-semibold text-[20px]">Rp 7.000.000</h1>
                        <h1 className="text-gray-400 line-through self-center">Rp 14.000.000</h1>
                        </div>
                    </CardFooter>
                </Card>
                {/* 3nd card */}
                
            </div>
              {/* 4th card */}
              <div className="hidden md:flex lg:flex">
                <Card className="bg-[#F4F5F7]">
                    <CardHeader>
                        <Image src={"/Image10.png"} alt="image-6" width={285} height={301} />
                    </CardHeader>
                    <CardContent >
                        <CardDescription>
                            <div className="space-y-4">
                            <h1 className="font-semibold text-[24px] text-black">Potty</h1>
                            <p className="text-gray-400">Minimalist flower pot</p>
                            </div>
                        </CardDescription>
                    </CardContent>
                    <CardFooter className="mb-3">
                        <div className="flex flex-row gap-3">
                        <h1 className="font-semibold text-[20px]">Rp 500.000</h1>
                        {/* <h1 className="text-gray-400 line-through self-center">Rp 14.000.000</h1> */}
                        </div>
                    </CardFooter>
                </Card>
                {/* 4th card */}
                
            </div>
                {/* 1st card row div */}
            </div>
            {/* cards div */}
          </div>
        <div className="flex justify-center items-center pt-[20px]"><Button size={"lg"} className="self-center border-[#B88E2F] text-[#B88E2F] " variant={"outline"}>Show More</Button></div>  
            {/* top div */}
        </div>
    )
}