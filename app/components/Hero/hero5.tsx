
import Image from "next/image";

export default function Hero4(){
    return(
        <div className="w-screen pt-[30px] pb-10">
            <div className="text-center space-y-3">
            <p>Share Your Step With</p>
            <h1 className="text-[40px] font-bold">#Furniro Furniture</h1>
            </div>

            {/* images div */}
            <div className="flex flex-row justify-between items-center pt-10">
                {/* sec 1 div */}
                <div className="flex flex-col">
                    <div className="flex flex-row">
                       <div className="  self-end"><Image src={"/img0.png"} alt="img0" width={100} height={450} className="-mt-10 w-[110px] h-[450px]" /></div> 
                  <div className="self-end"> <Image src={"/img1.png"} alt="imag1" width={451} height={312} /></div> 
                  
                  </div>
                    <div className="flex flex-row">
                        <div><Image src={"/img2.png"} alt="img2" width={381} height={323} /></div>
                        <div><Image src={"/img3.png"} alt="img3" width={344} height={242} /></div>
                    </div>

                    {/*sec 1 div  */}
                </div>
                <div><Image src={"/img4.png"} alt="img4" width={295} height={392}/></div>
                {/* sec2 div */}
                <div className="flex flex-col">
                        <div className="flex flex-row">
                            <div className="self-end  "><Image src={"/img5.png"} alt="img5" width={300} height={450} className="md:w-[400px]  md:h-[360px] lg:w-[400px] lg:h-[360px] "  /></div>
                            <div><Image src={"/img6.png"} alt="img6" width={425} height={433} /></div>

                        </div>
                        <div className="flex flex-row">
                            <div><Image src={"/img7.png"} alt="img7" width={178} height={242} /></div>
                            <div><Image src={"/img8.png"} alt="img8" width={258} height={196} /></div>

                        </div>

                    {/* sec 2 div */}
                </div>
                {/* imagesdiv */}
            </div>
            {/* top div */}
        </div>
    )
}