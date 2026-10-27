import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ValueProposition from "@/components/ValueProposition";
import Services from "@/components/Services";
import Industries from "@/components/Industries";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <ValueProposition />
      <Services />
      <Industries />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;