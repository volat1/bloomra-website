import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Read Bloomra's Terms of Service. Clear, fair terms for using our privacy-first period tracking app.",
};

export default function TermsOfServicePage() {
  return (
    <>
      {/* Summary */}
      <div className="bg-[var(--season-summer-bg)] rounded-2xl p-6 mb-12 not-prose">
        <h2 className="font-serif text-xl font-semibold text-[var(--ink-primary)] mb-3">
          Terms Summary
        </h2>
        <p className="text-[var(--ink-secondary)] mb-4">
          These terms are meant to be clear and fair. Here&apos;s the essence:
        </p>
        <ul className="space-y-2 text-sm text-[var(--ink-secondary)]">
          <li className="flex items-start gap-2">
            <span className="text-[var(--season-summer-primary)]">•</span>
            Bloomra is for personal wellness observation, not medical diagnosis
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[var(--season-summer-primary)]">•</span>
            Don&apos;t use it to make medical decisions without consulting a doctor
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[var(--season-summer-primary)]">•</span>
            You own your data—it stays on your device
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[var(--season-summer-primary)]">•</span>
            We provide the app &quot;as is&quot; with no warranty of accuracy
          </li>
        </ul>
      </div>

      <h1>Terms of Service</h1>
      <p className="text-sm text-[var(--ink-tertiary)]">
        Last updated: January 29, 2026
      </p>

      <h2>1. Acceptance of Terms</h2>
      <p>
        By downloading, installing, or using Bloomra (&quot;App&quot;), you agree to be bound
        by these Terms of Service (&quot;Terms&quot;). If you do not agree to these Terms, do
        not use the App.
      </p>

      <h2>2. Description of Service</h2>
      <p>
        Bloomra is a period tracking application designed to help you observe and
        reflect on your menstrual cycle patterns. The App stores all data locally
        on your device and does not transmit personal information to external servers.
      </p>

      <h2>3. Important Medical Disclaimer</h2>
      <div className="bg-[var(--season-autumn-bg)] rounded-xl p-4 my-6 not-prose">
        <p className="text-[var(--ink-primary)] font-medium mb-2">
          Please read this carefully:
        </p>
        <p className="text-[var(--ink-secondary)] text-sm">
          Bloomra is <strong>not</strong> a medical device and is <strong>not</strong> intended
          to diagnose, treat, cure, or prevent any disease or health condition.
        </p>
      </div>
      <p>
        Specifically, Bloomra:
      </p>
      <ul>
        <li>Does NOT predict ovulation or fertile windows</li>
        <li>Does NOT provide fertility or contraception guidance</li>
        <li>Does NOT diagnose conditions such as PCOS, endometriosis, or PMDD</li>
        <li>Does NOT infer hormone levels or provide medical insights</li>
        <li>Should NOT be used as a substitute for professional medical advice</li>
      </ul>
      <p>
        The information provided by Bloomra is for general informational and wellness
        purposes only. Always consult a qualified healthcare provider for medical advice,
        diagnosis, or treatment. Never disregard professional medical advice or delay
        seeking it because of information from this App.
      </p>

      <h2>4. User Responsibilities</h2>
      <p>By using Bloomra, you agree to:</p>
      <ul>
        <li>Use the App only for personal, non-commercial purposes</li>
        <li>Not rely on the App for medical decisions</li>
        <li>Maintain the security of your device and any backup of your data</li>
        <li>Not attempt to reverse engineer, decompile, or modify the App</li>
        <li>Not use the App in any way that violates applicable laws</li>
      </ul>

      <h2>5. Intellectual Property</h2>
      <p>
        The App, including its design, code, graphics, and content, is owned by Bloomra
        and protected by intellectual property laws. You are granted a limited,
        non-exclusive, non-transferable license to use the App for personal purposes
        in accordance with these Terms.
      </p>
      <p>
        The Bloomra name, logo (the lotus flower design), and visual identity are
        trademarks of Bloomra. You may not use these marks without our written permission.
      </p>

      <h2>6. Your Data</h2>
      <p>
        All data you enter into Bloomra remains on your device and under your control.
        We do not access, collect, or store your personal data on our servers.
      </p>
      <ul>
        <li>You own all data you create within the App</li>
        <li>You are responsible for backing up your data if desired</li>
        <li>Deleting the App will permanently delete all your data</li>
        <li>We cannot recover data after you delete the App</li>
      </ul>

      <h2>7. Disclaimer of Warranties</h2>
      <p>
        THE APP IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND,
        EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO:
      </p>
      <ul>
        <li>Warranties of merchantability or fitness for a particular purpose</li>
        <li>Warranties that the App will be error-free or uninterrupted</li>
        <li>Warranties regarding the accuracy or reliability of any information</li>
        <li>Warranties that the App will meet your specific requirements</li>
      </ul>
      <p>
        Cycle predictions and insights are based on your logged data and general patterns.
        Individual experiences vary, and the App cannot account for all factors affecting
        your menstrual cycle.
      </p>

      <h2>8. Limitation of Liability</h2>
      <p>
        TO THE MAXIMUM EXTENT PERMITTED BY LAW, BLOOMRA AND ITS AFFILIATES SHALL NOT BE
        LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES,
        INCLUDING BUT NOT LIMITED TO:
      </p>
      <ul>
        <li>Loss of data</li>
        <li>Loss of profits or business opportunities</li>
        <li>Personal injury or health consequences</li>
        <li>Any damages arising from reliance on the App&apos;s information</li>
      </ul>
      <p>
        Our total liability for any claims arising from your use of the App shall not
        exceed the amount you paid for the App in the twelve months preceding the claim.
      </p>

      <h2>9. Indemnification</h2>
      <p>
        You agree to indemnify and hold harmless Bloomra, its officers, directors,
        employees, and agents from any claims, damages, losses, or expenses arising
        from your use of the App or violation of these Terms.
      </p>

      <h2>10. Termination</h2>
      <p>
        You may stop using the App at any time by uninstalling it. We reserve the right
        to terminate or suspend access to the App for violations of these Terms. Upon
        termination, all data stored locally on your device will remain until you delete
        the App.
      </p>

      <h2>11. Changes to Terms</h2>
      <p>
        We may update these Terms from time to time. If we make material changes, we will
        notify you through the App or our website. Your continued use of the App after
        such changes constitutes acceptance of the new Terms.
      </p>

      <h2>12. Governing Law</h2>
      <p>
        These Terms shall be governed by and construed in accordance with the laws of
        the jurisdiction in which Bloomra is established, without regard to conflict
        of law principles.
      </p>

      <h2>13. Dispute Resolution</h2>
      <p>
        Any disputes arising from these Terms or your use of the App shall first be
        attempted to be resolved through good-faith negotiation. If negotiation fails,
        disputes shall be resolved through binding arbitration in accordance with the
        rules of the applicable arbitration association.
      </p>

      <h2>14. Severability</h2>
      <p>
        If any provision of these Terms is found to be unenforceable, the remaining
        provisions shall continue in full force and effect.
      </p>

      <h2>15. Entire Agreement</h2>
      <p>
        These Terms, together with our Privacy Policy, constitute the entire agreement
        between you and Bloomra regarding your use of the App.
      </p>

      <h2>16. Contact</h2>
      <p>
        For questions about these Terms, please contact us at:
      </p>
      <p>
        <strong>Email:</strong>{" "}
        <a href="mailto:hello@bloomra.app">hello@bloomra.app</a>
      </p>

      <hr className="my-12 border-[var(--stroke-light)]" />

      <p className="text-sm text-[var(--ink-tertiary)]">
        By using Bloomra, you acknowledge that you have read, understood, and agree
        to be bound by these Terms of Service.
      </p>
    </>
  );
}
