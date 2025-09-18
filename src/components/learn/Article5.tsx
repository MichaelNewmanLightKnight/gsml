import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Globe, TrendingUp, Users, CheckCircle, Clock, MapPin } from "lucide-react";

const Article5 = () => {
  return (
    <article id="afcfta-preparation" className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Article Header */}
        <header className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 bg-success/10 px-4 py-2 rounded-full text-success mb-6">
            <Globe className="w-5 h-5" />
            <span className="text-sm font-medium">Trade Policy</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Preparing Your Business for the African Continental Free Trade Area (AfCFTA)
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            The African Continental Free Trade Area (AfCFTA) creates new export opportunities for Nigerian businesses. Learn how to prepare your supply chain and logistics.
          </p>
          <div className="flex items-center justify-center gap-6 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>9 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <span>•</span>
              <span>Updated September 2024</span>
            </div>
          </div>
        </header>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">Introduction</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              The AfCFTA is the largest free trade agreement in the world, covering 1.3 billion people across Africa. For Nigerian businesses, this presents a golden opportunity—but only if logistics are well-prepared.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              This article explains how to get your business AfCFTA-ready and capitalize on Africa's massive trade potential.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">What AfCFTA Means for Nigerian Businesses</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card className="border-success/20 bg-success/5">
                <CardContent className="p-6 text-center">
                  <TrendingUp className="w-12 h-12 text-success mx-auto mb-4" />
                  <h3 className="font-bold text-foreground mb-2">Lower Tariffs</h3>
                  <p className="text-muted-foreground text-sm">Easier access to African markets with reduced trade barriers</p>
                </CardContent>
              </Card>
              <Card className="border-primary/20 bg-primary/5">
                <CardContent className="p-6 text-center">
                  <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-bold text-foreground mb-2">Bigger Customer Base</h3>
                  <p className="text-muted-foreground text-sm">Reach beyond Nigeria's borders to 1.3 billion potential customers</p>
                </CardContent>
              </Card>
              <Card className="border-amber/20 bg-amber/5">
                <CardContent className="p-6 text-center">
                  <Globe className="w-12 h-12 text-amber mx-auto mb-4" />
                  <h3 className="font-bold text-foreground mb-2">Increased Competition</h3>
                  <p className="text-muted-foreground text-sm">Efficiency is no longer optional—streamlined logistics become critical</p>
                </CardContent>
              </Card>
            </div>

            {/* AfCFTA Statistics */}
            <Card className="bg-gradient-primary border-0 text-primary-foreground mb-8">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">AfCFTA by the Numbers</h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">1.3B</div>
                    <div className="text-sm opacity-90">People covered</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">$3.4T</div>
                    <div className="text-sm opacity-90">Combined GDP</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">54</div>
                    <div className="text-sm opacity-90">African countries</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">90%</div>
                    <div className="text-sm opacity-90">Tariff elimination target</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">Steps to Prepare Your Business</h2>
            
            <div className="space-y-8">
              {/* Step 1 */}
              <Card className="border-l-4 border-l-primary">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-bold text-lg">1</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-foreground mb-4">Understand Export Requirements</h3>
                      <p className="text-muted-foreground mb-4">Each African market has unique requirements:</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-success" />
                          <span className="text-muted-foreground">Product standards and certifications</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-success" />
                          <span className="text-muted-foreground">Labeling and packaging requirements</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-success" />
                          <span className="text-muted-foreground">Compliance documentation</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-success" />
                          <span className="text-muted-foreground">Rules of origin certification</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Step 2 */}
              <Card className="border-l-4 border-l-accent">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-accent font-bold text-lg">2</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-foreground mb-4">Optimize Supply Chains</h3>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-success" />
                          <span className="text-muted-foreground">Build partnerships with reliable freight forwarders</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-success" />
                          <span className="text-muted-foreground">Use digital tools for cross-border visibility</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-success" />
                          <span className="text-muted-foreground">Establish regional distribution hubs</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Step 3 */}
              <Card className="border-l-4 border-l-amber">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 bg-amber/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-amber font-bold text-lg">3</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-foreground mb-4">Invest in Customs Knowledge</h3>
                      <p className="text-muted-foreground mb-4">
                        Each country has unique procedures. Work with experts to avoid penalties and delays.
                      </p>
                      <div className="bg-muted/20 p-4 rounded-lg">
                        <p className="text-muted-foreground text-sm">
                          <strong>Pro Tip:</strong> Partner with freight forwarders who have established relationships across African customs authorities.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Step 4 */}
              <Card className="border-l-4 border-l-success">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 bg-success/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-success font-bold text-lg">4</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-foreground mb-4">Leverage Tech-Enabled Logistics</h3>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-success" />
                          <span className="text-muted-foreground">Real-time tracking across African trade routes</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-success" />
                          <span className="text-muted-foreground">Digital documentation for smoother clearance</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-success" />
                          <span className="text-muted-foreground">Automated compliance monitoring</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">How GMSL Supports AfCFTA Readiness</h2>
            
            <Card className="bg-gradient-accent border-0 text-accent-foreground">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 mx-auto mb-4 opacity-90" />
                    <h4 className="font-bold mb-2">Simplified Export Clearance</h4>
                    <p className="text-sm opacity-80">Streamlined processes for African market entry</p>
                  </div>
                  <div className="text-center">
                    <Globe className="w-12 h-12 mx-auto mb-4 opacity-90" />
                    <h4 className="font-bold mb-2">Cross-Border Tracking</h4>
                    <p className="text-sm opacity-80">Tech-enabled visibility across African trade routes</p>
                  </div>
                  <div className="text-center">
                    <Users className="w-12 h-12 mx-auto mb-4 opacity-90" />
                    <h4 className="font-bold mb-2">SME Advisory Services</h4>
                    <p className="text-sm opacity-80">Expert guidance for businesses entering new markets</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">Conclusion</h2>
            <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
              AfCFTA opens the door to Africa-wide opportunities—but only businesses with efficient logistics strategies will thrive. The time to prepare is now, as early adopters will gain the greatest competitive advantages in this historic trade transformation.
            </p>
          </section>
        </div>
      </div>
    </article>
  );
};

export default Article5;