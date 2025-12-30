import SketchNav from "./components/navigation";
import SketchHero from "./components/hero";
import AboutSection from "./components/about";
import GallerySection from "./components/gallery";
import TeachingSection from "./components/teaching";
import CodeSection from "./components/coding";
import ContactSection from "./components/contact";
import Footer from "./components/footer";
export default function Home() {
  return (
    <>
      <SketchNav />
      <SketchHero />
      <AboutSection />
      <GallerySection />
      <TeachingSection />
      <CodeSection />
      <ContactSection />
      <Footer />
    </>
  );
}
