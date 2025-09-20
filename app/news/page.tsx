// This file makes the /about route accessible.

"use client"; // This is necessary if your About component is a client component

import News from "../../src/pages/News";

export default function AboutPage() {
  return <News />;
}