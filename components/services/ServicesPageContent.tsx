"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, FileText, Building2, ReceiptText, PiggyBank, Briefcase, BookOpen, TrendingUp, MessageCircle, AlertCircle, HeartPulse } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

const services = [
    {
        icon: FileText,
        title: "Income Tax Return Filing",
        shortDesc: "Accurate, timely ITR filing for individuals and businesses.",
        longDesc: "Filing your Income Tax Return (ITR) is a legal obligation for every individual and business earning above the exemption limit in India. Our team ensures your ITR is filed accurately, claiming every eligible deduction, and submitted well before the deadline to avoid penalties.\n\nWe handle all ITR forms — ITR-1 (Sahaj) for salaried individuals, ITR-2 for capital gains and multiple income sources, ITR-3 for business/profession income, ITR-4 (Sugam) for presumptive taxation, and ITR-5 to ITR-7 for partnerships, firms, and trusts. We also handle revised returns, belated returns, and updated returns (ITR-U).\n\nOur process includes thorough verification of Form 26AS, AIS (Annual Information Statement), and TIS (Taxpayer Information Summary) to ensure zero mismatches. We compute advance tax, self-assessment tax, and help you respond to any intimation under Section 143(1).",
        benefits: ["Avoid penalties up to ₹10,000 for late filing", "Claim all deductions under 80C, 80D, 80G, 80E, 80TTA, 80EEA", "Faster refund processing with accurate filing", "Carry forward capital losses for future set-off", "Full year tax planning advice included at no extra cost", "Assistance with revised & updated returns"],
        whoNeeds: "Salaried employees, freelancers, self-employed professionals, business owners, NRIs, senior citizens, HUFs, and anyone with income above the basic exemption limit (₹2.5L / ₹3L / ₹5L depending on age and regime)",
        process: ["Collect your Form 16 / salary slips / income proofs", "Verify 26AS, AIS and TIS for accuracy", "Compute total income and applicable deductions", "Select the best tax regime (Old vs New)", "File ITR on the Income Tax portal", "E-verify and track refund status"],
        documents: ["PAN Card & Aadhaar Card", "Form 16 (for salaried)", "Bank statements & interest certificates", "Investment proofs (PPF, ELSS, LIC, NPS, etc.)", "Capital gains statements (if applicable)", "Rental income details & home loan interest certificate"],
        color: "#1a56db", bg: "#e8f0fc",
    },
    {
        icon: Building2,
        title: "GST Registration",
        shortDesc: "Quick GST registration for businesses of all sizes.",
        longDesc: "GST (Goods and Services Tax) Registration is mandatory for businesses with turnover exceeding ₹40 lakhs for goods and ₹20 lakhs for services (₹10 lakhs for special category states). We assist businesses in obtaining their GSTIN (GST Identification Number) from the GST portal quickly and hassle-free.\n\nOur service covers fresh GST registration, amendment of existing registration (change of address, addition of business activity, change in partners/directors), voluntary registration for startups and small businesses, cancellation of GST registration, and revocation of cancelled registration.\n\nWe also assist with obtaining GST registration for e-commerce sellers (mandatory regardless of turnover), interstate suppliers, casual taxable persons, and non-resident taxable persons. We handle the complete process from document collection to ARN generation to certificate download.",
        benefits: ["Get your GSTIN within 3–7 working days", "Legally collect GST from your customers", "Claim Input Tax Credit (ITC) on business purchases", "Required for selling on Amazon, Flipkart, Meesho & other platforms", "Access to interstate business and government tenders", "Avoid penalties up to ₹25,000 for non-registration"],
        whoNeeds: "Businesses with turnover above ₹40L (goods) or ₹20L (services), interstate suppliers, e-commerce sellers on any platform, casual taxable persons, and anyone who wants to voluntarily register for ITC benefits",
        process: ["Gather PAN, Aadhaar and business address proofs", "Prepare application with HSN/SAC codes for your products/services", "File application on the GST portal with digital signature", "Respond to any clarification queries from the GST officer", "Receive ARN (Application Reference Number)", "Download GST certificate after approval"],
        documents: ["PAN Card of proprietor / partners / directors", "Aadhaar Card", "Business address proof (rent agreement / electricity bill / property tax receipt)", "Bank account details with cancelled cheque / passbook", "Photographs of the proprietor / partners", "Partnership deed / MOA & AOA (for firms/companies)"],
        color: "#7c3aed", bg: "#ede9fe",
    },
    {
        icon: ReceiptText,
        title: "GST Return Filing",
        shortDesc: "Monthly, quarterly, and annual GST return filing.",
        longDesc: "Once registered under GST, businesses must file periodic returns reporting their sales, purchases, tax collected, and tax paid. Filing GST returns on time is critical — late filing attracts penalties of ₹50 per day (₹20/day for NIL returns) and blocks your ability to file subsequent returns.\n\nWe handle all types of GST returns:\n• GSTR-1 — Details of outward supplies (sales invoices), filed monthly or quarterly under QRMP scheme\n• GSTR-3B — Summary return of tax liability and ITC claimed, filed monthly or quarterly\n• GSTR-9 — Annual return summarizing the entire year's transactions\n• GSTR-9C — Reconciliation statement (for turnover above ₹5 crore)\n• GSTR-4 — For composition scheme dealers (annual)\n• CMP-08 — Quarterly challan for composition dealers\n\nWe ensure accurate reconciliation between your books, GSTR-2B (auto-populated ITC), and e-way bill data. Our team identifies ITC mismatches, reverses ineligible credits, and maximizes your legitimate ITC claims.",
        benefits: ["Avoid late fees of ₹50/day (₹20 for NIL returns)", "Accurate Input Tax Credit reconciliation with GSTR-2B", "Prevent cascading delays — late filing blocks future returns", "Monthly / quarterly filing options under QRMP scheme", "Year-end reconciliation and annual return preparation", "Identification and resolution of ITC mismatches"],
        whoNeeds: "All GST-registered businesses — traders, manufacturers, service providers, e-commerce sellers, composition scheme dealers, and anyone with an active GSTIN",
        process: ["Collect monthly/quarterly sales and purchase invoices", "Reconcile invoices with GSTR-2B auto-populated data", "Compute tax liability and eligible ITC", "File GSTR-1 with all outward supply details", "File GSTR-3B with tax payment", "Annual reconciliation and GSTR-9 filing at year end"],
        documents: ["Monthly / quarterly sales invoices", "Purchase invoices with supplier GSTIN", "Bank statements for tax payment verification", "E-way bills (for goods transport)", "Previous period returns for carry-forward data", "Import/export documents (if applicable)"],
        color: "#0891b2", bg: "#e0f2fe",
    },
    {
        icon: PiggyBank,
        title: "Tax Planning",
        shortDesc: "Minimize your tax liability with smart, legal planning.",
        longDesc: "Tax planning is the art and science of arranging your financial affairs to legally minimize your tax outflow. With the right planning done at the beginning of the financial year, you can save lakhs in taxes while building long-term wealth.\n\nOur tax planning advisory covers all major deductions and exemptions available under the Income Tax Act:\n• Section 80C (₹1.5L limit) — PPF, ELSS, LIC, EPF, NSC, home loan principal, tuition fees, Sukanya Samriddhi\n• Section 80D — Health insurance premiums for self, family, and parents\n• Section 80E — Education loan interest (no upper limit)\n• Section 80G — Donations to approved charities\n• Section 80TTA/80TTB — Savings account interest (₹10,000 / ₹50,000 for seniors)\n• Section 80EEA — Additional home loan interest for first-time buyers\n• HRA, LTA, standard deduction, and other salary restructuring options\n\nWe also help you choose between the Old Tax Regime and New Tax Regime based on your specific income profile, comparing tax outflows under both to find the most beneficial option for you.",
        benefits: ["Save ₹50,000 to ₹2,00,000+ in tax legally every year", "Personalized Old vs New Regime comparison", "Optimal investment recommendations aligned with tax savings", "Salary restructuring advice for maximum HRA, LTA benefits", "Long-term wealth creation through tax-efficient investing", "Quarter-wise advance tax planning to avoid interest under 234B/C"],
        whoNeeds: "Salaried employees looking to maximize take-home salary, business owners wanting to reduce tax burden, high-income individuals, NRIs with Indian income, and anyone wanting to build wealth while saving tax",
        process: ["Review your total income from all sources", "Analyze existing investments and deductions", "Compare tax liability under Old vs New regime", "Recommend optimal investment and deduction strategy", "Assist in implementing the plan throughout the year", "Review and adjust strategy before year-end"],
        documents: ["Salary structure / CTC breakup", "Existing investment details (PPF, ELSS, LIC, NPS, etc.)", "Home loan details (if any)", "Health insurance premium receipts", "Rental agreement (for HRA claims)", "Previous year ITR for baseline comparison"],
        color: "#059669", bg: "#d1fae5",
    },
    {
        icon: Briefcase,
        title: "Business Registration",
        shortDesc: "Register your business quickly and compliantly.",
        longDesc: "Starting a business in India requires proper legal registration to operate compliantly, open bank accounts, file taxes, and access government schemes. We handle end-to-end business registration for all entity types.\n\nOur business registration services include:\n• Sole Proprietorship — Simplest form, registered through GST, MSME (Udyam), or Shop & Establishment Act. Ideal for individual businesses with low risk.\n• Partnership Firm — Registration under the Indian Partnership Act, 1932 with a properly drafted partnership deed covering profit sharing, roles, and dispute resolution.\n• LLP (Limited Liability Partnership) — Combines benefits of a partnership with limited liability protection. Registered with the Ministry of Corporate Affairs (MCA).\n• Private Limited Company — Best suited for startups seeking investment. Involves DSC, DIN, name approval, MOA/AOA drafting, and incorporation certificate.\n• MSME/Udyam Registration — Free government registration for micro, small, and medium enterprises, unlocking access to subsidies, priority lending, and government tenders.\n• Shop & Establishment Registration — Mandatory license under state laws for all commercial establishments, shops, and offices.\n• Professional Tax Registration — Required for employers and self-employed professionals in Telangana.",
        benefits: ["Legal business identity for banking and compliance", "Limited liability protection with LLP or Pvt Ltd", "Access to MSME subsidies, priority bank loans at lower rates", "Eligibility for government tenders and contracts", "GST-ready from day one", "Professional drafting of partnership deeds, MOA & AOA"],
        whoNeeds: "Entrepreneurs starting a new business, freelancers wanting to formalize, existing businesses upgrading structure (proprietorship to LLP/Pvt Ltd), micro & small businesses needing MSME/Udyam registration",
        process: ["Consultation to choose the right business structure", "Collect required documents and draft legal agreements", "Apply for DSC & DIN (for LLP/Company)", "File incorporation/registration application", "Obtain PAN, TAN, and registration certificate", "Setup GST registration and open business bank account"],
        documents: ["PAN & Aadhaar of all promoters/partners", "Address proof of business premises", "Passport-size photographs", "Partnership deed (for firms)", "MOA & AOA (for companies)", "Rent agreement or NOC from property owner"],
        color: "#d97706", bg: "#fef3c7",
    },
    {
        icon: BookOpen,
        title: "Accounting & Bookkeeping",
        shortDesc: "Organized books for stress-free compliance.",
        longDesc: "Proper accounting and bookkeeping is the backbone of any successful business. Without organized books, you risk tax penalties, missed deductions, cash flow problems, and audit failures. We provide comprehensive bookkeeping services so you can focus on growing your business.\n\nOur accounting services include:\n• Monthly bookkeeping — Recording all income, expenses, and transactions systematically using professional accounting software\n• Financial statements — Preparation of Profit & Loss Account, Balance Sheet, and Cash Flow Statement\n• Bank reconciliation — Monthly reconciliation of your bank statements with book entries to catch discrepancies\n• Accounts receivable & payable management — Tracking outstanding invoices and payments due\n• Inventory accounting — For businesses dealing in goods, maintaining proper stock records\n• Year-end finalization — Closing books, computing depreciation, preparing trial balance, and making adjustments for tax audit readiness\n• TDS compliance — Deduction of TDS on applicable payments, filing quarterly TDS returns (24Q, 26Q), and issuing Form 16/16A to employees and vendors",
        benefits: ["Real-time visibility into your financial health", "Always ready for ITR filing and tax audits", "Identify profitable and loss-making areas of your business", "Proper TDS compliance — avoid interest and penalties", "Audit-ready books that satisfy CA requirements", "Reduce stress during assessment and scrutiny proceedings"],
        whoNeeds: "Small and medium businesses, traders, doctors, lawyers, chartered accountants, architects, and professionals who need organized books without hiring a full-time accountant. Also useful for businesses approaching tax audit threshold (₹1 Cr for business / ₹50L for profession)",
        process: ["Setup chart of accounts based on your business type", "Collect monthly invoices, receipts, and bank statements", "Record all transactions and reconcile with bank", "Prepare monthly/quarterly financial reports", "Handle quarterly TDS returns and compliance", "Year-end finalization and preparation for ITR/audit"],
        documents: ["All sales and purchase invoices", "Bank statements (all business accounts)", "Expense receipts and bills", "Previous year financial statements (if any)", "TDS certificates received (Form 16A)", "Loan statements and EMI details"],
        color: "#be185d", bg: "#fce7f3",
    },
    {
        icon: TrendingUp,
        title: "Financial Advisory",
        shortDesc: "Expert guidance for long-term wealth growth.",
        longDesc: "Beyond taxes, we provide comprehensive financial advisory services to help you make informed decisions about your money. Whether you are planning for retirement, your children's education, buying a home, or growing your business — we create a personalized financial roadmap.\n\nOur financial advisory services include:\n• Investment planning — Recommending the right mix of mutual funds, fixed deposits, PPF, NPS, ELSS, and other instruments based on your risk profile and goals\n• Retirement planning — Calculating the corpus you need, and creating a savings and investment plan to achieve it\n• Insurance advisory — Reviewing your existing life and health insurance, identifying gaps, and recommending adequate coverage\n• Cash flow management — For business owners, optimizing cash inflows and outflows to maintain healthy working capital\n• Loan advisory — Helping you decide between home loan, business loan, or personal loan options with the best interest rates\n• Succession planning — For business owners, creating a plan for smooth transition of business assets and wealth to the next generation\n• Capital gains optimization — Strategies for minimizing tax on sale of property, stocks, mutual funds, and other assets",
        benefits: ["Goal-based financial planning tailored to your life stage", "Risk-adjusted investment strategies for consistent returns", "Retirement corpus planning — know your 'freedom number'", "Insurance gap analysis — ensure you're adequately covered", "Business cash flow optimization for growth", "Capital gains tax-saving strategies"],
        whoNeeds: "Individuals planning for retirement, parents saving for children's education/marriage, business owners needing succession planning, high-income earners wanting wealth management, and anyone looking for disciplined financial planning",
        process: ["Understand your financial goals, income, and risk appetite", "Analyze current investments, insurance, and liabilities", "Create a personalized financial plan and roadmap", "Recommend specific investments and insurance products", "Quarterly review and rebalancing of your portfolio", "Annual comprehensive financial health check-up"],
        documents: ["Current investment portfolio details", "Insurance policy documents (life & health)", "Loan EMI statements", "Bank account and FD details", "Property documents (if applicable)", "Salary slips or business income details"],
        color: "#7c3aed", bg: "#f5f3ff",
    },
    {
        icon: AlertCircle,
        title: "Income Tax Notice Handling",
        shortDesc: "Expert resolution of all income tax notices and demands.",
        longDesc: "Receiving an income tax notice can be stressful and confusing. Whether it's a simple intimation under Section 143(1) or a detailed scrutiny notice under Section 143(3), we handle the entire process — from understanding the notice to drafting the response to representing you before the Income Tax Department.\n\nWe handle all types of income tax notices:\n• Section 143(1) — Intimation notice for mismatches in your filed return vs department records\n• Section 143(2) — Scrutiny assessment notice requiring detailed examination of your return\n• Section 148 — Notice for income escaping assessment (reassessment)\n• Section 245 — Notice for adjustment of refund against outstanding demand\n• Section 139(9) — Defective return notice requiring correction\n• Section 156 — Demand notice for tax due\n• Section 131 — Summons to appear before the Assessing Officer\n\nWe analyze each notice carefully, gather supporting documents, prepare a comprehensive response with proper legal references, and file it within the stipulated deadline. If needed, we represent you before the Assessing Officer and pursue rectification or appeal.",
        benefits: ["Expert response drafted within the deadline", "Avoid penalties and prosecution for non-compliance", "Reduce or eliminate unjustified tax demands", "Professional representation before the IT Department", "Rectification requests to correct department errors", "Appeal filing at CIT(A) or ITAT if needed"],
        whoNeeds: "Anyone who has received an income tax notice, demand notice, scrutiny notice, or reassessment notice. Also useful for NRIs who receive notices on their Indian income and are unable to respond from abroad",
        process: ["Share the notice received from the Income Tax Department", "We analyze the notice and identify the issue", "Gather supporting documents and evidence", "Draft a detailed response with legal references", "File the response on the Income Tax portal", "Follow up until the matter is resolved or closed"],
        documents: ["Copy of the income tax notice received", "Original ITR filed for the relevant year", "Form 26AS, AIS, TIS for the relevant year", "Supporting documents (investment proofs, bank statements, etc.)", "Previous correspondence with IT Department (if any)", "PAN Card and Aadhaar Card"],
        color: "#dc2626", bg: "#fee2e2",
    },
    {
        icon: HeartPulse,
        title: "Health Insurance Advisory",
        shortDesc: "Authorized Star Health Insurance advisor — protecting your family's health and finances.",
        longDesc: "Sugunakar Bejjanki is an authorized advisor for Star Health and Allied Insurance Company Limited, one of India's leading standalone health insurance providers. We help individuals, families, and senior citizens choose the right health insurance plan that fits their needs and budget.\n\nOur health insurance advisory services include:\n• Individual Health Insurance — Plans covering hospitalization, pre and post-hospitalization expenses, day care procedures, and ambulance charges\n• Family Floater Plans — Single policy covering the entire family (spouse, children, and parents) with a shared sum insured\n• Senior Citizen Health Insurance — Specialized plans for individuals above 60 years with higher sum insured and coverage for pre-existing diseases\n• Critical Illness Plans — Lump-sum payment on diagnosis of specified critical illnesses like cancer, heart attack, kidney failure, etc.\n• Personal Accident Cover — Coverage for accidental death, permanent disability, and temporary disability\n• Policy Renewal & Porting — Assistance with timely renewal of existing policies and porting from other insurance companies to Star Health\n• Claim Assistance — End-to-end support for cashless and reimbursement claims, including document collection, hospital coordination, and follow-up\n\nWe believe that health insurance is not a luxury but a necessity. Medical costs in India are rising at 15-20% per year, and one hospitalization can wipe out years of savings. We help you protect your family against such financial shocks.",
        benefits: ["Expert guidance in choosing the right plan and sum insured", "Assistance with cashless claims at 14,000+ network hospitals", "Policy renewal reminders — never miss a renewal date", "Claim documentation support from start to settlement", "Section 80D tax benefits on premium paid (up to ₹1L)", "Free health insurance review for existing policyholders"],
        whoNeeds: "Individuals without health insurance, families needing a comprehensive floater plan, senior citizens seeking age-appropriate coverage, existing policyholders wanting to review or upgrade their plans, and anyone looking to claim Section 80D tax benefits",
        process: ["Understand your family's health profile and medical history", "Recommend suitable plans based on age, family size, and budget", "Compare sum insured options and premium quotes", "Assist with application and medical check-up (if required)", "Policy issuance and welcome kit delivery", "Ongoing support for renewals, claims, and policy changes"],
        documents: ["PAN Card & Aadhaar Card of all insured members", "Age proof (birth certificate / passport / 10th certificate)", "Passport-size photographs", "Previous health insurance policy (for porting)", "Medical reports (if pre-existing conditions exist)", "Bank details for premium payment"],
        color: "#16a34a", bg: "#dcfce7",
    },
];

