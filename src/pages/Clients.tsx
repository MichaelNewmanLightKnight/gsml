import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  Building2,
  Ship,
  Radio,
  FlaskConical,
  Wrench,
  Truck,
  CheckCircle2,
  FileText,
  ShieldCheck,
  PackageCheck,
} from "lucide-react";

type Step = { title: string; body: string };
type ClientReport = {
  id: string;
  name: string;
  scope: string;
  location: string;
  period: string;
  icon: React.ElementType;
  accent: string;
  intro: string;
  sections: { heading: string; steps?: Step[]; bullets?: string[]; body?: string }[];
  compliance: string[];
  conclusion: string;
};

const clients: ClientReport[] = [
  {
    id: "navada",
    name: "NAVADA SPRING LIMITED",
    scope: "Home Use Items (Europe) & Cars/Vehicles (USA)",
    location: "Lagos – Apapa, PTML, Tin Can, RoRo Terminals",
    period: "Ongoing",
    icon: Building2,
    accent: "from-primary to-primary/80",
    intro:
      "End-to-end clearing for household items imported from European countries and vehicles imported from the USA into Nigeria — covering documentation, compliance and agency liaison for smooth, lawful clearance.",
    sections: [
      {
        heading: "Home Use Items – Europe",
        steps: [
          {
            title: "Documentation",
            body: "Verify Bill of Lading/Airway Bill, Commercial Invoice, Packing List, EUR.1 Certificate, SONCAP Certificate/PC, Form M, PAAR, and NAFDAC registration where applicable.",
          },
          {
            title: "Pre-Arrival",
            body: "Lodge Form M via CBN e-Form M, obtain SONCAP PC for regulated products, and transmit documents to Customs via Nigeria Trade Portal.",
          },
          {
            title: "Arrival & Examination",
            body: "Cargo arrives at Lagos/Apapa/PTML/Tin Can. Generate SGD and PAAR, pay duties, VAT, ETLS, CISS and port charges, and request physical/scan examination by Customs, SON and other agencies.",
          },
          {
            title: "Release",
            body: "After duties and charges are confirmed, Customs issues a release order and cargo is evacuated to the NAVADA SPRING warehouse.",
          },
        ],
      },
      {
        heading: "Cars / Vehicles – USA",
        steps: [
          {
            title: "Documentation",
            body: "Obtain Bill of Lading, Commercial Invoice, Vehicle Title, VIN, Certificate of Origin, Form M, PAAR and E-valuation Report.",
          },
          {
            title: "Valuation & Duty Assessment",
            body: "Customs uses VIN, VReg and HS Code: Duty 20% + Levy 35% for used vehicles, plus VAT 7.5%, ETLS, CISS and port charges. Total landed cost is calculated for the client.",
          },
          {
            title: "Examination",
            body: "Physical examination at the RoRo terminal — VIN, year of manufacture and condition verified. Customs/NIWA checks completed.",
          },
          {
            title: "Payment & Release",
            body: "Assessed duties/levies paid via Remita/e-payment. Customs Release Order and Gate Pass obtained, and the vehicle is delivered to client premises.",
          },
        ],
      },
    ],
    compliance: [
      "Strict adherence to Nigeria Customs Service import guidelines and fiscal policies.",
      "Ensuring all SONCAP/NAFDAC requirements are met for home use items to avoid seizure.",
      "Timely payment to prevent demurrage and storage charges.",
      "Liaison with shipping lines, terminals, Customs, SON, NAFDAC and NDLEA where required.",
    ],
    conclusion:
      "Handled end-to-end to ensure transparency, regulatory compliance and timely delivery of home use items from Europe and vehicles from the USA — minimizing delays and additional costs.",
  },
  {
    id: "aba",
    name: "Aba Shipping Company",
    scope: "Sports Items, Fabrics & Shoes",
    location: "Lagos Apapa, Tin Can, PTML, MMIA Cargo",
    period: "Ongoing",
    icon: Ship,
    accent: "from-accent to-amber",
    intro:
      "Clearing of sports items, fabrics/textiles and footwear imported into Nigeria — covering documentation, regulatory compliance and agency liaison for lawful, timely release.",
    sections: [
      {
        heading: "Clearing Process",
        steps: [
          {
            title: "Documentation & Pre-Arrival",
            body: "Verify B/L or AWB, Commercial Invoice, Packing List, Form M + CBN approval, PAAR, SONCAP PC/Certificate (required for footwear and textiles) and NAFDAC certificate where applicable. Documents transmitted via Nigeria Trade Portal / ASYCUDA.",
          },
          {
            title: "Valuation & Duty Assessment",
            body: "HS classification: Shoes (Ch. 64) — Duty 20% + Levy 5%; Fabrics/Textiles (Ch. 52–63) — Duty 10–35% + Levy 0–20%; Sports Items (Ch. 95) — Duty 5–20%. All attract VAT 7.5% + ETLS + CISS. E-valuation issued; payment via Remita.",
          },
          {
            title: "Examination & Inspection",
            body: "SGD generated on arrival. Customs physical/scanner exam, SON for SONCAP compliance on shoes & fabrics, NDLEA/Quarantine where required. Goods verified against invoice, packing list and PAAR.",
          },
          {
            title: "Payment & Release",
            body: "Once duties, VAT, port and terminal charges are settled, Customs issues Release Order + Gate Pass and cargo is evacuated to the client's warehouse in Aba, Abia State.",
          },
        ],
      },
    ],
    compliance: [
      "SONCAP PC + Certificate mandatory for all shoes and textile imports — without it cargo risks seizure.",
      "Textile restrictions: some fabrics are restricted/banned; accurate HS classification is essential.",
      "Customs closely monitors valuation of shoes and fabrics — true CIF value must be declared.",
      "Demurrage and storage accrue daily after free days — early documentation reduces cost.",
    ],
    conclusion:
      "End-to-end clearing for sports items, fabrics and shoes — ensuring full compliance with NCS, SON and other regulators while delivering cargo safely to the client.",
  },
  {
    id: "alltalk",
    name: "All Talk Nigeria Ltd",
    scope: "Telecommunications Equipment",
    location: "Apapa, Tin Can, PTML, EFL Ibeshe Ikorodu, MMIA Cargo",
    period: "Ongoing",
    icon: Radio,
    accent: "from-primary to-accent",
    intro:
      "Clearing of telecommunications equipment — routers, switches, phones, base stations, cables, antennas and accessories — covering documentation, compliance and agency coordination.",
    sections: [
      {
        heading: "Clearing Process",
        steps: [
          {
            title: "Documentation & Pre-Arrival",
            body: "Verify Bill of Lading, Commercial Invoice & Packing List, Form M + CBN approval, PAAR, SONCAP PC/Certificate, NCC Type Approval Certificate (mandatory) and NAFDAC where medical/radiation components are involved. Documents transmitted via ASYCUDA / Trade Portal pre-arrival.",
          },
          {
            title: "HS Classification & Valuation",
            body: "Examples: HS 85.17 (telephones), HS 85.25 (transmission apparatus). Duty 5–10% + Levy 0–5% (ICT) + VAT 7.5% + ETLS 0.5% + CISS 1% + NCC levy 1% of CIF. E-valuation issued; payment via Remita.",
          },
          {
            title: "Examination & Regulatory Inspection",
            body: "SGD generated on arrival. Customs physical/scanner exam, SON SONCAP check, NCC verification of Type Approval (items without approval can be detained/seized), and NDLEA routine check.",
          },
          {
            title: "Payment & Release",
            body: "Once duties, taxes, NCC levy and port charges are confirmed, Customs issues Release Order + Gate Pass and cargo is evacuated to the client warehouse.",
          },
        ],
      },
    ],
    compliance: [
      "NCC Type Approval is non-negotiable — pre-shipment approval saves time and prevents demurrage.",
      "SONCAP PC required before shipment for telecom/electronic items.",
      "Correct HS coding is critical — misclassification of routers, BTS or accessories attracts penalties.",
      "Encryption items may require an End-User Certificate / approval from NSA.",
    ],
    conclusion:
      "End-to-end clearing for telecommunications cargo — full compliance with NCS, SON, NCC and other agencies, reducing delays and penalties.",
  },
  {
    id: "foggs",
    name: "FOGGS Integrated Services Limited",
    scope: "Dangerous Goods & Food Items",
    location: "Apapa, Tin Can, PTML, MMIA Cargo, Port Harcourt",
    period: "Ongoing",
    icon: FlaskConical,
    accent: "from-success to-success/80",
    intro:
      "Specialised clearing for dangerous goods (hazmat) and food items — strict compliance with safety, health and environmental regulations, with permits, approvals and full agency liaison.",
    sections: [
      {
        heading: "Dangerous Goods (IMDG)",
        steps: [
          {
            title: "Pre-Shipment Documentation",
            body: "Verify B/L or AWB, Invoice, Packing List, Form M, PAAR, MSDS/SDS, Dangerous Goods Declaration (DGD), IMDG/ICAO compliance certificate and UN packaging certificate.",
          },
          {
            title: "Permits & Approvals",
            body: "Approvals from NPA/Terminal (hazmat notification), DPR (if petroleum-based), Federal Fire Service (flammables) and NESREA (hazardous substances). Documents transmitted to NCS via ASYCUDA pre-arrival.",
          },
          {
            title: "Valuation, Duty & Examination",
            body: "HS Ch. 28–38 (chemicals), Ch. 33 (perfumes/aerosols). Duty 5–20% + Levy 0–5% + VAT 7.5% + ETLS + CISS. Discharged at designated hazmat berth; examined by Customs, NDLEA, NESREA and Fire Service.",
          },
          {
            title: "Payment & Release",
            body: "Duties, hazmat port charges and agency fees paid. Customs issues Release Order after all agencies sign off; cargo moved under escort to FOGGS warehouse.",
          },
        ],
      },
      {
        heading: "Food Items",
        steps: [
          {
            title: "Pre-Shipment Documentation",
            body: "B/L, Invoice, Packing List, Form M, PAAR, NAFDAC Registration Certificate, Free Sale Certificate, Health Certificate and Certificate of Origin.",
          },
          {
            title: "Regulatory Approvals",
            body: "NAFDAC product registration & import permit (mandatory), SONCAP PC + Certificate for packaged food containers, and Plant Quarantine Permit from NAQS for grains/seeds.",
          },
          {
            title: "Examination & Sampling",
            body: "Perishables moved to cold room / bonded warehouse. Customs + NAFDAC + SON conduct physical exam and lab sampling. NAFDAC lab clearance required before release.",
          },
          {
            title: "Valuation & Release",
            body: "HS Ch. 16–22 (processed foods), Ch. 10–12 (grains). Duty 5–35% + Levy 0–60% (selected products) + VAT 7.5% + ETLS + CISS + NAFDAC levy 1%. Perishables evacuated immediately on release.",
          },
        ],
      },
    ],
    compliance: [
      "Dangerous goods: wrong declaration or packaging leads to seizure, fines and possible blacklisting — MSDS and DGD must match cargo.",
      "Food items: NAFDAC registration must be completed pre-shipment — unregistered brands are destroyed at the importer's cost.",
      "Hazmat and perishables attract higher demurrage — fast clearance is critical.",
      "Food labels must show NAFDAC reg no., ingredients, expiry date and country of origin in English.",
    ],
    conclusion:
      "End-to-end clearing for dangerous goods and food items — full compliance with NCS, NAFDAC, SON, NESREA, NAQS and other agencies, preventing seizure or destruction and ensuring safe delivery.",
  },
  {
    id: "az",
    name: "AZ Auto Parts Limited",
    scope: "All Vehicle Spare Parts",
    location: "Apapa, Tin Can, PTML, Port Harcourt, MMIA Cargo",
    period: "Ongoing",
    icon: Wrench,
    accent: "from-amber to-accent",
    intro:
      "Clearing of all vehicle spare parts — engine, body, suspension, electrical, tyres, lubricants and accessories — with accurate HS classification and regulatory compliance.",
    sections: [
      {
        heading: "Clearing Process",
        steps: [
          {
            title: "Documentation & Pre-Arrival",
            body: "B/L, detailed Commercial Invoice & Packing List (part names, HS codes, quantity, origin), Form M + CBN approval, PAAR, SONCAP PC/Certificate and SON Import Permit for tyres. Submitted via ASYCUDA / Trade Portal pre-arrival.",
          },
          {
            title: "HS Classification & Valuation",
            body: "Engine parts HS 8409.xx — Duty 5%; Body parts HS 8708.xx — Duty 10%; Electrical HS 8512.xx — Duty 5%; Tyres HS 4011.xx — Duty 20% + Levy 10%; Lubricants HS 2710/3403 — Duty 5% + Levy 0–5%. Plus VAT 7.5%, ETLS 0.5%, CISS 1%, port/terminal charges. CIF basis; payment via Remita.",
          },
          {
            title: "Examination & Regulatory Inspection",
            body: "SGD generated. Customs physical/scanner exam; SON SONCAP compliance check; NDLEA routine check. Used/tokunbo parts attract higher duty/levy with age restriction (only parts for vehicles ≤15 years old allowed).",
          },
          {
            title: "Payment & Release",
            body: "Once duties, taxes and terminal charges are confirmed, Customs issues Release Order + Gate Pass and cargo is evacuated to the client's warehouse for distribution.",
          },
        ],
      },
    ],
    compliance: [
      "SONCAP is mandatory for most auto parts — non-compliant parts are confiscated.",
      "Tyre restrictions: only new tyres allowed; used/tokunbo tyres banned. SON import permit required.",
      "Accurate declaration: misdescription (e.g. 'general goods' instead of 'spare parts') attracts penalties and 100% duty.",
      "Counterfeit parts: Customs/SON focus on brake pads, filters and belts — genuine packaging and certification required.",
    ],
    conclusion:
      "End-to-end clearing for all vehicle spare parts — compliance with NCS, SON and other regulators, preventing seizure of substandard parts and ensuring safe delivery for market distribution.",
  },
  {
    id: "otayo",
    name: "O'Tayo Auto Enterprises Ltd",
    scope: "Cars, Buses & Trucks",
    location: "Lagos PTML, Tin Can Island Port, Sallum (Five Star)",
    period: "48-hour turnaround",
    icon: Truck,
    accent: "from-primary to-amber",
    intro:
      "Clearing of all motor vehicles — sedans, SUVs, buses/coaches and trucks/haulage — imported from the USA, Europe and Asia, with rapid turnaround and full regulatory compliance.",
    sections: [
      {
        heading: "Clearing Process",
        steps: [
          {
            title: "Documentation & Pre-Arrival",
            body: "RoRo Bill of Lading (VIN, year, make, model), Commercial Invoice & Proof of Ownership, Vehicle Title. VReg and valuation approvals processed alongside assessments. Customs portal, shipping line and terminal releases coordinated to avoid delays.",
          },
          {
            title: "Valuation & Duty Assessment",
            body: "Customs assesses on VIN, year and model. Standard structure for used vehicles: Duty 20% + Levy 35% + VAT 7.5% + ETLS + CISS + port/terminal charges.",
          },
          {
            title: "Examination",
            body: "Physical examination at the RoRo terminal — VIN, year of manufacture and condition verified.",
          },
          {
            title: "Payment & Release",
            body: "Duties paid via Remita / e-payment. Customs Release Order and Gate Pass obtained; vehicles delivered to client premises within the 48-hour service window.",
          },
        ],
      },
    ],
    compliance: [
      "Long-standing relationships with relevant government agencies enable rapid, lawful clearance.",
      "Accurate valuation using VIN/VReg prevents under-declaration penalties.",
      "Age and import restrictions strictly observed to avoid seizure.",
      "Coordinated releases across Customs, shipping line and terminal to hit 48-hour turnaround.",
    ],
    conclusion:
      "End-to-end vehicle clearing with a 48-hour service standard — full compliance with NCS and partner agencies, delivering cars, buses and trucks safely to the client.",
  },
];

