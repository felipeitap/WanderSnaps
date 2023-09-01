import Image from "next/image";
import { createClient } from "pexels";

const client = createClient(
  "1FVRF2JHpa5c0zfFiE55SZTcSAjN6xgg43thcaYMhiXn3QlqrcI5qlRg"
);

async function getPhotos() {
  const photos = await client.photos.search({ query: "cities", per_page: 15 });
  return photos;
}

export default async function PhotosRepo() {
  const photosArr = await getPhotos();

  return (
    <div className="relative py-8 px-32 ">
      <div className="columns-4 gap-4">
        {photosArr?.photos.map((e, i) => (
          <Image
            className="mb-4 hover:scale-95 duration-500 cursor-pointer ease-in-out "
            key={i}
            src={e?.src?.original}
            alt={e.alt}
            width={e.width}
            height={e.height}
          />
        ))}
      </div>
      <div className="absolute right-0 bottom-0 left-0	top-[85%] bg-white blur-md"> <h1></h1></div>
    </div>
  );
}