export default function ServicesPageContent() {
    const ref = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
            { threshold: 0.07 }
        );
        ref.current?.querySelectorAll(".scroll-animate").forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <div ref={ref}>
            {/* Page Hero */}
            <div style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e3a8a 60%, #1a56db 100%)", padding: "5rem 1.5rem 6rem", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: "-80px", right: "-80px", width: "350px", height: "350px", background: "radial-gradient(circle, rgba(14,165,233,0.2) 0%, transparent 70%)", borderRadius: "50%" }} />
                <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}>
                    <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "9999px", padding: "0.375rem 1rem", fontSize: "0.78rem", fontWeight: 600, color: "rgba(255,255,255,0.9)", letterSpacing: "0.06em", textTransform: "uppercase" as const, marginBottom: "1.5rem" }}>
                        ✦ Services
                    </div>
                    <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 900, color: "white", lineHeight: 1.1, marginBottom: "1rem" }}>
                        Comprehensive{" "}
                        <span style={{ background: "linear-gradient(135deg, #60a5fa, #38bdf8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                            Tax & Financial
                        </span>{" "}
                        Services
                    </h1>
                    <p style={{ color: "rgba(255,255,255,0.72)", fontSize: "1rem", maxWidth: "560px", lineHeight: 1.75 }}>
                        From ITR filing to financial advisory — {BUSINESS.practitioner} provides all the services you need under one roof.
                    </p>
                </div>
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, lineHeight: 0 }}>
                    <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ width: "100%", height: "60px", display: "block" }}>
                        <path d="M0 30 C480 60 960 0 1440 30 L1440 60 L0 60 Z" fill="white" />
                    </svg>
                </div>
            </div>

            {/* Services List */}
            <section style={{ padding: "4rem 1.5rem 5rem", background: "white" }}>
                <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "3rem" }}>
                    {services.map((service, i) => {
                        const Icon = service.icon;
                        const isEven = i % 2 === 0;
                        return (
                            <div
                                key={service.title}
                                id={service.title.toLowerCase().replace(/\s+/g, '-')}
                                className={`scroll-animate delay-${Math.min(i * 50 + 100, 400)}`}
                                style={{ background: "#f7f9fc", borderRadius: "1.5rem", overflow: "hidden", border: "1px solid #e2e8f0" }}
                            >
                                <div className="service-detail-grid" style={{ display: "grid", gridTemplateColumns: isEven ? "1fr 2fr" : "2fr 1fr", gap: 0 }}>
                                    {/* Color panel */}
                                    {!isEven && (
                                        <div className="service-detail-content" style={{ padding: "2.5rem" }}>
                                            {renderServiceContent(service)}
                                        </div>
                                    )}

                                    <div style={{ background: `linear-gradient(135deg, ${service.color}15, ${service.color}08)`, borderLeft: isEven ? "none" : `1px solid ${service.color}25`, borderRight: isEven ? `1px solid ${service.color}25` : "none", padding: "2.5rem", display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "flex-start" }}>
                                        <div style={{ width: "64px", height: "64px", borderRadius: "1.125rem", background: service.bg, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.25rem" }}>
                                            <Icon size={30} color={service.color} />
                                        </div>
                                        <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "1.4rem", color: "#0f172a", marginBottom: "0.625rem", lineHeight: 1.2 }}>
                                            {service.title}
                                        </h2>
                                        <p style={{ color: "#64748b", fontSize: "0.92rem", lineHeight: 1.7, marginBottom: "1.5rem" }}>
                                            {service.shortDesc}
                                        </p>
                                        <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: service.color, color: "white", padding: "0.65rem 1.5rem", borderRadius: "0.75rem", fontWeight: 700, textDecoration: "none", fontSize: "0.875rem" }}>
                                            Get Started <ArrowRight size={15} />
                                        </Link>
                                    </div>

                                    {isEven && (
                                        <div className="service-detail-content" style={{ padding: "2.5rem" }}>
                                            {renderServiceContent(service)}
                                        </div>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* CTA */}
            <section style={{ padding: "4rem 1.5rem 5rem", background: "#f7f9fc" }}>
                <div style={{ maxWidth: "700px", margin: "0 auto", textAlign: "center" }}>
                    <h2 style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)", fontWeight: 800, color: "#0f172a", marginBottom: "1rem" }}>
                        Not Sure Which Service You Need?
                    </h2>
                    <p style={{ color: "#64748b", fontSize: "1rem", lineHeight: 1.7, marginBottom: "2rem" }}>
                        Book a free consultation and {BUSINESS.practitioner} will guide you to the right service for your specific situation.
                    </p>
                    <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" as const }}>
                        <Link href="/contact" className="btn-primary">Book Free Consultation <ArrowRight size={17} /></Link>
                        <a href={`https://wa.me/${BUSINESS.whatsapp}`} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
                            <MessageCircle size={17} /> WhatsApp Us
                        </a>
                    </div>
                </div>
            </section>

            <style>{`
        @media (max-width: 768px) {
          .service-detail-grid { grid-template-columns: 1fr !important; }
          .service-detail-content { order: 2; }
        }
      `}</style>
        </div>
    );
}

