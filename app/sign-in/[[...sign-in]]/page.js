import { SignedIn, SignIn } from "@clerk/nextjs";
import Image from "next/image";

export default function Page(){
    return(
    <div>
    <Image src='/uberbanner.jpg' width={900} height={800} className=" object-contain h-full w-full"></Image>
<div className=' absolute right-5 top-24'> 
<SignIn />

</div>

</div>
    )
}