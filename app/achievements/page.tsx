// This file makes the /about route accessible.

"use client"; // This is necessary if your About component is a client component

import Achievements from "../../src/pages/Achievements";

export default function AboutPage() {
  return <Achievements />;
}