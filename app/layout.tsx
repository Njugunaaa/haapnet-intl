import type React from "react";
import "../src/index.css";
import Nav from "../src/components/Nav.jsx";
import Footer from "../src/components/Footer.jsx";

export const metadata = {
  title: "HAAPNET - Harvest-time Apostolic And Prophetic NETwork",
  description:
    "Building stronger communities through skills training, local leadership, and sustainable development in Kenya.",
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // ✅ Kenyan WhatsApp number in international format
  const whatsappNumber = "254796313151";
  const prefilledMessage = "Hello, I'd like to get in touch with HAAPNET.";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    prefilledMessage
  )}`;

  return (
    <html lang="en" className="scroll-smooth">
      <head />
      <body className="m-0 p-0 overflow-x-hidden">
        <div className="min-h-screen bg-white flex flex-col">
          {/* ✅ Navbar pushed to absolute top */}
          <header className="sticky top-0 z-50 w-full">
            <Nav />
          </header>

          <main className="flex-grow">{children}</main>

          <Footer />

          {/* ✅ Fixed WhatsApp button - server component compatible */}
          <a
            href={whatsappLink}
            className="fixed bottom-6 right-6 z-[9999] group"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with us on WhatsApp"
          >
            {/* Button container - larger and properly green with CSS-only hover */}
            <div className="relative w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center">
              {/* WhatsApp SVG logo - bigger and white */}
              <svg
                className="w-9 h-9 fill-white"
                viewBox="0 0 448 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M380.9 97.1C339 55.1 284.2 32 226.3 32c-123.2 0-223.1 99.9-223.1 223.1 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c123.1 0 223-99.9 223-223 0-59.6-23.2-115.7-65.1-157.9zM226.4 413.4c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L74 335.3l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.7-186.1 184.7zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
              </svg>
              
              {/* Notification dot - bigger */}
              <div className="absolute -top-2 -right-2 bg-red-500 text-white text-sm rounded-full w-7 h-7 flex items-center justify-center font-bold">
                1
              </div>
            </div>
            
            {/* Tooltip */}
            <div className="absolute right-full mr-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-lg">
              Chat with us on WhatsApp
              <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-gray-800"></div>
            </div>
          </a>
        </div>
      </body>
    </html>
  );
}