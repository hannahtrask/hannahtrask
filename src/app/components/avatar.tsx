"use client";
import Image from "next/image";

interface AvatarProps {
  id: string;
  alt: string;
}

export function Avatar({ id, alt }: AvatarProps) {
  return (
    <>
      <Image src={`/assets/${id}.png`} alt={alt} width="64" height="64" />
    </>
  );
}
