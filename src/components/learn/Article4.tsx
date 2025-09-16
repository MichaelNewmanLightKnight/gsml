import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Smartphone, BarChart3, Users, Globe, CheckCircle, Clock } from "lucide-react";

const Article4 = () => {
  return (
    <article id="tech-freight-forwarding" className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Article Header */}
        <header className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full text-primary mb-6">
            <Smartphone className="w-5 h-5" />
            <span className="text-sm font-medium">Technology</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            The Role of Tech in Modern Freight Forwarding in Africa
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Technology is redefining freight forwarding in Africa. See how digital tools improve efficiency, compliance, and cost savings in logistics.
          </p>
          <div className="flex items-center justify-center gap-6 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>7 min read</span>
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
              Africa's logistics sector is evolving rapidly. The old paper-based system is giving way to a tech-enabled freight ecosystem. Nigerian businesses that adopt digital solutions stand to gain efficiency, cost savings, and competitive advantage.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              This article explores how technology is transforming freight forwarding across Africa and what it means for your business.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">Key Roles of Tech in Freight Forwarding</h2>
            
            <div className="space-y-8">
              {/* Digital Documentation */}
              <Card className="border-primary/20 bg-primary/5">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Smartphone className="w-8 h-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-foreground mb-4">Digital Documentation</h3>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-success" />
                          <span className="text-muted-foreground">Eliminates errors in customs paperwork</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-success" />
                          <span className="text-muted-foreground">Speeds up clearance processes</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Real-Time Tracking */}
              <Card className="border-accent/20 bg-accent/5">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Globe className="w-8 h-8 text-accent" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-foreground mb-4">Real-Time Tracking</h3>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-success" />
                          <span className="text-muted-foreground">Businesses can track cargo across the entire journey</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-success" />
                          <span className="text-muted-foreground">Reduces uncertainty and increases accountability</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Predictive Analytics */}
              <Card className="border-amber/20 bg-amber/5">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-amber/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <BarChart3 className="w-8 h-8 text-amber" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-foreground mb-4">Predictive Analytics</h3>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-success" />
                          <span className="text-muted-foreground">Anticipates congestion and clearance timelines</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-success" />
                          <span className="text-muted-foreground">Helps businesses plan ahead</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Client Portals */}
              <Card className="border-success/20 bg-success/5">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-success/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Users className="w-8 h-8 text-success" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-foreground mb-4">Client Portals</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Secure platforms where clients can access invoices, clearance status, and schedules in real-time, providing complete transparency and control over their shipments.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">Why It Matters for Nigerian Businesses</h2>
            
            <Card className="bg-gradient-primary border-0 text-primary-foreground mb-8">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-6">Nigeria's fast-growing economy demands efficiency. Tech-enabled logistics:</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <BarChart3 className="w-8 h-8" />
                    </div>
                    <h4 className="font-bold mb-2">Cuts Costs</h4>
                    <p className="text-sm opacity-90">Reduce demurrage, documentation errors, and storage fees</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="w-8 h-8" />
                    </div>
                    <h4 className="font-bold mb-2">Improves Trust</h4>
                    <p className="text-sm opacity-90">Build stronger relationships with international suppliers</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8" />
                    </div>
                    <h4 className="font-bold mb-2">Strengthens Compliance</h4>
                    <p className="text-sm opacity-90">Stay ahead of NCS and AfCFTA trade rules</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Technology Impact Stats */}
            <div className="bg-muted/20 border border-muted/20 p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-foreground mb-6 text-center">Technology Impact in African Logistics</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">50%</div>
                  <div className="text-sm text-muted-foreground">Faster clearance times</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-success mb-2">70%</div>
                  <div className="text-sm text-muted-foreground">Reduction in documentation errors</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">35%</div>
                  <div className="text-sm text-muted-foreground">Lower logistics costs</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber mb-2">90%</div>
                  <div className="text-sm text-muted-foreground">Improved visibility</div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">Conclusion</h2>
            <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
              Technology isn't just an add-on—it's the backbone of modern freight forwarding. GMSL leverages these innovations to deliver faster, safer, and more transparent logistics that help Nigerian businesses compete globally.
            </p>
          </section>
        </div>

        {/* CTA */}
        <div className="text-center py-12 bg-gradient-accent rounded-2xl">
          <h3 className="text-2xl font-bold text-accent-foreground mb-4">
            Ready to upgrade your logistics?
          </h3>
          <Button size="lg" variant="outline-light" className="shadow-soft hover:shadow-medium">
            Talk to Our Tech-Enabled Team
          </Button>
        </div>
      </div>
    </article>
  );
};

export default Article4;