const ClientCard = ({ client, index }: { client: ClientReport; index: number }) => {
  const { ref, isVisible } = useScrollReveal();
  const Icon = client.icon;
  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
      style={{ transitionDelay: `${(index % 3) * 100}ms` }}
    >
      <Card className="group overflow-hidden border-border/60 hover:shadow-strong transition-all duration-500 hover:-translate-y-1 h-full">
        <div className={`h-2 bg-gradient-to-r ${client.accent}`} />
        <CardHeader className="space-y-4">
          <div className="flex items-start gap-4">
            <div
              className={`w-14 h-14 rounded-xl bg-gradient-to-br ${client.accent} flex items-center justify-center text-primary-foreground shadow-soft group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 shrink-0`}
            >
              <Icon className="w-7 h-7" />
            </div>
            <div className="min-w-0">
              <CardTitle className="text-xl md:text-2xl text-primary leading-tight">{client.name}</CardTitle>
              <p className="text-sm text-muted-foreground mt-1">{client.scope}</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary" className="font-normal">
              <PackageCheck className="w-3 h-3 mr-1" /> {client.period}
            </Badge>
            <Badge variant="outline" className="font-normal max-w-full">
              <Ship className="w-3 h-3 mr-1 shrink-0" />
              <span className="truncate">{client.location}</span>
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-5">
          <p className="text-muted-foreground leading-relaxed">{client.intro}</p>

          <Accordion type="single" collapsible className="w-full">
            {client.sections.map((section, sIdx) => (
              <AccordionItem key={sIdx} value={`section-${sIdx}`}>
                <AccordionTrigger className="text-left text-primary font-semibold hover:no-underline">
                  <span className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-accent" />
                    {section.heading}
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  {section.steps && (
                    <ol className="space-y-4 pl-1">
                      {section.steps.map((step, i) => (
                        <li key={i} className="flex gap-3">
                          <div className="w-7 h-7 rounded-full bg-accent/15 text-accent flex items-center justify-center text-sm font-bold shrink-0">
                            {i + 1}
                          </div>
                          <div>
                            <p className="font-semibold text-foreground">{step.title}</p>
                            <p className="text-sm text-muted-foreground leading-relaxed mt-1">{step.body}</p>
                          </div>
                        </li>
                      ))}
                    </ol>
                  )}
                </AccordionContent>
              </AccordionItem>
            ))}

            <AccordionItem value="compliance">
              <AccordionTrigger className="text-left text-primary font-semibold hover:no-underline">
                <span className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-accent" />
                  Compliance & Key Notes
                </span>
              </AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-2">
                  {client.compliance.map((c, i) => (
                    <li key={i} className="flex gap-2 text-sm text-muted-foreground leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-success shrink-0 mt-0.5" />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="rounded-lg bg-muted/40 border border-border/60 p-4">
            <p className="text-sm text-foreground/80 leading-relaxed italic">{client.conclusion}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const ClientsPage = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollReveal(0.05);

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-primary via-primary to-primary/80">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,hsl(var(--accent)/0.25),transparent_50%)]" />
        <div
          ref={heroRef}
          className={`container relative mx-auto px-6 text-center transition-all duration-1000 ${heroVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
        >
          <Badge className="mb-6 bg-white/15 text-white border-white/20 backdrop-blur-sm">
            Trusted by industry leaders
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
            Our <span className="text-shimmer">Clients</span>
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/85 max-w-3xl mx-auto leading-relaxed">
            A snapshot of the clearing & processing activities we deliver — across household goods, vehicles,
            telecoms, dangerous goods, food, auto parts and commercial fleets — for clients who depend on speed,
            accuracy and full regulatory compliance.
          </p>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {[
              { label: "Active clients", value: `${clients.length}+` },
              { label: "Cargo categories", value: "10+" },
              { label: "Major ports", value: "6" },
              { label: "Avg. turnaround", value: "48h" },
            ].map((s) => (
              <div
                key={s.label}
                className="rounded-xl bg-white/10 backdrop-blur-sm border border-white/15 p-4"
              >
                <div className="text-2xl md:text-3xl font-bold text-primary-foreground">{s.value}</div>
                <div className="text-xs md:text-sm text-primary-foreground/75 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients grid */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {clients.map((client, idx) => (
              <ClientCard key={client.id} client={client} index={idx} />
            ))}
          </div>

          <div className="mt-20 max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
              Want to be our next success story?
            </h2>
            <p className="text-muted-foreground mb-6">
              From documentation and HS classification to agency liaison and final delivery, we handle the full
              clearing lifecycle — so your cargo moves on time, every time.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center h-12 px-8 rounded-lg bg-gradient-accent text-accent-foreground font-semibold shadow-soft hover:shadow-glow transition-all duration-300 hover:scale-105"
            >
              Start a conversation
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default ClientsPage;
