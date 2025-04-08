import Image from "next/image";
import Assemblepage from './assemble';
import Link from "next/link";

export default function FooterPage() {
    return(
        <div className="bg-[#000000]  relative flex  flex-col h-80 py-48 max-sm:py-32 mt-40 max-lg:mt-20 items-center w-full justify-center ">
            <div className="absolute -top-64   max-sm:-top-12 max-md:-top-16 max-lg:-top-60 z-10 ">
                <Assemblepage />
            </div>

            <div className="flex  text-white items-center gap-2 p-10 z-10" >
                <div className="font-[Drukwide] text-[25px] max-sm:text-[18px]">FOLLOW US :</div>

                <Link href="https://x.com/Stallionsassmbl" target="_blank" rel="noopener noreferrer">
                    <Image src='/devicon_twitter.svg' alt="twitter" width={30} height={30} className="max-sm:w-6 cursor-pointer"/>
                </Link>
                
                <Link href="https://discord.gg/a6uyqHms" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                    <Image src='/Vector.svg' alt="discord" width={30} height={30} className="max-sm:w-6"/>
                </Link>
            </div>
        </div>
    )
}