function renderServiceContent(service: typeof services[0]) {
    return (
        <>
            <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 750, fontSize: "1rem", color: "#0f172a", marginBottom: "0.75rem" }}>
                About This Service
            </h3>
            <div style={{ marginBottom: "1.5rem" }}>
                {service.longDesc.split("\n\n").map((para, i) => (
                    <p key={i} style={{ color: "#475569", fontSize: "0.88rem", lineHeight: 1.8, marginBottom: i < service.longDesc.split("\n\n").length - 1 ? "0.75rem" : 0, whiteSpace: "pre-line" }}>
                        {para}
                    </p>
                ))}
            </div>

            <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "0.95rem", color: "#0f172a", marginBottom: "0.75rem" }}>
                Key Benefits
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 1.5rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                {service.benefits.map((b) => (
                    <li key={b} style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", fontSize: "0.85rem", color: "#374151" }}>
                        <CheckCircle2 size={15} color={service.color} style={{ marginTop: "2px", flexShrink: 0 }} />
                        {b}
                    </li>
                ))}
            </ul>

            <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "0.95rem", color: "#0f172a", marginBottom: "0.75rem" }}>
                Our Process
            </h3>
            <ol style={{ listStyle: "none", padding: 0, margin: "0 0 1.5rem", display: "flex", flexDirection: "column", gap: "0.5rem", counterReset: "step" }}>
                {service.process.map((step, idx) => (
                    <li key={step} style={{ display: "flex", alignItems: "flex-start", gap: "0.625rem", fontSize: "0.85rem", color: "#374151" }}>
                        <span style={{ width: "22px", height: "22px", borderRadius: "50%", background: `${service.color}18`, color: service.color, fontWeight: 800, fontSize: "0.72rem", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "1px" }}>
                            {idx + 1}
                        </span>
                        {step}
                    </li>
                ))}
            </ol>

            <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "0.95rem", color: "#0f172a", marginBottom: "0.75rem" }}>
                Documents Required
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 1.5rem", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                {service.documents.map((doc) => (
                    <li key={doc} style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", fontSize: "0.83rem", color: "#475569" }}>
                        <span style={{ color: service.color, fontWeight: 700, flexShrink: 0 }}>▸</span>
                        {doc}
                    </li>
                ))}
            </ul>

            <div style={{ background: `${service.color}10`, border: `1px solid ${service.color}25`, borderRadius: "0.875rem", padding: "0.875rem 1.125rem" }}>
                <span style={{ fontSize: "0.75rem", fontWeight: 700, color: service.color, textTransform: "uppercase" as const, letterSpacing: "0.05em" }}>Who Needs This?</span>
                <p style={{ fontSize: "0.85rem", color: "#374151", marginTop: "0.3rem", lineHeight: 1.6 }}>{service.whoNeeds}</p>
            </div>
        </>
    );
}
