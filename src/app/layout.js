// app/layout.js
import "./globals.css";
import Nav from '../components/Nav';
import Footer from '../components/Footer';

export const metadata = {
  title: "KinKeeper",
  description: "Keep your important relationships alive",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body 
        className="min-h-full flex flex-col bg-gray-50"
        suppressHydrationWarning={true}
      >
        <Nav />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}