import Image from "next/image";
import { Button } from "@/components/ui/button";
import Header from "../Header/header";
import Footer from "../Footer/footer"
export default function Cart(){
    return(
        <div className="w-screen">
            <Header></Header>
                     <div className="bg-cover bg-center flex h-[316px] justify-center items-center relative">
                <div className=""  ><Image src={"/banner1.png"} alt="benner"   layout="fill" objectFit="cover" quality={100} className="-z-10"/></div>
                <div className="flex flex-col    ">
            <div className="flex-col justify-center items-center">
                
                <h1 className="text-black font-bold text-[52px]">Cart</h1>
                <p className="tracking-wide whitespace-pre-line text-balance text-black ">Home / Cart</p>
          
            </div>
            </div>
               </div>

               <div className="pt-20 flex flex-col md:flex-row lg:flex-row justify-center items-center pb-16 gap-12">
                    <div className="flex flex-col pb-20">
                        <div className="flex flex-row justity-center items-center bg-[#F9F1E7] px-5 py-5 gap-10">
                            <h1>Product</h1>
                            <h1>Price</h1>
                            <h1>Quantity</h1>
                            <h1>Subtotal</h1>
                        </div>
                        <div className="flex flex-row justify-center items-center pt-12 gap-12">
                            <div><Image src={"/Group 146.png"} alt="sofa" width={105} height={105} /></div>
                            <div><h1 className="text-gray-400">Asgard Sofa</h1></div>
                            <div><h1 className="text-gray-300">Rs. 250,000.00</h1></div>
                            <div><Button variant={"outline"} className="flex flex-row justify-center items-center w-[32px] h-[32px]">1</Button></div>
                                <div><h1>Rs. 250,000.00</h1></div>
                                <div><Image src={"/Vector.png"} alt="trash" width={21} height={22} /></div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-12 px-10 py-20 bg-[#F9F1E7]">
                        <h1 className="text-center font-bold tex-[32px]">Cart Totals</h1>
                        <div className="pt-10 gap-32 flex flex-row">
                            <h1>Subtotal</h1>
                            <h1 className="text-gray-300">Rs. 250,000.00</h1>
                        </div>
                        <div className="pt-10 gap-32 flex flex-row">
                            <h1>Total</h1>
                            <h1 className="text-[#B88E2F]">Rs. 250,000.00</h1>
                        </div>
                        <Button className="rounded-xl border-black px-5 py-5 " variant={"outline"} size={"lg"}>Checkout</Button>
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