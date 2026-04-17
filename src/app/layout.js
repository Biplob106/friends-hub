import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { TimelineProvider } from "@/context/TimelineContext";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "KeenKeeper"
};

export default function RootLayout({ children }) {

  return (

    <html lang="en">

      <body>

        <TimelineProvider>

          <Navbar />

          <main className="max-w-7xl mx-auto px-4 min-h-screen">

            {children}

          </main>

          <Footer />

          <Toaster position="top-right" />

        </TimelineProvider>

      </body>

    </html>

  );
}