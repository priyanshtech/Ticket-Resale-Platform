import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Ticket Resale Platform",
  description: "Secure blockchain-based ticket resale marketplace",
};

import Providers from "./providers";
import { TicketProvider } from "@/context/TicketContext";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <TicketProvider>
            {children}
          </TicketProvider>
        </Providers>
      </body>
    </html>
  );
}
