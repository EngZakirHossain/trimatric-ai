import Loader from "@/Components/Loader.jsx";
import TopBar from "@/Components/Topbar.jsx";
import HeroSection from "@/Components/Hero.jsx";
import About from "@/Components/About.jsx";
import Service from "@/Components/Service.jsx";
import Footer from "@/Components/Footer.jsx";
import Project from "@/Components/Project.jsx";
import Team from "@/Components/Team.jsx";
import Blog from "@/Components/Blog.jsx";

export default function Home() {
  return<>
      <Loader/>
      <TopBar/>
      <HeroSection/>
      <About/>
      <Service/>
      <Project/>
      <Team/>
      <Blog/>
      <Footer/>
  </>

}
