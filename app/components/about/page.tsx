import Image from "next/image";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import { Input } from "@/components/ui/input";
  import { Button } from "@/components/ui/button";
 import Header from "../Header/header";
  import Footer from "../Footer/footer"

export default function About(){
    return(
        <div className="w-screen">
<Header></Header>
<div className="bg-cover bg-center flex h-[316px] justify-center items-center relative">
                <div className=""  ><Image src={"/banner1.png"} alt="benner"   layout="fill" objectFit="cover" quality={100} className="-z-10"/></div>
                <div className="flex flex-col    ">
            <div className="flex-col justify-center items-center">
                
                <h1 className="text-black font-bold text-[52px]">About</h1>
                <p className="tracking-wide whitespace-pre-line text-balance text-black text-center">Home / About</p>
          
            </div>
            </div>
               </div>

               <div className="flex flex-row justify-center items-center px-10 gap-32">
                    <div className="flex flex-col justify-center items-center space-y-8">
                        <div className="flex flex-col">
                    <Card className="w-[820px] h-[794px]">
  <CardHeader>
    <CardTitle><Image src={"/i1.png"} alt="img1" width={817} height={500} /></CardTitle>
    <CardDescription><div className="flex flex-row gap-5">
        <div className="flex flex-row gap-2 text-gray-400"><Image src={"/admin.png"} alt="admin" width={20} height={20} /> Admin</div>
        <div className="flex flex-row gap-2 text-gray-400"><Image src={"/Vector5.png"} alt="admin" width={20} height={20} />14 Oct 2022</div>
        <div className="flex flex-row gap-2 text-gray-400"><Image src={"/bookmark.png"} alt="admin" width={20} height={20} />Wood</div>
        </div></CardDescription>
  </CardHeader>
  <CardContent>
    <h1 className="font-bold text-[30px]">Going all-in with millennial design</h1>
    <p className="text-gray-400 text-balance">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
  </CardContent>
  <CardFooter>
    <p className="pb-5 underline">ReadMore</p>
  </CardFooter>
</Card>
</div>

<div className="flex flex-col">
                    <Card className="w-[820px] h-[794px]">
  <CardHeader>
    <CardTitle><Image src={"/i2.png"} alt="img1" width={817} height={500} /></CardTitle>
    <CardDescription><div className="flex flex-row gap-5">
        <div className="flex flex-row gap-2 text-gray-400"><Image src={"/admin.png"} alt="admin" width={20} height={20} /> Admin</div>
        <div className="flex flex-row gap-2 text-gray-400"><Image src={"/Vector5.png"} alt="admin" width={20} height={20} />14 Oct 2022</div>
        <div className="flex flex-row gap-2 text-gray-400"><Image src={"/bookmark.png"} alt="admin" width={20} height={20} />Wood</div>
        </div></CardDescription>
  </CardHeader>
  <CardContent>
    <h1 className="font-bold text-[30px]">Exploring new ways of decorating</h1>
    <p className="text-gray-400 text-balance">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
  </CardContent>
  <CardFooter>
    <p className="pb-5 underline">ReadMore</p>
  </CardFooter>
</Card>
</div>

<div className="flex flex-col">
                    <Card className="w-[820px] h-[794px]">
  <CardHeader>
    <CardTitle><Image src={"/i3.png"} alt="img1" width={817} height={500} /></CardTitle>
    <CardDescription><div className="flex flex-row gap-5">
        <div className="flex flex-row gap-2 text-gray-400"><Image src={"/admin.png"} alt="admin" width={20} height={20} /> Admin</div>
        <div className="flex flex-row gap-2 text-gray-400"><Image src={"/Vector5.png"} alt="admin" width={20} height={20} />14 Oct 2022</div>
        <div className="flex flex-row gap-2 text-gray-400"><Image src={"/bookmark.png"} alt="admin" width={20} height={20} />Wood</div>
        </div></CardDescription>
  </CardHeader>
  <CardContent>
    <h1 className="font-bold text-[30px]">Handmade pieces that took time to make</h1>
    <p className="text-gray-400 text-balance">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
  </CardContent>
  <CardFooter>
    <p className="pb-5 underline">ReadMore</p>
  </CardFooter>
</Card>
</div>


                    </div>
                   
 <div className="flex flex-col space-y-10 items-center justify-center ">
                            <div className="flex flex-row"><div><Input type="search" className="w-[311px] h-[58px]" /></div>
                           <div className="self-center -ml-10"><Image src={"/search.png"} alt="search" width={24} height={24} /></div> 
                            </div>
                            <h1 className="pt-5 font-bold text-[24px]">Categories</h1>
                            <div className="flex flex-row gap-20">
                                <h1 className="text-gray-300">Crafts</h1>
                                <h1 className="text-gray-300">2</h1>
                            </div>
                           
                            <div className="flex flex-row gap-20 pt-10">
                                <h1 className="text-gray-300">Design</h1>
                                <h1 className="text-gray-300">8</h1>
                            </div>
                            <div className="flex flex-row gap-20 pt-10">
                                <h1 className="text-gray-300">HandMade</h1>
                                <h1 className="text-gray-300">7</h1>
                            </div>
                            <div className="flex flex-row gap-20 pt-10">
                                <h1 className="text-gray-300">Interior</h1>
                                <h1 className="text-gray-300">1</h1>
                            </div>
                            <div className="flex flex-row gap-20 pt-10">
                                <h1 className="text-gray-300">Wood</h1>
                                <h1 className="text-gray-300">6</h1>
                            </div>

                            <div className="pt-20 flex flex-col">
                                    <h1 className="text-[24px] font-semibold text-center">Recent Post</h1>
                                    <div className="flex flex-row justify-center items-center pt-10 gap-4">
                                            <div><Image src={"/pen.png"} alt="pen" width={80} height={80} /></div>
                                            <div className="flex flex-col space-y-2 text-center">
                                                <h1>Going all-in with <br /> millennial design</h1>
                                                <p className="text-gray-300">03 Aug  2022</p>
                                            </div>
                                    </div>

                            </div>
                            <div className="pt-20 flex flex-col">
                                    
                                    <div className="flex flex-row justify-center items-center gap-4">
                                            <div><Image src={"/words.png"} alt="pen" width={80} height={80} /></div>
                                            <div className="flex flex-col space-y-2 text-center">
                                                <h1>Exploring new ways <br /> of decorating</h1>
                                                <p className="text-gray-300">03 Aug  2022</p>
                                            </div>
                                    </div>

                            </div>
                            <div className="pt-20 flex flex-col">
                                   
                                    <div className="flex flex-row justify-center items-center gap-4">
                                            <div><Image src={"/laptop.png"} alt="pen" width={80} height={80} /></div>
                                            <div className="flex flex-col space-y-2 text-center">
                                                <h1>Handmade pieces <br /> that took time <br /> to make</h1>
                                                <p className="text-gray-300">03 Aug  2022</p>
                                            </div>
                                    </div>

                            </div>

                            <div className="pt-20 flex flex-col">
                                    
                                    <div className="flex flex-row justify-center items-center gap-4">
                                            <div><Image src={"/pot.png"} alt="pen" width={80} height={80} /></div>
                                            <div className="flex flex-col space-y-2 text-center">
                                                <h1>Modern home in <br /> Milan</h1>
                                                <p className="text-gray-300">03 Aug  2022</p>
                                            </div>
                                    </div>

                            </div>
                            <div className="pt-20 flex flex-col">
                                    
                                    <div className="flex flex-row justify-center items-center gap-4">
                                            <div><Image src={"/table.png"} alt="pen" width={80} height={80} /></div>
                                            <div className="flex flex-col space-y-2 text-center">
                                                <h1>Colorful office <br /> redesign</h1>
                                                <p className="text-gray-300">03 Aug  2022</p>
                                            </div>
                                    </div>

                            </div>


                    </div>



               </div>
<div className="flex flex-row justify-center items-center gap-7 pt-10">
            <Button className="bg-[#B88E2F] w-[60px] h-[60px] ">1</Button>
            <Button className="bg-[#F9F1E7] w-[60px] h-[60px] text-black">2</Button>
            <Button className="bg-[#F9F1E7] w-[60px] h-[60px] text-black">3</Button>
            <Button className="bg-[#F9F1E7] w-[98px] h-[60px] text-black">Next</Button>
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