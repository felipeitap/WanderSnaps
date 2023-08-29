import SearchBar from "./searchBar";
import { Fira_Sans } from "next/font/google";

const FiraSans = Fira_Sans({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-fira",
});

export default function Header() {
  return (
    <header className="px-16 lg:px-8 py-8 ">
      <div className="flex items-center justify-between gap-8 xl:gap-12 ">
        <h1 className={`${FiraSans.variable} font-sans text-2xl`}>
          WanderSnaps
        </h1>
        <SearchBar />
        <div className="flex gap-4 xl:gap-8 text-[#2B405C] items-center">
          <p className="w-20">Use cases</p>

          <p>About</p>

          <p>Blog</p>

          <div className="bg-[#0047A3] text-white py-3 px-8 rounded">
            <p>Submit</p>
          </div>

          <p>Login</p>
        </div>
      </div>
    </header>
  );
}
