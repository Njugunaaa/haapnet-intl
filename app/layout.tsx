import type React from "react"
import "../src/index.css"

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
      <body>{children}</body>
    </html>
  )
}
