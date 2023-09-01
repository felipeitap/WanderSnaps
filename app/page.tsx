import Card from "@/components/card";
import PhotosRepo from "@/components/photosRepo";
import SearchBar from "@/components/searchBar";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: "600",
  subsets: ["latin"],
  variable: "--font-poppins",
});

export default function Home() {
  return (
    <>
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

      <PhotosRepo />

      <div className="px-32 flex justify-center mb-32">
        <div className="flex flex-col gap-4">
          <h2 className={`${poppins.variable} font-mono topic-text`}>
            Loking for something more specific
          </h2>
          <SearchBar />
        </div>
      </div>

      <div className="px-32">
        <h2 className={`${poppins.variable} font-mono topic-text bold`}>
          Popular areas
        </h2>
        <div className="grid grid-cols-4 mb-20 gap-20">
          <Card title={"Paris"} styles={"px-0 text-[#2b405cb3]"}>
            <p className="link">Museum of the Louvre</p>
            <p className="link">River Seine</p>
            <p className="link">The Eiffel Tower</p>
            <p className="link">Palace of Versailles</p>
          </Card>
          <Card title={"Paris"} styles={"px-0 text-[#2b405cb3]"}>
            <p className="link">Museum of the Louvre</p>
            <p className="link">River Seine</p>
            <p className="link">The Eiffel Tower</p>
            <p className="link">Palace of Versailles</p>
          </Card>
          <Card title={"Paris"} styles={"px-0 text-[#2b405cb3]"}>
            <p className="link">Museum of the Louvre</p>
            <p className="link">River Seine</p>
            <p className="link">The Eiffel Tower</p>
            <p className="link">Palace of Versailles</p>
          </Card>
          <Card title={"Paris"} styles={"px-0 text-[#2b405cb3]"}>
            <p className="link">Museum of the Louvre</p>
            <p className="link">River Seine</p>
            <p className="link">The Eiffel Tower</p>
            <p className="link">Palace of Versailles</p>
          </Card>
          <Card title={"Paris"} styles={"px-0 text-[#2b405cb3]"}>
            <p className="link">Museum of the Louvre</p>
            <p className="link">River Seine</p>
            <p className="link">The Eiffel Tower</p>
            <p className="link">Palace of Versailles</p>
          </Card>
          <Card title={"Paris"} styles={"px-0 text-[#2b405cb3]"}>
            <p className="link">Museum of the Louvre</p>
            <p className="link">River Seine</p>
            <p className="link">The Eiffel Tower</p>
            <p className="link">Palace of Versailles</p>
          </Card>
          <Card title={"Paris"} styles={"px-0 text-[#2b405cb3]"}>
            <p className="link">Museum of the Louvre</p>
            <p className="link">River Seine</p>
            <p className="link">The Eiffel Tower</p>
            <p className="link">Palace of Versailles</p>
          </Card>
          <Card title={"Paris"} styles={"px-0 text-[#2b405cb3]"}>
            <p className="link">Museum of the Louvre</p>
            <p className="link">River Seine</p>
            <p className="link">The Eiffel Tower</p>
            <p className="link">Palace of Versailles</p>
          </Card>
        </div>
      </div>
    </>
  );
}
