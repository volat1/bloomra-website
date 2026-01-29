import { Metadata } from "next";
import { Header, Footer } from "@/components/layout";
import { Accordion } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Support & Help",
  description:
    "Get help with Bloomra. Find answers in our FAQ, contact support, or read our getting started guide.",
};

const faqItems = [
  {
    question: "How is my data actually stored?",
    answer: (
      <>
        All your data is stored locally on your device using secure, encrypted storage.
        Nothing is ever transmitted to external servers. When you delete Bloomra, your
        data is deleted too—permanently.
      </>
    ),
  },
  {
    question: "Do I need to create an account?",
    answer: (
      <>
        No. Bloomra works without any account, email, or sign-up. Just download and start
        using it. This is intentional—accounts would require servers, and servers would
        mean your data leaving your device.
      </>
    ),
  },
  {
    question: "What happens to my data if I delete the app?",
    answer: (
      <>
        It&apos;s gone. Completely. Since everything is stored locally, deleting Bloomra
        deletes all your cycle data. There&apos;s no backup we&apos;re holding onto, no
        &quot;deleted but retained for 90 days.&quot; Gone means gone.
      </>
    ),
  },
  {
    question: "Can I export my data?",
    answer: (
      <>
        Yes. You can export your data from within the app settings whenever you want.
        It&apos;s your data—you should be able to take it with you.
      </>
    ),
  },
  {
    question: "Does Bloomra predict my ovulation or fertile window?",
    answer: (
      <>
        No. We don&apos;t make fertility predictions because we don&apos;t believe a consumer
        app should make claims about something that personal and medically significant.
        Bloomra helps you observe patterns, not predict biology.
      </>
    ),
  },
  {
    question: "Can Bloomra help me get pregnant or avoid pregnancy?",
    answer: (
      <>
        Bloomra is not designed for fertility planning. We track observations about your
        cycle to help you notice patterns, but we don&apos;t provide fertility predictions,
        ovulation alerts, or conception guidance. Please consult a healthcare provider
        for family planning.
      </>
    ),
  },
  {
    question: "Why don't you use cloud backup?",
    answer: (
      <>
        Cloud backup would mean your cycle data sits on servers—ours or a third party&apos;s.
        Even with encryption, that creates risk. We believe the only secure data is data
        that never leaves your control, so we designed Bloomra without cloud features entirely.
      </>
    ),
  },
  {
    question: "How does Bloomra make money if it doesn't sell data or show ads?",
    answer: (
      <>
        We charge for the app. That&apos;s our business model. When you pay for Bloomra,
        you become our customer—not advertisers or data brokers. We think that&apos;s how
        it should be.
      </>
    ),
  },
  {
    question: "What do the seasonal metaphors mean?",
    answer: (
      <>
        Bloomra uses Inner Winter, Spring, Summer, and Autumn as gentle frameworks for
        understanding your cycle phases. These aren&apos;t medical terms—they&apos;re intuitive
        ways to connect your energy and mood patterns to the natural rhythm of your cycle.
        No hormone predictions, just a different way of seeing your month.
      </>
    ),
  },
  {
    question: "Is Bloomra a medical device or diagnostic tool?",
    answer: (
      <>
        No. Bloomra is designed for personal observation and self-reflection, not medical
        diagnosis. It doesn&apos;t detect conditions, analyze hormone levels, or replace
        professional medical advice. If you have health concerns, please see a healthcare
        provider.
      </>
    ),
  },
];

export default function SupportPage() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-16 min-h-screen">
        <div className="container-wide">
          {/* Hero */}
          <div className="text-center mb-16">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-[var(--ink-primary)] mb-4">
              How can we help?
            </h1>
            <p className="text-lg text-[var(--ink-secondary)] max-w-xl mx-auto">
              Find answers to common questions or get in touch with our support team.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* FAQ Section */}
            <div className="lg:col-span-2" id="faq">
              <h2 className="font-serif text-2xl font-semibold text-[var(--ink-primary)] mb-6">
                Frequently Asked Questions
              </h2>
              <div className="bg-[var(--background-card)] rounded-2xl p-6 md:p-8">
                <Accordion items={faqItems} />
              </div>
            </div>

            {/* Contact Section */}
            <div id="contact">
              <h2 className="font-serif text-2xl font-semibold text-[var(--ink-primary)] mb-6">
                Contact Us
              </h2>
              <div className="bg-[var(--background-card)] rounded-2xl p-6 md:p-8 sticky top-24">
                <p className="text-[var(--ink-secondary)] mb-6">
                  Can&apos;t find what you&apos;re looking for? We&apos;re here to help.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[var(--season-spring-bg)] flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-[var(--season-spring-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-[var(--ink-primary)]">Email</p>
                      <a
                        href="mailto:hello@bloomra.app"
                        className="text-[var(--season-spring-primary)] hover:underline"
                      >
                        hello@bloomra.app
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[var(--season-summer-bg)] flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-[var(--season-summer-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-[var(--ink-primary)]">Response Time</p>
                      <p className="text-[var(--ink-secondary)] text-sm">
                        We typically respond within 24-48 hours
                      </p>
                    </div>
                  </div>
                </div>

                <Button href="mailto:hello@bloomra.app" className="w-full">
                  <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Send us an email
                </Button>

                {/* Privacy note */}
                <p className="text-xs text-[var(--ink-tertiary)] mt-6">
                  We handle support requests with the same privacy-first approach as our
                  app. We&apos;ll never ask for your cycle data and will delete your email
                  after resolving your issue.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
