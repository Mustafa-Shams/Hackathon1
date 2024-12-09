import Image from "next/image";
import { Button } from "@/components/ui/button";

import Footer from "../Footer/footer"
import Header from "../Header/header";
export default function Comparison(){
    return(
        <div className="w-screen">
<Header></Header>
<div className="bg-cover bg-center flex h-[316px] justify-center items-center relative">
                <div className=""  ><Image src={"/banner1.png"} alt="benner"   layout="fill" objectFit="cover" quality={100} className="-z-10"/></div>
                <div className="flex flex-col    ">
            <div className="flex-col justify-center items-center">
                
                <h1 className="text-black font-bold text-[52px]">Product Comparision</h1>
                <p className="tracking-wide whitespace-pre-line text-balance text-black text-center">Home / Comparison</p>
          
            </div>
            </div>
               </div>


               <div className="flex flex-col md:flex-row lg:flex-row justify-center items-center gap-28 px-10 pt-[50px]">
                    <div className="flex flex-col">
                        <h1 className="font-semibold text-[28px]">Go to Product <br /> page for more  <br />
                        Products</h1>
                        <p className="text-gray-400 underline pt-5">View More</p>
                    </div>
                    <div className="flex flex-row gap-10">
                    <div className="flex flex-col gap-4" >
                            <div className="flex flex-col pt-10"><Image src={"/Group 156.png"} alt="sofa" width={280} height={211} /></div>
                            <h1 className="font-semibold text-[36px]">Asgard Sofa</h1>
                            <p >Rs. 250,000.00</p>
                            <div className="flex flex-row">4.7 <Image src={"/Group 88.png"} alt="star" width={124} height={20} /> <h1 className="text-gray-400">| 204 Review</h1></div>
                    </div>
                    <div className="flex flex-col gap-4" >
                            <div><Image src={"/Group 157.png"} alt="sofa" width={283} height={211} quality={100} /></div>
                            <h1 className="font-semibold text-[36px]">OutDoor Sofa Set</h1>
                            <p >Rs. 224,000.00</p>
                            <div className="flex flex-row">4.7 <Image src={"/Group 88.png"} alt="star" width={124} height={20} /> <h1 className="text-gray-400">| 204 Review</h1></div>
                    </div>

                    </div>
                    <div className="flex flex-col ">
                        <h1 className="font-bold text-[24px] pb-10 ">Add A Product</h1>
                        <Button className="bg-[#B88E2F] border-b2 border-black w-[242px] h-[39px] " >Choose A Product</Button>
                    </div>
               </div>

               <div className="pt-10 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-4 grid-rows-4 border-2 border-gray-300">
                <div className="col-span-1 row-span-1 items-center justify-center text-center space-y-7 border-r-2 border-gray-300 ">
                    <div className="space-y-7"><h1 className="font-semibold text-[24px] text-center">General</h1>
                    <h1>Model Number</h1>
                    <h1>Secondary Material</h1>
                    <h1>Configuration</h1>
                    <h1>Upholstry Material </h1>
                    <h1>Upholstry Color</h1></div>
                </div>
                <div className="col-start-2 col-end-2 row-start-1 row-end-1 text-center items-center justify-center  border-r-2 border-gray-300">
                <div className="space-y-7">
                    <h1>1 Sectional Sofa</h1>
                    <h1>TFCBLIGRBL6SRHS</h1>
                    <h1>Solid Wood</h1>
                    <h1>L-shaped </h1>
                    <h1>Fabric + Cotton</h1>
                    <h1>Bright Grey & Lion</h1>
                    </div>
                </div>
                <div className="col-start-3 col-end-3 row-start-1 row-end-1 text-center items-center justify-center  border-r-2 border-gray-300">
                <div className="space-y-7">
                <h1>1 Three Seater, 2 Single <br /> Seater</h1>
                <h1>DTUBLIGRBL568</h1>
                <h1>Solid Wood</h1>
                <h1>L-shaped </h1>
                <h1>Fabric + Cotton</h1>
                <h1>Bright Grey & Lion</h1></div>
            </div>
                <div className="col-start-1 col-end-1 row-start-2 row-end-2 text-center pt-10 border-r-2 border-gray-300">
                    <div className="space-y-7">
                    <h1 className="font-semibold text-[24px] text-center">Product</h1>
                    <h1>Filling Material</h1>
                    <h1>Finish Type</h1>
                    <h1>Adjustable Headrest</h1>
                    <h1>Maximum Load Capacity</h1>
                    <h1>Origin of Manufacture</h1>
                    
                    </div>
                </div>
                <div className="col-start-2 col-end-2 row-start-2 row-end-2 text-center pt-24 border-r-2 border-gray-300">
                    <div className="space-y-7">
                    <h1 >Foam</h1>
                    <h1>Bright Grey & Lion</h1>
                    <h1>No</h1>
                    <h1>280 KG</h1>
                    <h1>India</h1>
                   
                    
                    </div>
                </div>
                <div className="col-start-3 col-end-3 row-start-2 row-end-2 text-center pt-24 border-r-2 border-gray-300">
                    <div className="space-y-7">
                    <h1 >Matte</h1>
                    <h1>Bright Grey & Lion</h1>
                    <h1>yes</h1>
                    <h1>300 KG</h1>
                    <h1>India</h1>
                   
                    
                    </div>
                </div>

                <div className="col-start-1 col-end-1 row-start-3 row-end-3 pt-10 text-center border-r-2 border-gray-300 ">
                <div className="space-y-7">
                    <h1 className="font-semibold text-[24px] text-center">Dimensions</h1>
                    <h1>Width</h1>
                    <h1>Height</h1>
                    <h1>Depth</h1>
                    <h1>Weight</h1>
                    <h1>Seat Height</h1>
                    <h1>Leg Height</h1>
                    
                    </div>
                </div>
                <div className="col-start-2 col-end-2 row-start-3 row-end-3 pt-16 text-center border-r-2 border-gray-300 ">
                <div className="space-y-7">
                    <h1 className="font-semibold text-[24px] text-center"></h1>
                    <h1>265.32 cm</h1>
                    <h1>76 cm</h1>
                    <h1>167.76 cm</h1>
                    <h1>45 KG</h1>
                    <h1>41.52 cm</h1>
                    <h1>5.46 cm</h1>
                    
                    </div>
                </div>
                <div className="col-start-3 col-end-3 row-start-3 row-end-3 pt-16 text-center border-r-2 border-gray-300 ">
                <div className="space-y-7">
                    <h1 className="font-semibold text-[24px] text-center"></h1>
                    <h1>265.32 cm</h1>
                    <h1>76 cm</h1>
                    <h1>167.76 cm</h1>
                    <h1>65 KG</h1>
                    <h1>41.52 cm</h1>
                    <h1>5.46 cm</h1>
                    
                    </div>
                </div>
                <div className="col-start-1 col-end-1 row-start-4 row-end-4 pt-10 text-center border-r-2 border-gray-300">
                <div className="space-y-20 -mt-5">
                    <h1 className="font-semibold text-[24px] text-center">Warrantee</h1>
                    <h1>Warranty Summary</h1>
                    <h1>Warranty Service <br />
                    Type</h1>
                    <h1>Covered in Warranty</h1>
                    <h1>Not Covered in Warranty</h1>
                    <h1 className="pt-10">Domestic Warranty</h1>
                   
                    
                    </div>
                </div>
                <div className="col-start-2 col-end-2 row-start-4 row-end-4 pt-16 text-center border-r-2 border-gray-300 ">
                <div className="space-y-9">
                    <h1 className="font-semibold text-[24px] text-center"></h1>
                    <h1>1 Year Manufacturing <br /> Warranty</h1>
                    <h1>For Warranty Claims or <br /> Any Product Related <br /> Issues Please Email at <br /> operations@trevifurnitu <br />re.com</h1>
                    <h1>Warranty Against <br /> Manufacturing Defect</h1>
                    <h1>The Warranty Does Not <br /> Cover Damages Due To <br /> Usage Of The Product <br /> Beyond Its Intended Use <br /> And Wear & Tear In The <br /> Natural Course Of <br /> Product Usage.</h1>
                    <h1>1 Year</h1>
                    <Button className="bg-[#B88E2F] w-[215px] h-[64px]">Add To Cart</Button>
                    
                    </div>
                </div>
                <div className="col-start-3 col-end-3 row-start-4 row-end-4 pt-16 text-center border-r-2 border-gray-300 ">
                <div className="space-y-8">
                    <h1 className="font-semibold text-[24px] text-center"></h1>
                    <h1>1.2 Year Manufacturing <br /> Warranty</h1>
                    <h1>For Warranty Claims or <br /> Any Product Related <br /> Issues Please Email at <br /> support@xyz.com</h1>
                    <h1>Warranty of the product <br /> is limited to <br /> manufacturing defects <br /> only.</h1>
                    <h1>The Warranty Does Not <br /> Cover Damages Due To <br /> Usage Of The Product <br /> Beyond Its Intended Use <br /> And Wear & Tear In The <br /> Natural Course Of <br /> Product Usage.</h1>
                    <h1>3 months</h1>
                    <Button className="bg-[#B88E2F] w-[215px] h-[64px]">Add To Cart</Button>
                    
                    </div>
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