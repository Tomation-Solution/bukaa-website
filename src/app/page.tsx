"use client"

import Achievement from "@/lib/component/Achievement";
import Hero from "@/lib/component/Hero";
import Members from "@/lib/component/Members";
import Mission from "@/lib/component/Mission";
import Vision from "@/lib/component/Vision";

export default function Home() {
  return (
    <>
    <Hero />
    <Vision />
    <Mission />
    <Achievement />
    <Members />
    </>
  );
}
