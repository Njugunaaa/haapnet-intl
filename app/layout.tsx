import type React from "react"
import "../src/index.css"
import Nav from "../src/components/Nav.jsx"
import Footer from "../src/components/Footer.jsx"

export const metadata = {
  title: "HAAPNET - Harvest-time Apostolic And Prophetic NETwork",
  description:
    "Building stronger communities through skills training, local leadership, and sustainable development in Kenya.",
  generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const whatsappNumber = "254796313151"; // Replace with your Kenyan number (e.g., 2547XXXXXXXX)
  const prefilledMessage = "Hello, I'd like to get in touch.";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(prefilledMessage)}`;

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="keywords"
          content="community development, Kenya, training, leadership, sustainable development, local empowerment, skills training, business support"
        />
        <meta name="author" content="HAAPNET" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="en" />
        <meta name="geo.region" content="KE" />
        <meta name="theme-color" content="#2563eb" />

        <meta property="og:title" content="HAAPNET - Building Stronger Communities" />
        <meta
          property="og:description"
          content="Empowering local voices for change through training, business support, and community projects."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://haapnet.org" />
        <meta property="og:site_name" content="HAAPNET" />
        <meta property="og:image" content="https://haapnet.org/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="en_KE" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="HAAPNET - Building Stronger Communities" />
        <meta
          name="twitter:description"
          content="Empowering local voices for change through training, business support, and community projects."
        />
        <meta name="twitter:image" content="https://haapnet.org/twitter-image.jpg" />
        <meta name="twitter:site" content="@haapnet" />

        <link rel="canonical" href="https://haapnet.org" />
        <link rel="alternate" hrefLang="en" href="https://haapnet.org" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "HAAPNET",
              alternateName: "Harvest-time Apostolic And Prophetic NETwork",
              url: "https://haapnet.org",
              logo: "https://haapnet.org/logo.png",
              description:
                "Building stronger communities through skills training, local leadership, and sustainable development in Kenya.",
              address: {
                "@type": "PostalAddress",
                addressCountry: "KE",
                addressRegion: "Kenya",
              },
              sameAs: ["https://facebook.com/haapnet", "https://twitter.com/haapnet", "https://instagram.com/haapnet"],
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "General Inquiries",
                email: "info@haapnet.org",
              },
            }),
          }}
        />
      </head>
      <body>
        <div className="min-h-screen bg-white">
          <Nav />
          {children}
          <Footer />

          {/* WhatsApp floating button with enhanced styling */}
          <a
            href={whatsappLink}
            className="fixed bottom-20 right-6 z-50 p-4 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 hover:scale-110 animate-pulse"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with us on WhatsApp"
          >
            <svg
              className="w-10 h-10 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0C5.373 0 0 5.373 0 12c0 3.535 1.556 6.727 4.028 8.95L3 24l5.056-1.396A12 12 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zM12 21.5c-2.486 0-4.721-1.01-6.353-2.647L4 20l1.147-3.447C3.59 15.72 3 13.916 3 12c0-4.962 4.038-9 9-9s9 4.038 9 9-4.038 9-9 9zM17.5 15.5c-.247-.123-.532-.185-.75-.185-.246 0-.448.062-.64.185-.205.14-.616.618-.755.772-.137.153-.284.17-.52.066-.234-.103-1.002-.375-1.91-1.173-.703-.614-1.178-1.378-1.317-1.55-.138-.172-.016-.264.093-.377.098-.106.216-.25.32-.378.106-.129.14-.24.21-.378.07-.137.035-.259-.018-.363-.053-.105-.48-.255-.672-.345-.192-.09-.327-.138-.458-.138s-.24.03-.357.172c-.117.143-.454.444-.454.912s.465 1.056.53 1.13c.066.075 1.026 1.573 2.502 2.155 1.474.582 1.474.394 1.74.372.267-.022.868-.354 1.002-.524.136-.17.136-.314.095-.398-.04-.085-.152-.132-.32-.218z" />
            </svg>
          </a>
        </div>
      </body>
    </html>
  )
}