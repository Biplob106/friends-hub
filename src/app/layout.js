import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { TimelineProvider } from "@/context/TimelineContext";
import ToasterProvider from "@/components/ToasterProvider";

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

          <ToasterProvider />

        </TimelineProvider>

      </body>

    </html>

  );
}