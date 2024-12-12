import ArrowRight from "@/assets/arrow-right.svg";
import Image from "next/image";
import logo from "@/assets/logosaas.png"
import MenuIcon from "@/assets/menu.svg"
import Link from "next/link";

export const Navbar = () => {
  return (
    <header className="sticky top-0 backdrop-blur-sm z-10">
      <div className="flex justify-center items-center py-3 bg-black text-sm text-white gap-3">
        <p className="text-white/60 hidden md:block">
          Streamline your workflow and boost your productivity
        </p>
        <div className="inline-flex gap-1 items-center">
          <p>Get Started for free</p>
          <ArrowRight className="h-4 w-4 inline-flex items-center justify-center" />
        </div>
      </div>
      <div className="py-5">
        <div className="container">
          <div className="flex justify-between items-center gap-4">
            <Image
              src={logo}
              alt="logo"
              height={40}
              width={40}
            />
            <MenuIcon className="h-5 w-5 md:hidden" />
            <nav className="hidden md:flex gap-6 text-black/60 items-center">
              <Link href={'#about'}>About</Link>
              <Link href={'#features'}>Features</Link>
              <Link href={'#customers'}>Customers</Link>
              <Link href={'#updates'}>Updates</Link>
              <Link href={'#'}>About</Link>
              <button type="button" className="bg-black text-white rounded-lg font-medium inline-flex items-center justify-center px-4 py-2 tracking-tight">Get for free</button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
};
