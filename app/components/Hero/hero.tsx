import Image from "next/image";


export default function Hero(){
    return(
        <div className="w-screen ">
             <div className="relative h-screen bg-gray-100 flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={"/banner0.png"} // Replace with the path to your image
          alt="Decorative Chair"
          fill // Makes the image cover the entire div
          className="object-cover"
        />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10  bg-opacity-80 max-w-md p-6 rounded-lg shadow-lg ml-auto mr-10 bg-[#FFF3E3]">
        <h2 className="text-sm uppercase tracking-wide text-gray-600 mb-2">New Arrival</h2>
        <h1 className="text-4xl font-bold mb-4 text-[#B88E2F]">
          Discover Our  <br />New Collection
        </h1>
        <p className="text-gray-600 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis.
        </p>
        <button className="px-6 py-3 bg-[#B88E2F] text-white font-semibold rounded-md shadow ">
          Buy Now
        </button>
      </div>
    </div>
    
            {/* topdiv */}
        </div>
    )
}