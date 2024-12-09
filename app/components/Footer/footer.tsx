import Link from "next/link";

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"


export default function Hero6(){
    return(
        <div className="w-screen pt-20 border-t-2">
            <div className="hidden md:flex md:flex-row lf:flex lg:flex-row pt-16 justify-between items-center ">
            <div className="flex flex-col " >
                <h1 className="font-bold text-[24px]">Furniro.</h1>
                <p className="pt-10 text-gray-400">400 University Drive Suite 200 Coral <br /> Gables, <br />
                FL 33134 USA</p>
            </div>
            <div className="flex flex-col">
                    <h1 className="text-gray-400"> Links</h1>
                    <div className="gap-10 pt-10 flex flex-col pb-5">
                        <Link href={"/"}>Home</Link>
                        <Link href={"/"}>Shop</Link>
                        <Link href={"/"}>About</Link>
                        <Link href={"/"}>Contact</Link>
                    </div>
            </div>
            <div className="flex flex-col -mt-16">
            <h1 className="text-gray-400"> Help</h1>
            <div className="gap-10 pt-10 flex flex-col">
                        <Link href={"/"}>Payment Options</Link>
                        <Link href={"/"}>Returns</Link>
                        <Link href={"/"}>Privacy Policies</Link>
                      
                    </div>
            </div>
            <div className="flex flex-col -mt-[25vh] ">
                <h1 className="text-gray-400">Newsletter</h1>
               
                <div className="flex w-full max-w-sm items-center space-x-2 pt-10">
      <Input type="email" placeholder="Email" className="border-b-2 border-black" />
      <Button type="submit" variant={'ghost'} className="border-b-2 border-black">Subscribe</Button>

    </div>
           
            </div>
           
            </div>
            <div className="flex flex-col md:hidden lg:hidden justify-between items-center">
                <div className="flex flex-row justify-between items-center">
                <div className="flex flex-col " >
                <h1 className="font-bold text-[24px]">Furniro.</h1>
                <p className="pt-10 text-gray-400">400 University Drive Suite 200 Coral <br /> Gables, <br />
                FL 33134 USA</p>
            </div>
            <div className="flex w-full max-w-sm items-center space-x-2 pt-10">
      <Input type="email" placeholder="Email" className="border-b-2 border-black" />
      <Button type="submit" variant={'ghost'} className="border-b-2 border-black">Subscribe</Button>

    </div>

                </div>
                <div className="flex flex-col">
                    <h1 className="text-gray-400"> Links</h1>
                    <div className="gap-10 pt-10 flex flex-col pb-5">
                        <Link href={"/"}>Home</Link>
                        <Link href={"/"}>Shop</Link>
                        <Link href={"/"}>About</Link>
                        <Link href={"/"}>Contact</Link>
                    </div>
            </div>
            <div className="flex flex-col text-center items-center justify-center pt-10">
            <h1 className="text-gray-400"> Help</h1>
            <div className="gap-10 pt-10 flex flex-col">
                        <Link href={"/"}>Payment Options</Link>
                        <Link href={"/"}>Returns</Link>
                        <Link href={"/"}>Privacy Policies</Link>
                      
                    </div>
            </div>
            </div>
                <div className="pt-10 pb-5 border-t-2 border-gray-400">
                        <h1 className="pt-5">2024 furniro.All Right Reserved</h1>          
                </div>
            {/* top div */}
        </div>
    )
}