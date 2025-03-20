"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const HeroSection = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    const imageElement = imageRef.current;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;

      if (scrollPosition > scrollThreshold) {
        imageElement.classList.add("scrolled");
      } else {
        imageElement.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="pt-40 pb-20 px-4">
      <div className="container mx-auto text-center">
      <h1 className="text-6xl md:text-6xl lg:text-[80px] pb-6 gradient-title ">Manage Your Finances<br  />With Intelligence</h1>
      <p className="max-w-3xl mx-auto text-center text-lg text-gray-600 mb-8 ">An AI-Powered financial management platforms that helps you track, 
      analyze and optimize your spending with real-time insights.</p>
        <div className="flex justify-center space-x-4">
          <Link href="/dashboard">
            <Button size="lg" className="px-8">
              Get Started
            </Button>
          </Link>
          <Link href="https://github.com/rahulxrattan">
            <Button size="lg" variant="outline" className="px-8">
              Watch Demo
            </Button>
          </Link>
        </div>
        <div className="hero-image-wrapper mt-5 md:mt-0">
          <div ref={imageRef} className="hero-image">
          <Image
  src="/banner.jpeg"
  width={1280}
  height={720}
  alt="Dashboard Preview"
  className="rounded-lg shadow-2xl border mx-auto max-w-[95%] md:max-w-5xl"
  priority
/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
