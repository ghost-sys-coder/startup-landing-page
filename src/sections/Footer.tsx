import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logosaas.png";
import SocialX from "@/assets/social-x.svg"
import SocialInsta from "@/assets/social-insta.svg";
import SocialLinkedIn from "@/assets/social-linkedin.svg";
import SocialPin from "@/assets/social-pin.svg";
import SocialYoutube from "@/assets/social-youtube.svg";

export const Footer = () =>{
  return (
    <footer className="bg-black text-[#bcbcbc] py-10 text-sm text-center">
      <div className="container">
        <div className="inline-flex relative before:content-[''] before:w-full before:bg-[linear-gradient(to_right, #F87BFF, #FB92CF, #FFDD9B, #C2F0B1, #2FD8FE)] before:absolute before:top-2 before:bottom-0 before:blur">
        <Image src={logo} height={40} alt="logo" className="relative" />
        </div>
        <nav className="flex flex-col md:flex-row md:justify-center gap-6 mt-5">
          <Link href={"#"}>About</Link>
          <Link href={"#"}>Features</Link>
          <Link href={"#"}>Customers</Link>
          <Link href={"#"}>Pricing</Link>
          <Link href={"#"}>Help</Link>
          <Link href={"#"}>Careers</Link>
        </nav>
        <div className="flex justify-center gap-6 mt-5">
          <SocialX />
          <SocialInsta />
          <SocialLinkedIn />
          <SocialPin />
          <SocialYoutube />
        </div>
        <p className="mt-6">&copy; 2024 VeilCode, Inc. All rights reserved. Built by <span className="text-indigo-500 text-xl font-semibold">Tamale Frank</span>.</p>
      </div>
    </footer>
  )
};
