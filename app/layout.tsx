import type { Metadata } from "next";
import "./globals.css";
// import { AuthProvider } from "@/context/AuthContext";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#f1f0f0]">
        {/* <AuthProvider>{children}</AuthProvider> */}
        {children}
      </body>
    </html>
  );
}
