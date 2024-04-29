import { createClient, Entry } from "contentful";
import { TypeHeaderImageSkeleton } from "@/utils/contentful/types";
const { NEXT_PUBLIC_CONTENTFUL_SPACE_ID, NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN } =
  process.env;

const client = createClient({
  space: NEXT_PUBLIC_CONTENTFUL_SPACE_ID!,
  accessToken: NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN!,
});

type HeaderImageEntry = Entry<TypeHeaderImageSkeleton, undefined, string>;

export interface ContentImage {
  src: HeaderImageEntry | string | undefined;
  alt: string;
}

export function parseContentfulImage(
  asset?: HeaderImageEntry,
): ContentImage | null {
  if (!asset) {
    return null;
  }

  if (!("fields" in asset)) {
    return null;
  }

  return {
    // @ts-ignore
    src: asset.fields.image?.fields?.file.url || "",
    alt: asset.fields.altText || "",
  };
}

export async function getAllImages() {
  const allImagesResult = await client.getEntries<TypeHeaderImageSkeleton>({
    content_type: "headerImage",
    include: 4,
    order: ["fields.image.sys.id"],
  });

  return allImagesResult.items.map(
    (image) => parseContentfulImage(image) as ContentImage,
  );
}
