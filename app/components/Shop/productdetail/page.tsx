import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
  } from "@/components/ui/card"
  import Header from "../../Header/header2"
import Footer from "../../Footer/footer"



export default function Productdetail(){
    return(
        <div className=" w-screen">
           <Header></Header>
            <div className="bg-[#F9F1E7] px-10 py-7 flex flex-row  gap-8  ">
                <h1 className="text-gray-400">Home</h1>
                /
                <h1 className="text-gray-400">Shop</h1>
                |
                <h1 className="font-semibold">Asgard Sofa</h1>
            </div>

            <div className="flex flex-col md:flex-row lg:flex-row pt-16 justify-center items-center gap-20 pb-20 border-b-2 border-gray-400">
                <div className="flex flex-row gap-7">
                    <div className="flex flex-col gap-7">
                        <div><Image src={"/Group 94.png"} alt="group 94" width={76} height={80} /></div>
                        <div><Image src={"/Group 98.png"} alt="group 94" width={76} height={80} /></div>
                        <div><Image src={"/Group 97.png"} alt="group 94" width={76} height={80} /></div>
                        <div><Image src={"/Group 96.png"} alt="group 94" width={76} height={80} /></div>
                    </div>
                    <div><Image src={"/Group 95.png"} alt="group95" width={481} height={500} /></div>
                </div>

                <div className="flex flex-col gap-10 ">
                    <div className="flex flex-col">
                        <h1 className="font-semibold text-[42px]">Asgard Sofa</h1>
                        <p className="text-gray-400 text-[24px]">Rs. 250,000.00</p>
                    </div>
                    <div className="flex flex-row gap-7">
                        <div><Image src={"/Group 88.png"} alt="review" width={120} height={20} /></div>
                        |
                        <div><h1 className="text-gray-400">5 Customer Reviews</h1></div>
                    </div>
                    <p>Setting the bar as one of the loudest speakers in its class, the <br /> Kilburn is a compact, stout-hearted hero with a well-balanced <br />audio which boasts a clear midrange and extended highs for a <br /> sound.</p>
                <h1>Size</h1>
                <div className="flex flex-row gap-5 ">
                    <h1 className="w-[30px] h-[30px] bg-[#B88E2F] flex flex-row justify-center items-center rounded-md">L</h1>
                    <h1 className="w-[30px] h-[30px] bg-[#F9F1E7] flex flex-row justify-center items-center rounded-md">XL</h1>
                    <h1 className="w-[30px] h-[30px] bg-[#F9F1E7] flex flex-row justify-center items-center rounded-md">2Xl</h1>
                </div>
                <h1>Colors</h1>
                <div className="flex flex-row gap-5">
                    <div className="bg-[#816DFA] w-[30px] h-[30px] rounded-full"></div>
                    <div className="bg-[#000000] w-[30px] h-[30px] rounded-full"></div>
                    <div className="bg-[#816DFA] w-[30px] h-[30px] rounded-full"></div>
                </div>
                <div className="flex flex-row gap-3 mb-10 border-b-2 border-gray-300">
                    <Button size={"lg"}><div className="flex flex-row gap-4 justify-center items-center"> <div>-</div><div>1</div><div>+</div></div></Button>
                    <Button size={"lg"}>Add To Cart</Button>
                    <Button size={"lg"}><div className="flex flex-row gap-3">+<div>Compare</div></div></Button>
                </div>
                    <div className="flex flex-row gap-4">
                        <h1 className="text-gray-400">Sku</h1>
                        :
                        <h1 className="text-gray-400">SS001</h1>
                    </div>
                    <div className="flex flex-row gap-4">
                    <h1 className="text-gray-400">Company</h1>
                        :
                        <h1 className="text-gray-400">Sofas</h1>
                    </div>
                    <div className="flex flex-row gap-4">
                    <h1 className="text-gray-400">Tags</h1>
                        :
                        <h1 className="text-gray-400">Sofa, Chair, Home, Shop</h1>
                    </div>
                    <div className="flex flex-row gap-5"> 
                    <h1 className="text-gray-400">Tags</h1>
                    :
                    <div><Image src={"/facebook.png"} alt="social icons" width={25} height={25}/></div>
                    <div><Image src={"/linkdln.png"} alt="social icons" width={25} height={25}/></div>
                    <div><Image src={"/twitter.png"} alt="social icons" width={25} height={25}/></div>
                    </div>
                </div>



            </div>

                <div className="flex flex-col justify-center items-center pt-20 pb-20 border-b-2 border-gray-300">
                    <div className="flex flex-row justify-center items-center gap-8">
                        <h1 className="font-semibold text-[24px]">Description</h1>
                            <h1 className="text-[24px] text-gray-400">Additional Information</h1>
                            <h1 className="text-[24px] text-gray-400">Reviews [5]</h1>
                    </div>
                    <p className="pt-10 text-gray-400 text-center">Embodying the raw, wayward spirit of rock n roll, the Kilburn portable active stereo speaker takes the unmistakable look and <br /> sound of Marshall, unplugs the chords, and takes the show on the road.</p>
                    <p className="pt-16 text-gray-400 text-center">Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest <br /> speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange <br /> and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls <br /> to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.</p>
                        <div className="flex flex-col pt-7 md:flex-row lg:flex-row justify-center items-center gap-3">
                        <div><Image src={"/Group 107.png"} alt="." width={605} height={348} /></div>
                        <div><Image src={"/Group 106.png"} alt="." width={605} height={348} /></div>
                        </div>
                </div>

                <div className="pt-20 flex flex-col pb-20 justify-center items-center ">
                    <h1 className="font-bold text-[36px]">Related Products</h1>
                    {/* card row div */}
                    <div className="flex flex-col md:flex-row lg;flex-row pt-10 justify-center items-center gap-8">
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
                
                        {/* card row div */}
                    </div>
                   <div className="pt-9"> <Button variant={"outline"} size={"lg"} className="border-[#B88E2F] text-[#B88E2F] flex justify-center items-center ">Show More</Button></div>
                </div>
<Footer></Footer>
            {/* top div */}
        </div>
    )
}