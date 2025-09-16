import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, DollarSign, Clock, TrendingDown, Calculator } from "lucide-react";

const Article2 = () => {
  return (
    <article id="hidden-costs" className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Article Header */}
        <header className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 bg-amber/10 px-4 py-2 rounded-full text-amber mb-6">
            <DollarSign className="w-5 h-5" />
            <span className="text-sm font-medium">Cost Optimization</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            The Hidden Costs of Freight Forwarding in Nigeria (and How to Save)
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Freight forwarding in Nigeria often comes with hidden costs. Learn how to identify and reduce extra charges like demurrage, handling fees, and documentation errors.
          </p>
          <div className="flex items-center justify-center gap-6 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>6 min read</span>
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
              Importing goods into Nigeria is never just about shipping costs. Many businesses underestimate the hidden charges involved in freight forwarding—costs that can eat into profits and disrupt cash flow.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              This article explores the most common hidden costs in Nigerian freight forwarding and practical strategies to save money.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">Common Hidden Costs in Freight Forwarding</h2>
            
            <div className="space-y-8">
              {/* Demurrage Charges */}
              <Card className="border-destructive/20 bg-destructive/5">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <AlertTriangle className="w-8 h-8 text-destructive flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">Demurrage Charges</h3>
                      <p className="text-muted-foreground mb-4">
                        Fees for leaving containers at the port beyond free days.
                      </p>
                      <div className="bg-success/10 border border-success/20 p-4 rounded-lg">
                        <p className="text-success font-medium">
                          <strong>Solution:</strong> Pre-clear goods and arrange trucks early.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Storage Fees */}
              <Card className="border-amber/20 bg-amber/5">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <Calculator className="w-8 h-8 text-amber flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">Storage Fees</h3>
                      <p className="text-muted-foreground mb-4">
                        Terminals charge daily for goods not moved on time.
                      </p>
                      <div className="bg-success/10 border border-success/20 p-4 rounded-lg">
                        <p className="text-success font-medium">
                          <strong>Solution:</strong> Use warehouses or bonded terminals.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Documentation Errors */}
              <Card className="border-primary/20 bg-primary/5">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <AlertTriangle className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">Documentation Errors</h3>
                      <p className="text-muted-foreground mb-4">
                        Wrong HS codes, misdeclared quantities, or missing forms cause penalties.
                      </p>
                      <div className="bg-success/10 border border-success/20 p-4 rounded-lg">
                        <p className="text-success font-medium">
                          <strong>Solution:</strong> Experienced freight forwarder reviews all paperwork.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Customs Queries */}
              <Card className="border-accent/20 bg-accent/5">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <TrendingDown className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">Unplanned Customs Queries</h3>
                      <p className="text-muted-foreground mb-4">
                        Incorrect classifications or flagged shipments lead to inspection delays.
                      </p>
                      <div className="bg-success/10 border border-success/20 p-4 rounded-lg">
                        <p className="text-success font-medium">
                          <strong>Solution:</strong> Transparent documentation and proactive compliance.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Handling Charges */}
              <Card className="border-muted/20 bg-muted/5">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <DollarSign className="w-8 h-8 text-muted-foreground flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">Handling & Terminal Charges</h3>
                      <p className="text-muted-foreground mb-4">
                        Offloading, transfer, and handling costs often overlooked.
                      </p>
                      <div className="bg-success/10 border border-success/20 p-4 rounded-lg">
                        <p className="text-success font-medium">
                          <strong>Solution:</strong> Get a full quote upfront from your logistics partner.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">How Tech-Enabled Solutions Reduce Costs</h2>
            <Card className="bg-gradient-primary border-0 text-primary-foreground">
              <CardContent className="p-8">
                <p className="mb-6 text-lg">GMSL uses digital systems to:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    "Provide upfront cost estimates",
                    "Track cargo status to avoid demurrage",
                    "Automate documentation to prevent errors",
                    "Monitor compliance requirements"
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                        <span className="text-sm font-bold">{index + 1}</span>
                      </div>
                      <span className="font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">Case Example</h2>
            <Card className="bg-success/5 border-success/20">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <TrendingDown className="w-8 h-8 text-success flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-4">Real Savings in Action</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      A Nigerian SME importing electronics saved <strong className="text-success">₦3.5 million annually</strong> by using GMSL's tech-enabled clearance system—avoiding delays and hidden fees through transparent processes and proactive monitoring.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">Conclusion</h2>
            <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
              The true cost of freight forwarding isn't just in shipping fees. By working with a transparent, tech-enabled partner, you can cut hidden expenses and protect your margins.
            </p>
          </section>
        </div>

        {/* CTA */}
        <div className="text-center py-12 bg-gradient-accent rounded-2xl">
          <h3 className="text-2xl font-bold text-accent-foreground mb-4">
            Avoid hidden costs with GMSL
          </h3>
          <Button size="lg" variant="outline-light" className="shadow-soft hover:shadow-medium">
            Get a Transparent Quote Today
          </Button>
        </div>
      </div>
    </article>
  );
};

export default Article2;