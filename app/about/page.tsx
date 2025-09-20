// app/about/page.tsx
"use client";

import { Suspense, lazy } from "react";
import EventsPageSkeleton from "../../src/components/PageSkeleton"; // Updated to use the new skeleton

// Lazy load the About component - no artificial delay
const About = lazy(() => import("../../src/pages/About"));

export default function AboutPage() {
  return (
    <div style={{ minHeight: '100vh' }}>
      <Suspense fallback={<EventsPageSkeleton />}>
        <About />
      </Suspense>
    </div>
  );
}