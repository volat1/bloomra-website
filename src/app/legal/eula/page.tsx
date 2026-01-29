import { Metadata } from "next";

export const metadata: Metadata = {
  title: "End User License Agreement",
  description:
    "Read Bloomra's End User License Agreement. Clear terms for using our privacy-first period tracking app.",
};

export default function EulaPage() {
  return (
    <>
      {/* Summary */}
      <div className="bg-[var(--season-autumn-bg)] rounded-2xl p-6 mb-12 not-prose">
        <h2 className="font-serif text-xl font-semibold text-[var(--ink-primary)] mb-3">
          Agreement Summary
        </h2>
        <p className="text-[var(--ink-secondary)] mb-4">
          This agreement governs your use of Bloomra. Here&apos;s what matters:
        </p>
        <ul className="space-y-2 text-sm text-[var(--ink-secondary)]">
          <li className="flex items-start gap-2">
            <span className="text-[var(--season-autumn-primary)]">•</span>
            You get a personal, non-transferable license to use the app
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[var(--season-autumn-primary)]">•</span>
            Subscriptions auto-renew unless you cancel 24+ hours before renewal
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[var(--season-autumn-primary)]">•</span>
            This is a wellness tool, not medical advice or a medical device
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[var(--season-autumn-primary)]">•</span>
            Your data stays on your device—we never see it
          </li>
        </ul>
      </div>

      <h1>End User License Agreement</h1>
      <p className="text-sm text-[var(--ink-tertiary)]">
        Last updated: January 29, 2026
      </p>

      <p>
        This End User License Agreement (&quot;Agreement&quot;) is between you and Bloomra
        (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) for the Bloomra mobile application
        (&quot;App&quot;). By downloading, installing, or using the App, you agree to be
        bound by this Agreement.
      </p>

      <h2>1. License Grant</h2>
      <p>
        Subject to the terms of this Agreement, we grant you a limited, non-exclusive,
        non-transferable, revocable license to download, install, and use the App for
        your personal, non-commercial purposes on devices you own or control.
      </p>
      <p>This license does not allow you to:</p>
      <ul>
        <li>Copy, modify, or distribute the App</li>
        <li>Reverse engineer, decompile, or disassemble the App</li>
        <li>Rent, lease, lend, sell, or sublicense the App</li>
        <li>Use the App for any commercial purpose</li>
        <li>Remove or alter any proprietary notices in the App</li>
      </ul>

      <h2>2. Subscriptions and Payments</h2>
      <div className="bg-[var(--season-summer-bg)] rounded-xl p-4 my-6 not-prose">
        <p className="text-[var(--ink-primary)] font-medium mb-2">
          Important Subscription Information:
        </p>
        <p className="text-[var(--ink-secondary)] text-sm">
          Payment will be charged to your Apple ID account at the confirmation of
          purchase. Subscription automatically renews unless auto-renew is turned off
          at least 24-hours before the end of the current period.
        </p>
      </div>
      <p>
        Bloomra offers optional premium features through subscription plans. By
        purchasing a subscription:
      </p>
      <ul>
        <li>Your payment is processed by Apple through your Apple ID</li>
        <li>Subscriptions automatically renew at the end of each billing period</li>
        <li>You can manage or cancel subscriptions in your iOS Settings</li>
        <li>Cancellation takes effect at the end of your current billing period</li>
        <li>No refunds are provided for partial subscription periods</li>
      </ul>
      <p>
        For full subscription details, pricing, and cancellation instructions, see our{" "}
        <a href="/legal/subscription-terms">Subscription Terms</a>.
      </p>

      <h2>3. Your Data and Privacy</h2>
      <p>
        Bloomra is designed with privacy as a core principle. All personal data you
        enter into the App is stored locally on your device. We do not collect,
        transmit, or have access to your personal health data.
      </p>
      <ul>
        <li>You retain full ownership of your data</li>
        <li>Your data never leaves your device</li>
        <li>We cannot recover data if you delete the App</li>
        <li>For details, see our <a href="/legal/privacy-policy">Privacy Policy</a></li>
      </ul>

      <h2>4. Medical Disclaimer</h2>
      <div className="bg-[var(--season-winter-bg)] rounded-xl p-4 my-6 not-prose">
        <p className="text-[var(--ink-primary)] font-medium mb-2">
          Please read carefully:
        </p>
        <p className="text-[var(--ink-secondary)] text-sm">
          Bloomra is <strong>not</strong> a medical device and is <strong>not</strong>{" "}
          intended to diagnose, treat, cure, or prevent any disease or health condition.
        </p>
      </div>
      <p>The App:</p>
      <ul>
        <li>Does NOT predict ovulation or fertile windows</li>
        <li>Does NOT provide fertility or contraception guidance</li>
        <li>Does NOT diagnose medical conditions</li>
        <li>Should NOT replace professional medical advice</li>
      </ul>
      <p>
        Always consult a qualified healthcare provider for medical advice, diagnosis,
        or treatment.
      </p>

      <h2>5. Intellectual Property</h2>
      <p>
        The App and all content, features, and functionality (including but not limited
        to text, graphics, logos, icons, images, and software) are owned by Bloomra and
        protected by copyright, trademark, and other intellectual property laws.
      </p>
      <p>
        The Bloomra name, logo (the lotus flower design), and visual identity are
        trademarks of Bloomra. You may not use these marks without our prior written
        permission.
      </p>

      <h2>6. Disclaimer of Warranties</h2>
      <p>
        THE APP IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY
        KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED
        WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
        NON-INFRINGEMENT.
      </p>
      <p>
        We do not warrant that the App will be uninterrupted, error-free, or free of
        harmful components, or that any content will be accurate or reliable.
      </p>

      <h2>7. Limitation of Liability</h2>
      <p>
        TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL BLOOMRA
        BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE
        DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR
        INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES,
        RESULTING FROM:
      </p>
      <ul>
        <li>Your use or inability to use the App</li>
        <li>Any unauthorized access to or use of your device</li>
        <li>Any errors or omissions in the App&apos;s content</li>
        <li>Any decisions made based on information from the App</li>
      </ul>

      <h2>8. Termination</h2>
      <p>
        This Agreement is effective until terminated. Your rights under this Agreement
        will terminate automatically without notice if you fail to comply with any of
        its terms. Upon termination, you must cease all use of the App and delete all
        copies from your devices.
      </p>
      <p>
        We may also terminate or suspend your access to the App at any time, without
        prior notice or liability, for any reason.
      </p>

      <h2>9. Changes to This Agreement</h2>
      <p>
        We may update this Agreement from time to time. If we make material changes,
        we will notify you through the App or our website. Your continued use of the
        App after such changes constitutes your acceptance of the new Agreement.
      </p>

      <h2>10. Governing Law</h2>
      <p>
        This Agreement shall be governed by and construed in accordance with the laws
        of the jurisdiction in which Bloomra is established, without regard to its
        conflict of law provisions.
      </p>

      <h2>11. Apple-Specific Terms</h2>
      <p>
        The following terms apply to your use of the App on Apple devices:
      </p>
      <ul>
        <li>
          This Agreement is between you and Bloomra only, not with Apple Inc.
          (&quot;Apple&quot;). Bloomra, not Apple, is solely responsible for the App and its
          content.
        </li>
        <li>
          Apple has no obligation to provide any maintenance or support services for
          the App.
        </li>
        <li>
          Apple has no warranty obligation for the App. Any claims relating to the
          App&apos;s failure to conform to any warranty are Bloomra&apos;s responsibility.
        </li>
        <li>
          Bloomra, not Apple, is responsible for addressing any claims relating to
          the App, including product liability claims, claims that the App fails to
          conform to legal requirements, and consumer protection claims.
        </li>
        <li>
          In the event of any third-party claim that the App infringes intellectual
          property rights, Bloomra, not Apple, is responsible for investigation,
          defense, settlement, and discharge of such claims.
        </li>
        <li>
          Apple and its subsidiaries are third-party beneficiaries of this Agreement.
          Upon your acceptance, Apple has the right to enforce this Agreement against
          you as a third-party beneficiary.
        </li>
      </ul>

      <h2>12. Contact</h2>
      <p>
        For questions about this Agreement, please contact us at:
      </p>
      <p>
        <strong>Email:</strong>{" "}
        <a href="mailto:hello@bloomra.app">hello@bloomra.app</a>
      </p>

      <hr className="my-12 border-[var(--stroke-light)]" />

      <p className="text-sm text-[var(--ink-tertiary)]">
        By downloading, installing, or using Bloomra, you acknowledge that you have
        read, understood, and agree to be bound by this End User License Agreement.
      </p>
    </>
  );
}
