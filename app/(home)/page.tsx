'use client';
import Image from "next/image";
import TypingText from "@/components/text/TypingText";
import Lenis from 'lenis';
import {useEffect} from "react";

export default function Home() {

    /* Lenis Scroll */
    useEffect(() => {
        // Initialize Lenis
        const lenis = new Lenis({
            autoRaf: true,
        });

        // Listen for the scroll event and log the event data
        lenis.on('scroll', (e) => {
            console.log(e);
        });
    },[])




  return (
    <div className="flex flex-col w-full items-center justify-center">
        <div className="flex flex-col gap-10 w-full min-h-svh">
            <div className="max-w-6/7 mx-auto mt-15">
                <TypingText text="Hi. I'm Matt." className="text-7xl glow"/>
            </div>
            <div className="max-w-6/7 mx-auto">
                <p className="text-4xl text-foreground/75">

                </p>
            </div>
        </div>
        <div className="mb-400">

        </div>
    </div>
  );
}
