import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Eye, Shield, Users, TrendingUp, CheckCircle, Clock } from "lucide-react";

const Article3 = () => {
  return (
    <article id="supply-chain-transparency" className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Article Header */}
        <header className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full text-accent mb-6">
            <Eye className="w-5 h-5" />
            <span className="text-sm font-medium">Digital Transformation</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Why Transparency in Supply Chains Matters for Nigerian Businesses
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Supply chain transparency is critical for Nigerian businesses. Learn why visibility, trust, and digital tracking are the future of logistics.
          </p>
          <div className="flex items-center justify-center gap-6 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>5 min read</span>
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
              Today's Nigerian businesses face increasing demands from customers and regulators alike. Transparency in supply chains is no longer optional—it's a competitive advantage.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              This article highlights why supply chain transparency matters, especially in Nigeria, and how digital tracking is transforming logistics.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">The Cost of Opaque Supply Chains</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {[
                {
                  icon: Clock,
                  title: "Missed Deadlines",
                  description: "Lack of visibility leads to unexpected delays and broken promises to customers.",
                  color: "destructive"
                },
                {
                  icon: TrendingUp,
                  title: "Rising Demurrage",
                  description: "Unknown delays result in costly port charges and storage fees.",
                  color: "amber"
                },
                {
                  icon: Users,
                  title: "Customer Distrust",
                  description: "Inability to provide updates damages relationships and reputation.",
                  color: "primary"
                },
                {
                  icon: Shield,
                  title: "Fraud Risk",
                  description: "Poor visibility increases susceptibility to malpractice and fraud.",
                  color: "accent"
                }
              ].map((item, index) => (
                <Card key={index} className={`border-${item.color}/20 bg-${item.color}/5`}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <item.icon className={`w-8 h-8 text-${item.color} flex-shrink-0 mt-1`} />
                      <div>
                        <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                        <p className="text-muted-foreground text-sm">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">Benefits of Transparent Supply Chains</h2>
            
            <div className="space-y-6">
              {[
                {
                  title: "Real-Time Visibility",
                  description: "Know where cargo is at all times.",
                  icon: Eye
                },
                {
                  title: "Customer Trust", 
                  description: "Provide updates and reduce disputes.",
                  icon: Users
                },
                {
                  title: "Cost Control",
                  description: "Avoid penalties and unplanned storage.",
                  icon: TrendingUp
                },
                {
                  title: "Regulatory Compliance",
                  description: "Stay ahead of NCS and SONCAP requirements.",
                  icon: Shield
                }
              ].map((benefit, index) => (
                <Card key={index} className="border-success/20 bg-success/5">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-success/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <benefit.icon className="w-6 h-6 text-success" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-2">{benefit.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">The Digital Shift in Nigeria's Logistics</h2>
            
            <Card className="bg-gradient-primary border-0 text-primary-foreground mb-8">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Platforms like GMSL's tracking tools allow:</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    "Instant shipment status updates",
                    "Secure access to customs documentation", 
                    "Automated alerts on inspections or clearance approvals"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-6 h-6 flex-shrink-0" />
                      <span className="font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="bg-muted/20 border border-muted/20 p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-foreground mb-4">Digital Transformation Impact</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Nigerian businesses that have adopted digital tracking report:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">40%</div>
                  <div className="text-sm text-muted-foreground">Reduction in clearance time</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-success mb-2">60%</div>
                  <div className="text-sm text-muted-foreground">Fewer documentation errors</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">85%</div>
                  <div className="text-sm text-muted-foreground">Improved customer satisfaction</div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">Conclusion</h2>
            <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
              A transparent supply chain is the difference between reactive logistics and proactive business growth. In Nigeria's competitive market, visibility isn't just nice to have—it's essential for success.
            </p>
          </section>
        </div>

        {/* CTA */}
        <div className="text-center py-12 bg-gradient-accent rounded-2xl">
          <h3 className="text-2xl font-bold text-accent-foreground mb-4">
            Build transparency into your logistics
          </h3>
          <Button size="lg" variant="outline-light" className="shadow-soft hover:shadow-medium">
            Partner with GMSL Today
          </Button>
        </div>
      </div>
    </article>
  );
};

export default Article3;