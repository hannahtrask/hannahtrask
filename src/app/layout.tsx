import type { Metadata } from "next";
import "./global.css";
import { cormorant, raleway } from "./fonts";
import React from "react";
import "@mantine/core/styles.css";
import { MantineProvider, ColorSchemeScript } from "@mantine/core";
import { theme } from "../../theme";

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
        <head>
          <ColorSchemeScript />
          <link rel="shortcut icon" href="/favicon.ico" />
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
          />
          <title>hannah catherine trask</title>
        </head>
        <body className={`${cormorant.variable} ${raleway.variable}`}>
          <MantineProvider theme={theme}>{children}</MantineProvider>
        </body>
      </html>
    </>
  );
}
