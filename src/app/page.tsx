import IntakeFormEmbed from "@/components/IntakeFormEmbed";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center px-4 py-12 bg-white text-gray-900">
      {/* Hero Section */}
      <section className="max-w-3xl w-full text-center space-y-6 mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
          We Represent <span className="text-[#0088d0]">You</span> to Top Companies
        </h1>
        <p className="text-lg text-gray-700">
          Instead of sending CVs into the void, we actively pitch you to selected companies in{" "}
          <strong>Tech</strong> and <strong>Industry</strong>. Our candidates get discovered faster — and hired better.
        </p>
        <div className="flex justify-center">
          <IntakeFormEmbed />
        </div>
      </section>

      {/* Company CTA */}
      <section className="max-w-3xl w-full text-center space-y-6 mb-16">
        <h2 className="text-2xl font-semibold">Looking for Talent?</h2>
        <p className="text-gray-700">
          We connect you with pre-vetted professionals ready to make an impact.
        </p>
        <ContactForm />
      </section>

      {/* Calendar Section */}
      <section className="max-w-3xl w-full text-center space-y-6">
        <h2 className="text-2xl font-semibold">Book a Preliminary Interview</h2>
        <p className="text-gray-700">
          Choose a time that works for you — no back-and-forth emails.
        </p>
        <div className="mt-6">
          <iframe
            src="https://calendly.com/steveforwardgr/30min?hide_event_type_details=1&hide_gdpr_banner=1"
            width="100%"
            height="500"
            frameBorder="0"
            className="rounded-lg shadow"
          ></iframe>
        </div>
      </section>
    </main>
  );
}