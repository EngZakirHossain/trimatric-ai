"use client";

import HeroSection from "@/Components/Hero.jsx";
import About from "@/Components/About.jsx";
import Service from "@/Components/Service.jsx";
import Project from "@/Components/Project.jsx";
import Team from "@/Components/Team.jsx";
import Blog from "@/Components/Blog.jsx";
import Testimonial from "@/Components/Testimonial.jsx";

export default function Home() {
  return (
    <>
      <HeroSection />
      <About />
      <Service />
      <Project />
      <Team />
      <Testimonial />
      <Blog />
    </>
  );
}
