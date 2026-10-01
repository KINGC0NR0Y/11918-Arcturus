import { ContactForm } from "@/components/contact/ContactForm";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { teamInfo } from "@/lib/data/social";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with ARCTURUS #11918.",
};

const contactLines = [
  { label: "School", value: teamInfo.school },
  { label: "Address", value: `${teamInfo.schoolAddressLine1}, ${teamInfo.schoolAddressLine2}` },
  { label: "Email", value: teamInfo.email, href: `mailto:${teamInfo.email}` },
  { label: "Instagram", value: teamInfo.instagram.handle, href: teamInfo.instagram.url },
  { label: "X", value: teamInfo.x.handle, href: teamInfo.x.url },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Get in Touch"
        title="Contact ARCTURUS"
        description="Questions about the team, sponsorship, or joining? Reach out — a student will get back to you."
      />

      <section className=" py-16 sm:py-24">
        <Container className="grid grid-cols-1 gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <h2 className="font-display text-xl font-bold text-white">
              ARCTURUS #{teamInfo.number}
            </h2>
            <dl className="mt-6 space-y-5">
              {contactLines.map((line) => (
                <div key={line.label}>
                  <dt className="font-mono-tech text-[11px] uppercase tracking-[0.2em] text-ink-300">
                    {line.label}
                  </dt>
                  <dd className="mt-1 text-base text-ink-50">
                    {line.href ? (
                      <a
                        href={line.href}
                        target={line.href.startsWith("http") ? "_blank" : undefined}
                        rel={line.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-blue-300 hover:text-orange-400"
                      >
                        {line.value}
                      </a>
                    ) : (
                      line.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={100} className="rounded-sm border border-white/15 p-6 sm:p-8">
            <ContactForm />
          </Reveal>
        </Container>
      </section>
    </>
  );
}
