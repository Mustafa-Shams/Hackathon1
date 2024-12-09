import Image from "next/image";
import Link from "next/link";

  
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
            <Link href={"./components/about"}>About</Link>
            <Link href={"./components/Contact"}>Contact</Link>
                </div>

                <div className="flex flex-row gap-1 md:gap-10 lg:gap-10 justify-between items-center">
              <div>  <Image src={"/accountlogo.png"} alt="account" width={24} height={24} /></div>
             <div>  <Image src={"/search.png"} alt="search" width={24} height={24} /></div> 
              <div>  <Image src={"/wishlist.png"} alt="wishlist" width={24} height={24} /></div>
              <div><Link href={"./components/Cart"}><Image src={"/cart.png"} alt="cart" width={24} height={24} /></Link></div>
              
                </div>
            </div>
            {/* top div */}
        </div>
    )
}