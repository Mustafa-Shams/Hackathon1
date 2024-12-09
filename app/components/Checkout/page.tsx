import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button";
import Header from "../Header/header";
import Footer from "../Footer/footer"

export default function Checkout(){
    return(
        <div className="w-screen">
            <Header></Header>
                 <div className="bg-cover bg-center flex h-[316px] justify-center items-center relative">
                <div className=""  ><Image src={"/banner1.png"} alt="benner"   layout="fill" objectFit="cover" quality={100} className="-z-10"/></div>
                <div className="flex flex-col    ">
            <div className="flex-col justify-center items-center">
                
                <h1 className="text-black font-bold text-[52px]">Checkout</h1>
                <p className="tracking-wide whitespace-pre-line text-balance text-black text-center">Home / Checkout</p>
          
            </div>
            </div>
               </div>

                <div className="flex flex-col md:flex-row lg:flex-row pt-20 gap-32 justify-center items-center">

                    <div className="flex flex-col">
                    <h1 className="font-bold text-[36px]">Billing Details</h1>
                    <div className="flex flex-row gap-5 pt-10">
                    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="email">First Name</Label>
      <Input type="text" id="email"  />
    </div>
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="email">Last Name</Label>
      <Input type="text" id="email"  />
    </div>
                    </div>
                    <div className="pt-7">
                    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="email">Company Name Optional</Label>
      <Input type="text" id="email"  />
    </div>
                    </div>

                    <div className="grid w-full max-w-sm items-center gap-1.5 pt-7 ">
      <Label htmlFor="email">Country / Region</Label>
      <Input type="text" id="email" placeholder="Srilanka" className="px-5" />
      
    </div>                  

    <div className="pt-7">
                    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="email">Street Address</Label>
      <Input type="text" id="email"  />
    </div>
                    </div>
                    <div className="pt-7">
                    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="email">Town / City</Label>
      <Input type="text" id="email"  />
    </div>
                    </div>

                    <div className="pt-7">
                    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="email">Province</Label>
      <Input type="text" id="email" placeholder="Western Province" />
    </div>
                    </div>

                    <div className="pt-7">
                    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="email">Zip Code</Label>
      <Input type="number" id="email"  />
    </div>
                    </div>

                    <div className="pt-7">
                    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="email">Phone </Label>
      <Input type="number" id="email"  />
    </div>
                    </div>

                    <div className="pt-7">
                    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="email">Email Address</Label>
      <Input type="email" id="email"  />
    </div>
                    </div>

                    <div className="pt-7">
                    <div className="grid w-full max-w-sm items-center gap-1.5">
     
      <Input type="text" id="email" placeholder="Additional Information"  />
    </div>
                    </div>

                    </div>
                    <div className="flex flex-col justify-center items-center  ">
                     <div className="flex flex-row justify-center items-center gap-32 pb-5 border-b-2 border-gray-400">
                        <div className="flex flex-col gap-20">
                                <h1 className="font-semibold text-[24px]">Product</h1>
                                <div className="flex flex-row gap-3"><p className="text-gray-300">Asgrad sofa</p> X <h1> 1</h1></div>
                                <h1 >Subtotal</h1>
                                <h1>Total</h1>

                        </div>

                            <div className="flex flex-col gap-20">
                                    <h1 className="font-semibold text-[24px]">Subtotal</h1>
                                    <h1 className="text-gray-300">Rs. 250,000.00</h1>
                                    <h1 className="text-gray-300">Rs. 250,000.00</h1>
                                    <h1 className="font-bold text-[24px] text-[#B88E2F]">Rs. 250,000.00</h1>
                            </div>

                     </div>
                        <div className="flex flex-col pt-10 space-y-5">
                            <li className="text-black"> Direct Bank Transfer</li>
                            <p>Make your payment directly into our bank account. Please use <br /> your Order ID as the payment reference. Your order will not be <br /> shipped until the funds have cleared in our account.</p>
                            <li className="text-gray-400">Direct Bank Transfer</li>
                            <li className="text-gray-400">Cash on Delivery</li>

                            <p className="pt-8">Your personal data will be used to support your experience <br /> throughout this website, to manage access to your account, and <br /> for other purposes described in our privacy policy.</p>
                        </div>
                        <div className="pt-12"> <Button variant={"outline"} size={"lg"} className="border-black px-10 py-5 " > Place Order</Button></div>
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