import type { Metadata } from "next";
import "../app/styles/globals.css";
import { Providers } from "./providers"

export const metadata: Metadata = {
  title: "TwitterX",
  description: "Generated my twitterx app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body>
      <Providers>
      {children}
      </Providers>
      </body>
    </html>
  );
}
