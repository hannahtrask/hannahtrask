import type { Metadata } from "next";
import "./global.css";
import { cormorant, raleway } from "./fonts";
import React from "react";

export const metadata: Metadata = {
  title: "hannah catherine",
  description: "A look into how I see the world. Let me create for you.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en">
        <body className={`${cormorant.variable} ${raleway.variable}`}>
          {children}
        </body>
      </html>
    </>
  );
}
