'use client';
import Image from "next/image";
import GlowingText from "@/components/text/GlowingText";
import TypingText from "@/components/text/TypingText";

export default function Home() {
  return (
    <div className="flex flex-col h-screen w-full items-center justify-center">
        <div className="max-w-2xl mx-auto">
            <GlowingText><TypingText text="Hi. I'm Matt." className="text-7xl"/></GlowingText>
        </div>
    </div>
  );
}
