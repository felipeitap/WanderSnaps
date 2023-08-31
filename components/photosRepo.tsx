import Image from "next/image";
import { createClient } from "pexels";

const client = createClient(
  "1FVRF2JHpa5c0zfFiE55SZTcSAjN6xgg43thcaYMhiXn3QlqrcI5qlRg"
);

async function getPhotos() {
  const photos = await client.photos.search({ query: "cities", per_page: 9 });
  return photos;
}

export default async function PhotosRepo() {
  const photosArr = await getPhotos();

  return (
    <div className="columns-4 py-8 px-32 gap-4">
      {photosArr?.photos.map((e, i) => (
        <Image
          className="mb-4"
          key={i}
          src={e?.src?.original}
          alt={e.alt}
          width={e.width}
          height={e.height}
        />
      ))}
    </div>
  );
}
