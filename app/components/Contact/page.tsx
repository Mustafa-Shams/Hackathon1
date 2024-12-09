import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button";
import Header from "../Header/header";
import Footer from "../Footer/footer";

export default function Contact(){
    return(
        <div className="w-screen">
<Header></Header>
<div className="bg-cover bg-center flex h-[316px] justify-center items-center relative">
                <div className=""  ><Image src={"/banner1.png"} alt="benner"   layout="fill" objectFit="cover" quality={100} className="-z-10"/></div>
                <div className="flex flex-col    ">
            <div className="flex-col justify-center items-center">
                
                <h1 className="text-black font-bold text-[52px]">Contact</h1>
                <p className="tracking-wide whitespace-pre-line text-balance text-black text-center">Home / Contact</p>
          
            </div>
            </div>
               </div>

               <div className="pt-[50px]">
                    <h1 className="font-bold text-[36px] text-center">Get In Touch With Us</h1>
                    <p className="text-gray-400 pt-5 text-center">For More Information About Our Product & Services. Please Feel Free To Drop Us <br /> An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
               </div>

               <div className="pt-20 flex flex-col md:flex-row lg:flex-row items-center justify-center gap-32">
                    <div className="flex flex-col justify-center items-center gap-12">
                        <div className="flex flex-col ">
                            <div className="flex flex-row">
                                <div><Image src={"/Vector1.png"} alt="loaction" width={23} height={23} /></div>
                                <div className="flex flex-col ">
                                    <h1 className="text-[24px] font-semibold pl-4">Address</h1>
                                    <p className="pt-5">236 5th SE Avenue, New York <br /> NY10000, United <br /> States</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col ">
                            <div className="flex flex-row">
                                <div className="pr-5"><Image src={"/Vector2.png"} alt="loaction" width={23} height={23}  /></div>
                                <div className="flex flex-col ">
                                    <h1 className="text-[24px] font-semibold pl-4">Phone</h1>
                                    <p className="pt-5 ">Mobile: +(84) 546-6789 <br />
                                    Hotline: +(84) 456-6789</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col ">
                            <div className="flex flex-row">
                                <div><Image src={"/Vector3.png"} alt="loaction" width={23} height={23} /></div>
                                <div className="flex flex-col ">
                                    <h1 className="text-[24px] font-semibold pl-4">Working Time</h1>
                                    <p className="pt-5">Monday-Friday: 9:00 - <br /> 22:00 <br />
                                    Saturday-Sunday: 9:00 - <br /> 21:00</p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="flex flex-col justify-center items-center gap-7">
                        <div>
                    <div className="grid w-full max-w-sm items-center gap-1.5 ">
      <Label htmlFor="email">Your Name</Label>
      <Input type="text" id="email" placeholder="abc" className="w-[528px] h-[75px]" />
    </div>
    </div>

<div>
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="email">Email Address</Label>
      <Input type="text" id="email" placeholder="abc@def.com"  className="w-[528px] h-[75px]" />
    </div> 
    </div> 
    <div>    
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="email">Subject</Label>
      <Input type="text" id="email" placeholder="This is Optional"  className="w-[528px] h-[75px]"/>
    </div>
    </div>  
    <div>
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="email">Message</Label>
      <Input type="text" id="email" placeholder="Hey I Would Like To Ask About " className="w-[528px] h-[120px]"/>
    </div>
    </div>
                    <div><Button className="bg-[#B88E2F] w-[236px] h-[55px]">Submit</Button></div>
                    </div>

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