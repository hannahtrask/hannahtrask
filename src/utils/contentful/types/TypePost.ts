import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from "contentful";

export interface TypePostFields {
  title: EntryFieldTypes.Symbol;
  author: EntryFieldTypes.Symbol;
  summary?: EntryFieldTypes.Text;
  image?: EntryFieldTypes.AssetLink;
  publishDate: EntryFieldTypes.Date;
  article: EntryFieldTypes.RichText;
  publish?: EntryFieldTypes.Boolean;
}

export type TypePostSkeleton = EntrySkeletonType<TypePostFields, "post">;
export type TypePost<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode,
> = Entry<TypePostSkeleton, Modifiers, Locales>;
