import { Metadata } from "next";
import { Header, Footer } from "@/components/layout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Delete Your Data",
  description:
    "How to delete your Bloomra data. Your data lives only on your device - deleting the app removes everything permanently.",
};

export default function DataDeletionPage() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-16 min-h-screen">
        <div className="container-wide">
          {/* Hero */}
          <div className="text-center mb-12">
            <div className="inline-block bg-[var(--season-spring-bg)] p-3 rounded-2xl mb-4">
              <svg
                className="w-8 h-8 text-[var(--season-spring-primary)]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-[var(--ink-primary)] mb-4">
              Delete Your Data
            </h1>
            <p className="text-lg text-[var(--ink-secondary)] max-w-xl mx-auto">
              Your data is yours. Here&apos;s how to remove it completely.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            {/* Key Info Card */}
            <div className="bg-[var(--season-spring-bg)] rounded-2xl p-6 md:p-8 mb-8">
              <h2 className="font-serif text-xl font-semibold text-[var(--ink-primary)] mb-4">
                The Simple Truth
              </h2>
              <p className="text-[var(--ink-secondary)] mb-4">
                Bloomra stores all your data locally on your device. We have no servers,
                no cloud storage, and no copies of your information.
              </p>
              <p className="text-[var(--ink-primary)] font-medium">
                Deleting the Bloomra app = complete data deletion.
              </p>
            </div>

            {/* Step by Step */}
            <div className="bg-[var(--background-card)] rounded-2xl p-6 md:p-8 mb-8 border border-[var(--stroke-light)]">
              <h2 className="font-serif text-xl font-semibold text-[var(--ink-primary)] mb-6">
                How to Delete Your Data
              </h2>

              <div className="space-y-6">
                {/* Option 1 */}
                <div>
                  <h3 className="font-medium text-[var(--ink-primary)] mb-3 flex items-center gap-2">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--season-spring-primary)] text-white flex items-center justify-center text-xs font-bold">
                      1
                    </span>
                    Delete the App (Complete Deletion)
                  </h3>
                  <div className="ml-8 space-y-3 text-sm text-[var(--ink-secondary)]">
                    <p>
                      The simplest way to delete all your Bloomra data is to delete the app
                      from your device:
                    </p>
                    <ol className="space-y-2 list-decimal list-inside">
                      <li>Find the Bloomra app on your home screen</li>
                      <li>Press and hold the app icon until it jiggles</li>
                      <li>Tap the &quot;-&quot; or &quot;X&quot; button that appears</li>
                      <li>Confirm by tapping &quot;Delete App&quot;</li>
                    </ol>
                    <p className="text-[var(--ink-tertiary)] italic">
                      This permanently removes all your cycle data, logs, and settings.
                    </p>
                  </div>
                </div>

                {/* Option 2 */}
                <div>
                  <h3 className="font-medium text-[var(--ink-primary)] mb-3 flex items-center gap-2">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--season-summer-primary)] text-white flex items-center justify-center text-xs font-bold">
                      2
                    </span>
                    Export Before Deleting (Optional)
                  </h3>
                  <div className="ml-8 space-y-3 text-sm text-[var(--ink-secondary)]">
                    <p>
                      Want to keep a copy of your data before deleting? You can export it
                      first:
                    </p>
                    <ol className="space-y-2 list-decimal list-inside">
                      <li>Open Bloomra and go to Settings</li>
                      <li>Tap &quot;Export My Data&quot;</li>
                      <li>Choose where to save the export file</li>
                      <li>Then delete the app as described above</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>

            {/* What Gets Deleted */}
            <div className="bg-[var(--background-card)] rounded-2xl p-6 md:p-8 mb-8 border border-[var(--stroke-light)]">
              <h2 className="font-serif text-xl font-semibold text-[var(--ink-primary)] mb-4">
                What Gets Deleted
              </h2>
              <p className="text-[var(--ink-secondary)] mb-4">
                When you delete Bloomra, the following data is permanently removed:
              </p>
              <ul className="space-y-2 text-[var(--ink-secondary)]">
                <li className="flex items-start gap-2">
                  <span className="text-[var(--season-autumn-primary)]">•</span>
                  All your cycle history and period logs
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--season-autumn-primary)]">•</span>
                  Symptoms, moods, and energy levels you&apos;ve tracked
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--season-autumn-primary)]">•</span>
                  Notes and observations you&apos;ve written
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--season-autumn-primary)]">•</span>
                  Your app preferences and settings
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--season-autumn-primary)]">•</span>
                  All locally stored data
                </li>
              </ul>
            </div>

            {/* What We Never Had */}
            <div className="bg-[var(--season-winter-bg)] rounded-2xl p-6 md:p-8 mb-8">
              <h2 className="font-serif text-xl font-semibold text-[var(--ink-primary)] mb-4">
                What We Never Had
              </h2>
              <p className="text-[var(--ink-secondary)] mb-4">
                Unlike many apps, Bloomra never collects or stores your data on external
                servers. This means:
              </p>
              <ul className="space-y-2 text-[var(--ink-secondary)]">
                <li className="flex items-start gap-2">
                  <span className="text-[var(--season-winter-primary)]">✗</span>
                  No account information (we don&apos;t have accounts)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--season-winter-primary)]">✗</span>
                  No cloud backups (we don&apos;t use cloud storage)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--season-winter-primary)]">✗</span>
                  No server-side data (we don&apos;t have servers for user data)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--season-winter-primary)]">✗</span>
                  No analytics profiles (we don&apos;t track you)
                </li>
              </ul>
              <p className="text-[var(--ink-tertiary)] text-sm mt-4 italic">
                There&apos;s nothing for us to delete because we never had your data in the
                first place.
              </p>
            </div>

            {/* Important Notice */}
            <div className="bg-[var(--season-autumn-bg)] rounded-2xl p-6 md:p-8 mb-8">
              <h2 className="font-serif text-xl font-semibold text-[var(--ink-primary)] mb-4">
                Important: Deletion is Permanent
              </h2>
              <p className="text-[var(--ink-secondary)] mb-4">
                Once you delete the Bloomra app, your data is gone forever. We cannot:
              </p>
              <ul className="space-y-2 text-[var(--ink-secondary)]">
                <li className="flex items-start gap-2">
                  <span className="text-[var(--season-autumn-primary)]">•</span>
                  Recover your data after deletion
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--season-autumn-primary)]">•</span>
                  Restore previous entries or history
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--season-autumn-primary)]">•</span>
                  Access any backup (there are none)
                </li>
              </ul>
              <p className="text-[var(--ink-primary)] font-medium mt-4">
                If you think you might want your data later, export it before deleting.
              </p>
            </div>

            {/* Subscription Note */}
            <div className="bg-[var(--background-card)] rounded-2xl p-6 md:p-8 mb-8 border border-[var(--stroke-light)]">
              <h2 className="font-serif text-xl font-semibold text-[var(--ink-primary)] mb-4">
                What About My Subscription?
              </h2>
              <p className="text-[var(--ink-secondary)] mb-4">
                Deleting the app does <strong>not</strong> automatically cancel your
                subscription. To avoid future charges:
              </p>
              <ol className="space-y-2 text-[var(--ink-secondary)] list-decimal list-inside mb-4">
                <li>Go to Settings on your device</li>
                <li>Tap your name → Subscriptions</li>
                <li>Find Bloomra and tap &quot;Cancel Subscription&quot;</li>
              </ol>
              <p className="text-sm text-[var(--ink-tertiary)]">
                See our{" "}
                <Link
                  href="/legal/subscription-terms"
                  className="text-[var(--season-spring-primary)] hover:underline"
                >
                  Subscription Terms
                </Link>{" "}
                for detailed cancellation instructions.
              </p>
            </div>

            {/* Contact */}
            <div className="text-center">
              <h2 className="font-serif text-xl font-semibold text-[var(--ink-primary)] mb-4">
                Questions?
              </h2>
              <p className="text-[var(--ink-secondary)] mb-4">
                If you have any questions about data deletion, we&apos;re here to help.
              </p>
              <a
                href="mailto:hello@bloomra.app"
                className="inline-flex items-center gap-2 text-[var(--season-spring-primary)] hover:underline"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                hello@bloomra.app
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
