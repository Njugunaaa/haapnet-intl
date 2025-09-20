// This file makes the /about route accessible.

"use client"; // This is necessary if your About component is a client component

import Events from "../../src/pages/Events";

export default function AboutPage() {
  return <Events />;
}