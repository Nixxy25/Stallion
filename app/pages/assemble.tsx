import Image from "next/image";

export default function Page() {
    return (
      <div className="relative flex md:p-40 max-800:pb-20 w-screen items-center overflow-hidden">
        <div className="relative flex max-w-[100vw]">
          <div className="flex w-max animate-marquee whitespace-nowrap [--duration:12s] hover:[animation-play-state:paused]">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="px-8 text-[#0000004D]">
                <div className="font-[Drukwide] flex  items-center font-bold text-[#000004D] text-[110px] max-sm:text-[50px] max-lg:text-[80px]">
                   <span className="text-[#0000004D]">ASSEMBLE STALLIONS</span>
                   <Image src="/mush.png" alt="stallion1" className="pr-28" width={500} height={500} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }