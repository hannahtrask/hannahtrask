import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from "contentful";

export interface TypeHeaderImageFields {
  image: EntryFieldTypes.AssetLink;
  altText: EntryFieldTypes.Symbol;
}

export type TypeHeaderImageSkeleton = EntrySkeletonType<
  TypeHeaderImageFields,
  "headerImage"
>;
export type TypeHeaderImage<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode,
> = Entry<TypeHeaderImageSkeleton, Modifiers, Locales>;
