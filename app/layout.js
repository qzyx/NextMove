import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import Header from "./_Components/UI/Header";
import SpaceScene from "./_Components/SpaceTheme/SpaceTheme";
import { AuthProvider } from "./_lib/authContext/AuthContext";
import LoadingSpinner from "./_Components/UI/LoadingSpinner";
import PageLoadingSpinner from "./_Components/UI/PageLoadingSpinner";
import { QueueProvider } from "./_lib/QueueContext/QueueContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "NextMove",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          crossOrigin="anonymous"
          src="//unpkg.com/react-scan/dist/auto.global.js"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Sigmar&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-black antialiased flex flex-col min-h-screen`}
      >
        <SpaceScene></SpaceScene>

        <AuthProvider>
          <QueueProvider>
            <Header></Header>

            {children}
          </QueueProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
