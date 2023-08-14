import Link from "next/link";

const Footer = () => {
    return ( 
        <div className="w-full flex justify-start items-center py-10">
            <div className="flex flex-row gap-8">
                <Link href={"/Terms-and-conditions"} className="underline" >terms & conditions</Link>
                <Link href={"/Privacy-policy"} className="underline" >privacy policy</Link>
            </div>
        </div>
     );
}
 
export default Footer;