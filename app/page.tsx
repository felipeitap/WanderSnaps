import SearchBar from "@/components/searchBar";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-poppins",
});

export default function Home() {
  return (
    <div className="hero w-full flex flex-col items-center justify-center p-10 ">
      <div className="flex flex-col gap-4">
        <h2 className={`${poppins.variable} font-mono hero-title`}>
          The world in the palm of your hand
        </h2>
        <h2 className={`${poppins.variable} font-mono hero-title`}>
          as you have never seen it.
        </h2>
        <p className={`${poppins.variable} font-mono text-white`}>
          Royalty free photos and videos, sorted by geographic location
        </p>
        <SearchBar color />
      </div>
    </div>
  );
}
