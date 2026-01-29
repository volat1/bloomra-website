import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read Bloomra's privacy policy. We collect nothing - your data stays on your device. GDPR and CCPA compliant.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* TL;DR Summary */}
      <div className="bg-[var(--season-spring-bg)] rounded-2xl p-6 mb-12 not-prose">
        <h2 className="font-serif text-xl font-semibold text-[var(--ink-primary)] mb-3">
          Privacy Policy Summary
        </h2>
        <p className="text-[var(--ink-secondary)] mb-4">
          <strong>We collect nothing.</strong> Your data stays on your device.
          That&apos;s it.
        </p>
        <ul className="space-y-2 text-sm text-[var(--ink-secondary)]">
          <li className="flex items-start gap-2">
            <svg className="w-5 h-5 text-[var(--season-spring-primary)] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
            </svg>
            All data stored locally on your device only
          </li>
          <li className="flex items-start gap-2">
            <svg className="w-5 h-5 text-[var(--season-spring-primary)] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
            </svg>
            No accounts, no cloud storage, no servers
          </li>
          <li className="flex items-start gap-2">
            <svg className="w-5 h-5 text-[var(--season-spring-primary)] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
            </svg>
            No analytics, no tracking, no data collection
          </li>
          <li className="flex items-start gap-2">
            <svg className="w-5 h-5 text-[var(--season-spring-primary)] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
            </svg>
            Delete the app = delete all your data
          </li>
        </ul>
      </div>

      <h1>Privacy Policy</h1>
      <p className="text-sm text-[var(--ink-tertiary)]">
        Last updated: January 29, 2026
      </p>

      <h2>Introduction</h2>
      <p>
        Bloomra (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy.
        This Privacy Policy explains how we handle information in connection with our
        period tracking application (&quot;App&quot;).
      </p>
      <p>
        <strong>The short version:</strong> We don&apos;t collect your data. Everything stays
        on your device. We couldn&apos;t access your information even if we wanted to—because
        it never reaches us.
      </p>

      <h2>Information We Collect</h2>
      <p>
        <strong>We collect nothing.</strong> Bloomra is designed with privacy at its core.
        Here&apos;s what that means:
      </p>
      <ul>
        <li>
          <strong>Cycle Data:</strong> All menstrual cycle information, symptoms, moods,
          and notes you log are stored exclusively on your device. This data never leaves
          your phone.
        </li>
        <li>
          <strong>No Account Required:</strong> Bloomra works without any account, email
          address, or sign-up. We don&apos;t know who you are.
        </li>
        <li>
          <strong>No Analytics:</strong> We don&apos;t use Google Analytics, Firebase Analytics,
          or any other tracking service. We have no idea how you use the app.
        </li>
        <li>
          <strong>No Network Transmission:</strong> The app does not transmit any personal
          data over the internet. You can verify this by monitoring your network traffic.
        </li>
      </ul>

      <h2>How Your Data Is Stored</h2>
      <p>
        All data you enter into Bloomra is stored locally on your device using encrypted
        storage. Specifically:
      </p>
      <ul>
        <li>Data is stored in your device&apos;s secure, sandboxed app storage</li>
        <li>Sensitive data uses iOS Keychain / Android Keystore for additional encryption</li>
        <li>Data is only accessible by the Bloomra app on your specific device</li>
        <li>Data is not backed up to iCloud or Google Drive by default</li>
      </ul>

      <h2>Data Sharing</h2>
      <p>
        <strong>We don&apos;t share your data because we don&apos;t have it.</strong>
      </p>
      <p>
        Since all data remains on your device and is never transmitted to us:
      </p>
      <ul>
        <li>We cannot share it with advertisers</li>
        <li>We cannot sell it to data brokers</li>
        <li>We cannot provide it to third parties</li>
        <li>We cannot respond to data requests from authorities (we have nothing to provide)</li>
      </ul>

      <h2>Your Rights</h2>
      <h3>For All Users</h3>
      <p>You have complete control over your data:</p>
      <ul>
        <li>
          <strong>Access:</strong> All your data is visible within the app at any time
        </li>
        <li>
          <strong>Export:</strong> You can export your data from within the app settings
        </li>
        <li>
          <strong>Deletion:</strong> Uninstalling the app permanently deletes all your data.
          There is no backup we retain.
        </li>
      </ul>

      <h3>For European Users (GDPR)</h3>
      <p>
        Under the General Data Protection Regulation, you have rights including access,
        rectification, erasure, and data portability. Because we don&apos;t collect or store
        your data on our servers, these rights are exercised entirely through your control
        of your own device. You can delete all data by uninstalling the app.
      </p>

      <h3>For California Users (CCPA)</h3>
      <p>
        Under the California Consumer Privacy Act, you have the right to know what personal
        information is collected, request deletion, and opt-out of sale of personal
        information. Since we collect no personal information and have no data to sell,
        these rights are inherently satisfied by our privacy-by-design approach.
      </p>

      <h2>Children&apos;s Privacy</h2>
      <p>
        Bloomra is intended for users aged 16 and older. We do not knowingly collect
        information from children under 16. Since we don&apos;t collect any information from
        any user, this protection is built into our design.
      </p>

      <h2>App Store Purchases</h2>
      <p>
        If you purchase Bloomra or any in-app features, those transactions are processed
        by Apple (App Store) or Google (Play Store). We receive only anonymized purchase
        confirmations—we don&apos;t receive your name, email, or payment details. Please
        review Apple&apos;s or Google&apos;s privacy policies for information about their data
        practices.
      </p>

      <h2>Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. If we make significant changes,
        we will notify you through the app or our website. The &quot;Last updated&quot; date at the
        top of this policy indicates when it was last revised.
      </p>

      <h2>Contact Us</h2>
      <p>
        If you have questions about this Privacy Policy or our privacy practices, please
        contact us at:
      </p>
      <p>
        <strong>Email:</strong>{" "}
        <a href="mailto:hello@bloomra.app">hello@bloomra.app</a>
      </p>

      <hr className="my-12 border-[var(--stroke-light)]" />

      <p className="text-sm text-[var(--ink-tertiary)]">
        Bloomra is published by Bloomra. This privacy policy applies to the Bloomra
        mobile application available on iOS and Android platforms.
      </p>
    </>
  );
}
