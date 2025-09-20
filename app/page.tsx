// src/pages/Home is likely a client component, so we must add "use client"
// if it uses state, effects, or other client-side features.
"use client";

import Home from "../src/pages/Home";

export default function HomePage() {
  return <Home />;
}
