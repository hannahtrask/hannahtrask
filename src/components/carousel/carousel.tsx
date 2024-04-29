import { getAllImages } from "@/utils/contentful/contentful-image";
import { Paper } from "@mantine/core";

export async function Carousel() {
  const pics = await getAllImages();

  return (
    <div className="image-carousel">
      {pics &&
        pics.map((pic, index) => {
          return (
            <Paper
              key={index}
              shadow="sm"
              p="xl"
              radius="sm"
              style={{ backgroundImage: `${pic.src}` }}
            />
          );
        })}
    </div>
  );
}
