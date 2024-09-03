import type { Metadata } from "next";
import { dio_font_normale, euclid } from "@/lib/fonts/font";
import { NavBar } from "@/app/components/UiComponents/NavBar";
import "./globals.css";
import Zlayout from "./components/Zlayout";
import { FotterComponent } from "@/app/components/UiComponents/Fotter";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

export const metadata: Metadata = {
  title: "guiding fox",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${dio_font_normale.className} w-screen bg-[#FEFEFF] overflow-x-hidden`}
        >
          <NavBar />
          {children}
          <Zlayout />
          <FotterComponent />
        </body>
      </html>
    </ClerkProvider>
  );
}
