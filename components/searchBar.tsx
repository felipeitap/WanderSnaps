import Image from "next/image";
import zoom from "../public/Vector.png";
import chevron from "../public/chevron.png";

export default function SearchBar({ color }: { color?: Boolean }) {
  return (
    <>
      <div
        className={`${
          color ? `bg-[#e5e7eb87]` : "bg-[#b1ccf022]"
        } flex p-5 w-full gap-4`}
      >
        <div className="flex items-center cursor-pointer gap-2.5">
          <p>All</p>
          <div>
            <Image src={chevron} alt="Imagem de uma seta para baixo" />
          </div>
        </div>
        <input
          type="text"
          className="bg-transparent outline-none w-full"
          placeholder="Search for location"
        />
        <Image
          width={20}
          height={20}
          src={zoom}
          alt="Imagem de uma lupa"
          className="cursor-pointer"
        />
      </div>
    </>
  );
}
