import { Section } from "@/components/ui/section"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <Section className="pt-32">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-primary mb-6">
              Refund Policy
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Our commitment to customer satisfaction and fair refund practices
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </Section>

        {/* Table of Contents */}
        <Section className="bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold text-primary mb-6">Table of Contents</h2>
            <nav className="space-y-2">
              <a href="#overview" className="block text-muted-foreground hover:text-primary transition-colors">
                1. Overview
              </a>
              <a href="#eligibility" className="block text-muted-foreground hover:text-primary transition-colors">
                2. Refund Eligibility
              </a>
              <a href="#consultation-services" className="block text-muted-foreground hover:text-primary transition-colors">
                3. Consultation Services
              </a>
              <a href="#property-services" className="block text-muted-foreground hover:text-primary transition-colors">
                4. Property-Related Services
              </a>
              <a href="#processing-time" className="block text-muted-foreground hover:text-primary transition-colors">
                5. Refund Processing Time
              </a>
              <a href="#exclusions" className="block text-muted-foreground hover:text-primary transition-colors">
                6. Non-Refundable Services
              </a>
              <a href="#partial-refunds" className="block text-muted-foreground hover:text-primary transition-colors">
                7. Partial Refunds
              </a>
              <a href="#cancellation" className="block text-muted-foreground hover:text-primary transition-colors">
                8. Cancellation and Rescheduling
              </a>
              <a href="#disputes" className="block text-muted-foreground hover:text-primary transition-colors">
                9. Dispute Resolution
              </a>
              <a href="#contact" className="block text-muted-foreground hover:text-primary transition-colors">
                10. Contact Information
              </a>
            </nav>
          </div>
        </Section>

        {/* Content */}
        <Section>
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Overview */}
            <section id="overview">
              <h2 className="text-2xl font-semibold text-primary mb-4">1. Overview</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  At Celeste Abode Private Limited, we are committed to providing exceptional real estate consulting services and ensuring complete customer satisfaction. This Refund Policy outlines the terms and conditions under which refunds may be provided for our services.
                </p>
                <p>
                  We understand that circumstances may arise where you may need to request a refund. We are committed to handling such requests fairly and transparently, while also protecting the integrity of our services and the interests of all parties involved.
                </p>
              </div>
            </section>

            {/* Eligibility */}
            <section id="eligibility">
              <h2 className="text-2xl font-semibold text-primary mb-4">2. Refund Eligibility</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Refunds may be considered under the following circumstances:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Service not delivered as promised</li>
                  <li>Significant deviation from agreed service scope</li>
                  <li>Technical issues preventing service delivery</li>
                  <li>Service cancellation within specified timeframes</li>
                  <li>Force majeure events affecting service delivery</li>
                </ul>
                <p>
                  All refund requests must be submitted in writing within 30 days of the service delivery or scheduled service date.
                </p>
              </div>
            </section>

            {/* Consultation Services */}
            <section id="consultation-services">
              <h2 className="text-2xl font-semibold text-primary mb-4">3. Consultation Services</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <h3 className="text-lg font-semibold text-foreground">Initial Consultation</h3>
                <p>
                  Initial consultations are typically provided free of charge. However, if you have paid for an initial consultation and are not satisfied with the service, you may be eligible for a full refund if the request is made within 7 days of the consultation.
                </p>
                
                <h3 className="text-lg font-semibold text-foreground mt-6">Paid Consultation Packages</h3>
                <p>
                  For paid consultation packages, refunds are available as follows:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>100% refund if cancelled 48 hours before scheduled consultation</li>
                  <li>50% refund if cancelled 24 hours before scheduled consultation</li>
                  <li>No refund for cancellations within 24 hours of scheduled consultation</li>
                </ul>
              </div>
            </section>

            {/* Property Services */}
            <section id="property-services">
              <h2 className="text-2xl font-semibold text-primary mb-4">4. Property-Related Services</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <h3 className="text-lg font-semibold text-foreground">Property Selection Services</h3>
                <p>
                  For property selection and curation services, refunds are determined based on the stage of service delivery:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>100% refund if no properties have been presented</li>
                  <li>75% refund if properties have been presented but no selection made</li>
                  <li>50% refund if property selection has been made but no further action taken</li>
                  <li>No refund once property viewing or transaction process has begun</li>
                </ul>
                
                <h3 className="text-lg font-semibold text-foreground mt-6">Investment Advisory Services</h3>
                <p>
                  Investment advisory services are non-refundable once the analysis has been completed and delivered, as they represent intellectual property and completed work.
                </p>
              </div>
            </section>

            {/* Processing Time */}
            <section id="processing-time">
              <h2 className="text-2xl font-semibold text-primary mb-4">5. Refund Processing Time</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Once a refund request is approved, we will process the refund within the following timeframes:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Credit card refunds: 5-10 business days</li>
                  <li>Bank transfer refunds: 3-5 business days</li>
                  <li>Digital wallet refunds: 1-3 business days</li>
                </ul>
                <p>
                  Please note that the actual time for funds to appear in your account may vary depending on your financial institution.
                </p>
              </div>
            </section>

            {/* Exclusions */}
            <section id="exclusions">
              <h2 className="text-2xl font-semibold text-primary mb-4">6. Non-Refundable Services</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  The following services are non-refundable:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Completed property analysis reports</li>
                  <li>Market research and data compilation</li>
                  <li>Legal documentation and verification services</li>
                  <li>Services that have been fully delivered and utilized</li>
                  <li>Third-party fees and charges</li>
                </ul>
                <p>
                  These services represent completed work and intellectual property that cannot be returned or reused.
                </p>
              </div>
            </section>

            {/* Partial Refunds */}
            <section id="partial-refunds">
              <h2 className="text-2xl font-semibold text-primary mb-4">7. Partial Refunds</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  In some cases, partial refunds may be offered based on:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>The extent of service delivery completed</li>
                  <li>The value of work already performed</li>
                  <li>The stage of the service process</li>
                  <li>Any costs already incurred on your behalf</li>
                </ul>
                <p>
                  Partial refunds are calculated on a case-by-case basis and will be clearly explained in writing.
                </p>
              </div>
            </section>

            {/* Cancellation */}
            <section id="cancellation">
              <h2 className="text-2xl font-semibold text-primary mb-4">8. Cancellation and Rescheduling</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  We understand that circumstances may change, and we offer flexible cancellation and rescheduling options:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Free rescheduling up to 24 hours before scheduled services</li>
                  <li>No cancellation fees for services cancelled within specified timeframes</li>
                  <li>Flexible rescheduling for emergency situations</li>
                  <li>Credit towards future services in lieu of refunds when appropriate</li>
                </ul>
              </div>
            </section>

            {/* Disputes */}
            <section id="disputes">
              <h2 className="text-2xl font-semibold text-primary mb-4">9. Dispute Resolution</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  If you disagree with a refund decision, we encourage you to:
                </p>
                <ol className="list-decimal list-inside space-y-2 ml-4">
                  <li>Contact our customer service team for clarification</li>
                  <li>Request a review by our management team</li>
                  <li>Provide additional documentation or evidence</li>
                  <li>Consider mediation if the dispute cannot be resolved directly</li>
                </ol>
                <p>
                  We are committed to resolving disputes amicably and finding mutually acceptable solutions.
                </p>
              </div>
            </section>

            {/* Contact */}
            <section id="contact">
              <h2 className="text-2xl font-semibold text-primary mb-4">10. Contact Information</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  For refund requests or questions about this policy, please contact us:
                </p>
                <div className="bg-muted/30 p-6 rounded-lg">
                  <p><strong>Email:</strong> refunds@celesteabode.com</p>
                  <p><strong>Phone:</strong> +91 [Your Phone Number]</p>
                  <p><strong>Address:</strong> Noida, Greater Noida, Gurgaon, India</p>
                  <p><strong>Response Time:</strong> Within 24 hours during business days</p>
                </div>
                <p>
                  Please include your service reference number, reason for refund request, and any relevant documentation when contacting us.
                </p>
              </div>
            </section>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  )
}
