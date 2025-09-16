import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, FileText, Clock, Truck } from "lucide-react";

const Article1 = () => {
  return (
    <article id="clear-goods-fast" className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Article Header */}
        <header className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full text-primary mb-6">
            <FileText className="w-5 h-5" />
            <span className="text-sm font-medium">Customs & Clearance</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            How to Clear Goods Fast in Lagos Ports (Without Hassles)
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Learn expert tips on customs documentation, freight forwarding, and avoiding costly delays in Nigeria's busiest trade hub.
          </p>
          <div className="flex items-center justify-center gap-6 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>8 min read</span>
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
              Clearing goods through Lagos ports can feel overwhelming for importers and exporters. Between complex customs regulations, ever-changing policies, and crowded terminals, delays are common—and costly. However, with the right approach, you can speed up the process, save money, and ensure smooth clearance of your cargo.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              In this guide, we'll break down step-by-step strategies to clear goods faster in Lagos ports without hassles, and how a tech-enabled freight forwarder like GMSL can make all the difference.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">Understanding the Clearance Process in Lagos</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              The most common causes of delays include:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {[
                "Incomplete or incorrect documentation",
                "Customs queries and inspections", 
                "Unpaid tariffs, duties, or fees",
                "Congested terminals and logistics bottlenecks"
              ].map((item, index) => (
                <Card key={index} className="border-destructive/20 bg-destructive/5">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0" />
                      <p className="text-foreground font-medium">{item}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Each of these can add days—or even weeks—to your clearance timeline. The key is preparation.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">Step 1: Get Your Documentation Right</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Essential documents include:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {[
                "Bill of Lading",
                "Commercial Invoice",
                "Packing List", 
                "Form M",
                "Pre-Arrival Assessment Report (PAAR)",
                "Duty and Tariff payment proof"
              ].map((doc, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-success/5 border border-success/20 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                  <span className="text-foreground font-medium">{doc}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">Step 2: Work with a Licensed Freight Forwarder</h2>
            <Card className="bg-primary/5 border-primary/20 mb-6">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-foreground mb-4">Why it matters:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Proper documentation filing",
                    "Faster access to clearance platforms",
                    "Direct relationships with terminal operators", 
                    "Reduced errors and queries"
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">Step 3: Track Your Shipment Digitally</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Modern tracking systems provide:
            </p>
            <div className="space-y-4 mb-8">
              {[
                "Real-time cargo status updates",
                "Alerts on inspections and clearance approvals",
                "Visibility that reduces surprises and fees"
              ].map((feature, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-accent/5 border border-accent/20 rounded-lg">
                  <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-accent font-bold text-sm">{index + 1}</span>
                  </div>
                  <p className="text-foreground font-medium">{feature}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">How GMSL Helps You Clear Goods Faster</h2>
            <Card className="bg-gradient-accent border-0 text-accent-foreground">
              <CardContent className="p-8">
                <p className="mb-6 text-lg">At GMSL, our tech-enabled system ensures:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    "End-to-end documentation management",
                    "Digital cargo tracking",
                    "Strong customs relationships", 
                    "Lower risk of penalties and demurrage"
                  ].map((service, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-4 h-4" />
                      </div>
                      <span className="font-medium">{service}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">Conclusion</h2>
            <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
              Clearing goods fast in Lagos ports doesn't have to be a nightmare. With the right documents, an experienced freight forwarder, and tech-enabled visibility, your business can stay ahead of competitors.
            </p>
          </section>
        </div>

        {/* CTA */}
        <div className="text-center py-12 bg-gradient-primary/10 rounded-2xl">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Ready to clear your goods faster?
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="shadow-soft hover:shadow-medium">
              Request a Quote
            </Button>
            <Button size="lg" variant="outline">
              Talk to an Expert
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Article1;