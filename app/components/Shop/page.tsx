import Image from "next/image";
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
  } from "@/components/ui/card"
import Header from "../Header/header";
import Footer from "../Footer/footer";
import Link from "next/link";


export default function Shop (){
    return(
        <div className="w-screen">
                <Header></Header>
                <div className="bg-cover bg-center flex h-[316px] justify-center items-center relative">
                <div className=""  ><Image src={"/banner1.png"} alt="benner"   layout="fill" objectFit="cover" quality={100} className="-z-10"/></div>
                <div className="flex flex-col    ">
            <div className="flex-col justify-center items-center">
                
                <h1 className="text-black font-bold text-[52px]">Shop</h1>
                <p className="tracking-wide whitespace-pre-line text-balance text-black ">Home / Shop</p>
          
            </div>
            </div>
               </div>

               <div className=" flex flex-row bg-[#F9F1E7] justify-between items-center py-5 px-5">
                <div className="flex flex-row gap-5">
                <div className="flex flex-row">
                    <div><Image src={"/filter.png"} alt="filter" width={25} height={25} /></div>
                    <div className="pl-3"><h1 className="font-semi-bold">Filter</h1></div>
                </div>
                <div className="flex flex-row">
                    <div><Image src={"/grid.png"} alt="gird" width={28} height={28} /></div>
                    
                </div>
                <div>
                    <div><Image src={"/list.png"} alt="list" width={24} height={24} /></div>
                </div>
                <h1>|</h1>
                <h1> Showing 1-16 of 32 Result</h1>
                </div>

                <div className="flex flex-row gap-3">
                    <div className="flex flex-row gap-3">
                        <h1 className="flex flex-row items-center justify-center">Show</h1>
                        <h1 className="bg-white flex flex-row w-[55px] h-[55px] text-gray-300 rounded-md text-center justify-center items-center">16</h1>
                    </div>
                    <div className="flex flex-row gap-3">
                            <h1 className="flex flex-row items-center justify-center">Sort By</h1>
                            <h1 className="pr-5 text-gray-300 flex flex-row bg-white w-[188px] h-[55px] rounded-md text-center justify-center items-center">
                                Default
                            </h1>
                    </div>
                </div>

               </div>
               {/* cards divs */}
               <div className="flex flex-col pt-[50px] gap-20">
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
           <div  className=""></div>
           <div className="flex flex-col bg-black bg-opacity-55 w-[295px] h-[500px] justify-center items-center gap-5">
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
            <Link href={"/components/Shop/productdetail"}>
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
                </Link>
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
            <div>
                <Card className="bg-[#F4F5F7]">
                    <CardHeader>
                        <Image src={"/image13.png"} alt="image-4" width={285} height={301} />
                    </CardHeader>
                    <CardContent >
                        <CardDescription>
                            <div className="space-y-4">
                            <h1 className="font-semibold text-[24px] text-black">Leviosa</h1>
                            <p className="text-gray-400">Stylish cafe chair</p>
                            </div>
                        </CardDescription>
                    </CardContent>
                    <CardFooter className="mb-3">
                        <div className="flex flex-row gap-3">
                        <h1 className="font-semibold text-[20px]">Rp 2.500.000</h1>
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
                {/* 2nd card row div */}
            </div>
            {/* 3rd card row */}
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
            <div>
                <Card className="bg-[#F4F5F7]">
                    <CardHeader>
                        <Image src={"/image13.png"} alt="image-4" width={285} height={301} />
                    </CardHeader>
                    <CardContent >
                        <CardDescription>
                            <div className="space-y-4">
                            <h1 className="font-semibold text-[24px] text-black">Leviosa</h1>
                            <p className="text-gray-400">Stylish cafe chair</p>
                            </div>
                        </CardDescription>
                    </CardContent>
                    <CardFooter className="mb-3">
                        <div className="flex flex-row gap-3">
                        <h1 className="font-semibold text-[20px]">Rp 2.500.000</h1>
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
                {/* 3rd card row div */}
            </div>
            {/* 4th card row */}
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
            <div>
                <Card className="bg-[#F4F5F7]">
                    <CardHeader>
                        <Image src={"/image13.png"} alt="image-4" width={285} height={301} />
                    </CardHeader>
                    <CardContent >
                        <CardDescription>
                            <div className="space-y-4">
                            <h1 className="font-semibold text-[24px] text-black">Leviosa</h1>
                            <p className="text-gray-400">Stylish cafe chair</p>
                            </div>
                        </CardDescription>
                    </CardContent>
                    <CardFooter className="mb-3">
                        <div className="flex flex-row gap-3">
                        <h1 className="font-semibold text-[20px]">Rp 2.500.000</h1>
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
                {/* 4th card row div */}
            </div>
            <div className="flex flex-row pt-10 items-center justify-center gap-10">
                <div className="bg-[#B88E2F] w-[60px] h-[60px] flex flex-row justify-center items-center rounded-md "><h1>1</h1></div>
                <div className="bg-[#F9F1E7] w-[60px] h-[60px] flex flex-row justify-center items-center rounded-md  "><h1>2</h1></div>
                <div className="bg-[#F9F1E7] w-[60px] h-[60px] flex flex-row justify-center items-center rounded-md  "><h1>3</h1></div>
                <div className="bg-[#F9F1E7] w-[98px] h-[60px] flex flex-row justify-center items-center rounded-md  "><h1>Next</h1></div>
            </div>
                {/* cards div */}
               </div>

               {/* image div */}
               <div className="bg-[#FAF3EA] flex flex-col md:flex-row lg:flex-row items-center gap-10 md:gap-0 lg:gap-0 justify-between py-10 px-10 mt-10">
                <div className="flex flex-col md:flex-row lg:flex-row gap-2 items-center justify-center">
                   <div><Image src={"/trophy1.png"} alt="trophy" width={60} height={60} /></div> 
                    <div className="flex flex-col space-y-1 items-center justify-center">
                        <h1 className="font-semibold text-[24px]">Hight Quality</h1>
                        <p className="text-gray-400">crafted from top materials</p>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row lg:flex-row gap-2 items-center justify-center">
              <div>  <Image src={"/guarantee.png"} alt="gurantee" width={60} height={60} /></div>
                    <div className="flex flex-col space-y-1 items-center justify-center">
                        <h1 className="font-semibold text-[24px]">High Quality</h1>
                        <p className="text-gray-400">Over 2 Years</p>
                    </div>
                </div>
             <div className="flex flex-col md:flex-row lg:flex-row gap-2 items-center justify-center">
                <div>  <Image src={"/shipping.png"} alt="shipping" width={60} height={60} /></div>
                    <div className="flex flex-col space-y-1 items-center justify-center">
                        <h1 className="font-semibold text-[24px]">Free Shipping</h1>
                        <p className="text-gray-400">Over 2 Years</p>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row lg:flex-row gap-2 items-center justify-center">
                <div>  <Image src={"/customer-support.png"} alt="customersupport" width={60} height={60} /></div>
                    <div className="flex flex-col space-y-1 items-center justify-center">
                        <h1 className="font-semibold text-[24px]">24 / 7 Support</h1>
                        <p className="text-gray-400">Dedicated support</p>
                    </div>
                </div>
                {/* image div */}
               </div>

               
<Footer></Footer>
            {/* top div */}
        </div>
    )
}