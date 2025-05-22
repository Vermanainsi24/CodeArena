import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import { CodeIcon } from "lucide-react";
import { SignedIn, UserButton } from "@clerk/nextjs";
import DasboardBtn from "./DasboardBtn";

function Navbar() {
  return (
    <nav className="border-b ">
      <div className="flex h-16 items-center px-4 container mx-auto">
        {/* LEFT SIDE -LOGO */}
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold text-2xl mr-6 font-mono hover:opacity-80 transition-opacity "
        >
          <CodeIcon className="size-8  bg-gradient-to-r from-blue-400 via-sky-500 to-blue-600 " />
          {/* <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
           CodeArena	
          </span> */}
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-sky-500 to-blue-600 bg-clip-text text-transparent">
  CodeArena
</h1>
        </Link>

        {/* RIGHT SIDE - ACTIONS */}
        <SignedIn>
          <div className="flex items-center space-x-4 ml-auto">
            <DasboardBtn />
            <ModeToggle />
            <UserButton />
          </div>
        </SignedIn>
      </div>
    </nav>
  );
}
export default Navbar;
