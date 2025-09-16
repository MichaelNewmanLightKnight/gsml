import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, BookOpen, Clock, Tag } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const articles = [
  {
    id: "clear-goods-fast",
    title: "How to Clear Goods Fast in Lagos Ports (Without Hassles)",
    description: "Learn expert tips on customs documentation, freight forwarding, and avoiding costly delays in Nigeria's busiest trade hub.",
    category: "Customs & Clearance",
    readTime: "8 min read",
    image: "/placeholder.svg"
  },
  {
    id: "hidden-costs",
    title: "The Hidden Costs of Freight Forwarding in Nigeria (and How to Save)",
    description: "Discover how to identify and reduce extra charges like demurrage, handling fees, and documentation errors.",
    category: "Cost Optimization",
    readTime: "6 min read",
    image: "/placeholder.svg"
  },
  {
    id: "supply-chain-transparency",
    title: "Why Transparency in Supply Chains Matters for Nigerian Businesses",
    description: "Learn why visibility, trust, and digital tracking are the future of logistics in Nigeria.",
    category: "Digital Transformation",
    readTime: "5 min read",
    image: "/placeholder.svg"
  },
  {
    id: "tech-freight-forwarding",
    title: "The Role of Tech in Modern Freight Forwarding in Africa",
    description: "See how digital tools improve efficiency, compliance, and cost savings in African logistics.",
    category: "Technology",
    readTime: "7 min read",
    image: "/placeholder.svg"
  },
  {
    id: "afcfta-preparation",
    title: "Preparing Your Business for the African Continental Free Trade Area (AfCFTA)",
    description: "Learn how to prepare your supply chain and logistics for Africa's largest free trade agreement.",
    category: "Trade Policy",
    readTime: "9 min read",
    image: "/placeholder.svg"
  }
];

const Learn = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  const categories = ["All", "Customs & Clearance", "Cost Optimization", "Digital Transformation", "Technology", "Trade Policy"];
  
  const filteredArticles = selectedCategory === "All" 
    ? articles 
    : articles.filter(article => article.category === selectedCategory);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-white/90 mb-6 backdrop-blur-sm">
              <BookOpen className="w-5 h-5" />
              <span className="text-sm font-medium">Knowledge Hub</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Learn with <span className="text-accent">GMSL</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Master freight forwarding, customs clearance, and supply chain optimization with expert insights from Nigeria's tech-enabled logistics leaders.
            </p>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className="transition-all duration-300"
                >
                  <Tag className="w-4 h-4 mr-2" />
                  {category}
                </Button>
              ))}
            </div>

            {/* Articles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article) => (
                <Card key={article.id} className="group hover:shadow-strong transition-all duration-300 overflow-hidden border-border/50 hover:border-primary/50">
                  <div className="aspect-video bg-gradient-primary/10 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20" />
                    <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                      <span className="text-xs font-medium text-primary">{article.category}</span>
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm mb-2">
                      <Clock className="w-4 h-4" />
                      <span>{article.readTime}</span>
                    </div>
                    <CardTitle className="group-hover:text-primary transition-colors duration-300 line-clamp-2">
                      {article.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-3">
                      {article.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button 
                      variant="ghost" 
                      className="group/btn w-full justify-between hover:bg-primary/5"
                      onClick={() => {
                        const element = document.getElementById(article.id);
                        element?.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      <span>Read Article</span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-accent">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-accent-foreground mb-6">
              Ready to Apply What You've Learned?
            </h2>
            <p className="text-accent-foreground/80 mb-8 max-w-2xl mx-auto">
              Put these insights into practice with GMSL's tech-enabled freight forwarding solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline-light">
                Request a Quote
              </Button>
              <Button size="lg" variant="secondary">
                Talk to an Expert
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Learn;