import Image from "next/image";
import Link from "next/link";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  import { Button } from "@/components/ui/button"
  
export default function Header(){
    return(
        <div className="w-screen py-5 border-b-2 border-gray-300">
            <div className="flex flex-row justify-between items-center gap-3 md:gap-10 lg:gap-10  ">
                <div className="flex flex-row gap-2">
                    <div className="self-center"><Image src={"/logo.png"} alt="logo" width={50} height={32} /></div>
                   <div><h1 className="text-[32px] font-bold">Furniro</h1></div> 
                </div>

                <div className="flex flex-row  gap-1 md:gap-10 lg:gap-10 justify-between items-center">
            <Link href={"/"}>Home</Link>
            <Link href={"./components/Shop"}>Shop</Link>
            <h1>About</h1>
            <h1>Contact</h1>
                </div>

                <div className="flex flex-row gap-1 md:gap-10 lg:gap-10 justify-between items-center">
              <div>  <Image src={"/accountlogo.png"} alt="account" width={24} height={24} /></div>
             <div>  <Image src={"/search.png"} alt="search" width={24} height={24} /></div> 
              <div>  <Image src={"/wishlist.png"} alt="wishlist" width={24} height={24} /></div>
              <div>
              <DropdownMenu>
  <DropdownMenuTrigger><Image src={"/cart.png"} alt="cart" width={24} height={24} /></DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel><div className="flex flex-row justify-between items-center pb-5 ">
<h1 className="font-bold text-[24px] flex flex-row justify-center items-center">Shopping Cart</h1>
<div className="flex flex-row justify-center items-center"><Image src={"/Group.png"} alt="delte" width={17} height={19} /></div>
    </div>
    </DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem><div className="flex flex-row justify-between items-center gap-10 pb-8">
        <div><Image src={"/Group 146.png"} alt="sofa" width={108} height={105} /></div>
     <div className="flex flex-col gap-8">
        <h1>Asgrad Sofa</h1>
        <div className="flex flex-row gap-4 ">
            <h1>1</h1>
            X
            <h1 className="text-[#B88E2F]">Rs. 250,000.00</h1>
        </div>
     </div>
     <div> <h1 className="bg-[#9F9F9F] w-[20px] h-[20px] rounded-full flex justify-center items-center">X</h1></div>
        </div></DropdownMenuItem>
    <DropdownMenuItem><div className="flex flex-row justify-between items-center gap-10 pb-32">
        <div><Image src={"/Group 147.png"} alt="sofa" width={108} height={105} /></div>
     <div className="flex flex-col gap-8">
        <h1>Casaliving Wood</h1>
        <div className="flex flex-row gap-4 ">
            <h1>1</h1>
            X
            <h1 className="text-[#B88E2F]">Rs. 270,000.00</h1>
        </div>
     </div>
     <div> <h1 className="bg-[#9F9F9F] w-[20px] h-[20px] rounded-full flex justify-center items-center">X</h1></div>
        </div></DropdownMenuItem>
    <DropdownMenuItem><div className="flex flex-row justify-between items-center px-7 gap-48">
        <h1 className="">Subtotal</h1>
      <div className="">  <h1 className="text-[#B88E2F] ">Rs. 520,000.00</h1></div>
        </div></DropdownMenuItem>
        <DropdownMenuSeparator />
    <DropdownMenuItem><div className="pt-4 flex flex-row gap-5">
        <Button className="rounded-xl border-black" variant={"outline"} size={"lg"}>Cart</Button>
        <Button className="rounded-xl border-black " variant={"outline"} size={"lg"}>CheckOut</Button>
        <Button className="rounded-xl border-black" variant={"outline"} size={"lg"}>Comparision</Button>
        </div></DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
</div>

                </div>
            </div>
            {/* top div */}
        </div>
    )
}