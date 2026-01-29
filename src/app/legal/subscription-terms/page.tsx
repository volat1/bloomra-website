import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Subscription Terms",
  description:
    "Bloomra subscription pricing, free trial, auto-renewal terms, and cancellation instructions. Clear and transparent subscription information.",
};

export default function SubscriptionTermsPage() {
  return (
    <>
      {/* Free Trial Banner */}
      <div className="bg-[var(--season-spring-bg)] rounded-2xl p-6 mb-6 not-prose text-center">
        <div className="inline-block bg-[var(--season-spring-primary)] text-white text-sm font-medium px-4 py-1.5 rounded-full mb-3">
          Start Free
        </div>
        <h2 className="font-serif text-2xl font-bold text-[var(--ink-primary)] mb-2">
          3 Months Free
        </h2>
        <p className="text-[var(--ink-secondary)]">
          Try Bloomra completely free for 3 months. Cancel anytime before your trial
          ends and you won&apos;t be charged.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="grid md:grid-cols-2 gap-6 mb-12 not-prose">
        {/* Monthly Plan */}
        <div className="bg-[var(--season-summer-bg)] rounded-2xl p-6">
          <h3 className="font-serif text-lg font-semibold text-[var(--ink-primary)] mb-2">
            Monthly
          </h3>
          <div className="flex items-baseline gap-1 mb-4">
            <span className="font-serif text-3xl font-bold text-[var(--ink-primary)]">
              $4.99
            </span>
            <span className="text-[var(--ink-secondary)]">/month</span>
          </div>
          <p className="text-sm text-[var(--ink-tertiary)] mb-4">
            After 3-month free trial
          </p>
          <ul className="space-y-2 text-sm text-[var(--ink-secondary)]">
            <li className="flex items-start gap-2">
              <span className="text-[var(--season-summer-primary)]">✓</span>
              Full access to all features
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--season-summer-primary)]">✓</span>
              Cancel anytime
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--season-summer-primary)]">✓</span>
              Billed monthly after trial
            </li>
          </ul>
        </div>

        {/* Annual Plan */}
        <div className="bg-[var(--season-autumn-bg)] rounded-2xl p-6 relative">
          <div className="absolute -top-3 right-4 bg-[var(--season-autumn-primary)] text-white text-xs font-medium px-3 py-1 rounded-full">
            Best Value
          </div>
          <h3 className="font-serif text-lg font-semibold text-[var(--ink-primary)] mb-2">
            Annual
          </h3>
          <div className="flex items-baseline gap-1 mb-4">
            <span className="font-serif text-3xl font-bold text-[var(--ink-primary)]">
              $24.99
            </span>
            <span className="text-[var(--ink-secondary)]">/year</span>
          </div>
          <p className="text-sm text-[var(--ink-tertiary)] mb-4">
            After 3-month free trial — just $2.08/month
          </p>
          <ul className="space-y-2 text-sm text-[var(--ink-secondary)]">
            <li className="flex items-start gap-2">
              <span className="text-[var(--season-autumn-primary)]">✓</span>
              Full access to all features
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--season-autumn-primary)]">✓</span>
              Save over 58% vs monthly
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--season-autumn-primary)]">✓</span>
              Billed annually after trial
            </li>
          </ul>
        </div>
      </div>

      <h1>Subscription Terms</h1>
      <p className="text-sm text-[var(--ink-tertiary)]">
        Last updated: January 29, 2026
      </p>

      <p>
        Bloomra offers premium features through subscription plans with a generous free
        trial. This page explains our subscription terms, pricing, and how to manage
        your subscription.
      </p>

      <h2>1. Free Trial</h2>
      <div className="bg-[var(--season-spring-bg)] rounded-xl p-4 my-6 not-prose">
        <p className="text-[var(--ink-primary)] font-medium mb-2">
          3-Month Free Trial:
        </p>
        <p className="text-[var(--ink-secondary)] text-sm">
          New subscribers receive a 3-month free trial with full access to all premium
          features. You won&apos;t be charged during the trial period. If you don&apos;t
          cancel at least 24 hours before your trial ends, your subscription will
          automatically convert to a paid subscription.
        </p>
      </div>
      <p>Important things to know about your free trial:</p>
      <ul>
        <li>Full access to all premium features during the trial</li>
        <li>No payment required to start — just your Apple ID</li>
        <li>Cancel anytime during the trial and you won&apos;t be charged</li>
        <li>Must cancel at least 24 hours before trial ends to avoid charges</li>
        <li>One free trial per Apple ID</li>
      </ul>

      <h2>2. Subscription Plans</h2>
      <p>After your free trial, choose the plan that works for you:</p>
      <ul>
        <li>
          <strong>Monthly Plan:</strong> $4.99 per month, billed every month
        </li>
        <li>
          <strong>Annual Plan:</strong> $24.99 per year, billed once per year
          (equivalent to $2.08/month — save over 58%)
        </li>
      </ul>
      <p>
        Both plans provide full access to all premium features. Prices may vary by
        region and are displayed in your local currency in the App Store.
      </p>

      <h2>3. Auto-Renewal Terms</h2>
      <div className="bg-[var(--season-summer-bg)] rounded-xl p-4 my-6 not-prose">
        <p className="text-[var(--ink-primary)] font-medium mb-2">
          Important — Please Read:
        </p>
        <p className="text-[var(--ink-secondary)] text-sm">
          Payment will be charged to your Apple ID account at the confirmation of
          purchase. Subscription automatically renews unless auto-renew is turned off
          at least 24-hours before the end of the current period. Your account will be
          charged for renewal within 24-hours prior to the end of the current period.
        </p>
      </div>
      <p>
        Your subscription will automatically renew at the end of each billing period
        unless you cancel. Here&apos;s what that means:
      </p>
      <ul>
        <li>
          <strong>Free trial:</strong> Converts to paid subscription after 3 months
          unless cancelled
        </li>
        <li>
          <strong>Monthly subscriptions</strong> renew every month on the same date
        </li>
        <li>
          <strong>Annual subscriptions</strong> renew once per year on the anniversary
          of your original purchase
        </li>
        <li>
          Renewal is charged within 24 hours before the end of your current period
        </li>
        <li>
          You must cancel at least 24 hours before renewal to avoid being charged
        </li>
      </ul>

      <h2>4. How to Cancel Your Subscription</h2>
      <p>
        You can cancel your subscription at any time, including during your free trial.
        Cancellation takes effect at the end of your current period—you&apos;ll continue
        to have access until then.
      </p>
      <div className="bg-[var(--background-card)] rounded-xl p-6 my-6 not-prose border border-[var(--stroke-light)]">
        <p className="font-medium text-[var(--ink-primary)] mb-4">
          To cancel on iPhone or iPad:
        </p>
        <ol className="space-y-3 text-sm text-[var(--ink-secondary)]">
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--season-spring-bg)] text-[var(--season-spring-primary)] flex items-center justify-center text-xs font-medium">
              1
            </span>
            <span>
              Open the <strong>Settings</strong> app on your device
            </span>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--season-spring-bg)] text-[var(--season-spring-primary)] flex items-center justify-center text-xs font-medium">
              2
            </span>
            <span>
              Tap your <strong>name</strong> at the top of the screen
            </span>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--season-spring-bg)] text-[var(--season-spring-primary)] flex items-center justify-center text-xs font-medium">
              3
            </span>
            <span>
              Tap <strong>Subscriptions</strong>
            </span>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--season-spring-bg)] text-[var(--season-spring-primary)] flex items-center justify-center text-xs font-medium">
              4
            </span>
            <span>
              Find and tap <strong>Bloomra</strong>
            </span>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--season-spring-bg)] text-[var(--season-spring-primary)] flex items-center justify-center text-xs font-medium">
              5
            </span>
            <span>
              Tap <strong>Cancel Subscription</strong> and confirm
            </span>
          </li>
        </ol>
      </div>
      <p>
        <strong>Remember:</strong> You must cancel at least 24 hours before your trial
        ends or renewal date to avoid being charged.
      </p>

      <h2>5. Payment Processing</h2>
      <p>All subscription payments are processed by Apple:</p>
      <ul>
        <li>Payment is charged to your Apple ID account</li>
        <li>You&apos;ll receive a receipt from Apple, not from Bloomra</li>
        <li>We do not have access to your payment information</li>
        <li>Pricing is displayed in your local currency</li>
      </ul>
      <p>
        Apple handles all billing, payment processing, and receipt generation. We never
        see or store your credit card information or payment details.
      </p>

      <h2>6. Refunds</h2>
      <p>
        Since Apple processes all payments, refund requests must be submitted directly
        to Apple. We cannot process refunds ourselves.
      </p>
      <div className="bg-[var(--background-card)] rounded-xl p-6 my-6 not-prose border border-[var(--stroke-light)]">
        <p className="font-medium text-[var(--ink-primary)] mb-4">
          To request a refund from Apple:
        </p>
        <ol className="space-y-3 text-sm text-[var(--ink-secondary)]">
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--season-summer-bg)] text-[var(--season-summer-primary)] flex items-center justify-center text-xs font-medium">
              1
            </span>
            <span>
              Visit{" "}
              <a
                href="https://reportaproblem.apple.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--season-spring-primary)] hover:underline"
              >
                reportaproblem.apple.com
              </a>
            </span>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--season-summer-bg)] text-[var(--season-summer-primary)] flex items-center justify-center text-xs font-medium">
              2
            </span>
            <span>Sign in with your Apple ID</span>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--season-summer-bg)] text-[var(--season-summer-primary)] flex items-center justify-center text-xs font-medium">
              3
            </span>
            <span>Find your Bloomra purchase in the list</span>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--season-summer-bg)] text-[var(--season-summer-primary)] flex items-center justify-center text-xs font-medium">
              4
            </span>
            <span>Select &quot;Request a refund&quot; and follow the prompts</span>
          </li>
        </ol>
      </div>
      <p>
        Apple reviews each refund request individually. We cannot guarantee that refund
        requests will be approved.
      </p>

      <h2>7. Changing Your Subscription</h2>
      <p>
        You can upgrade or downgrade your subscription at any time through your iOS
        Settings. Changes work as follows:
      </p>
      <ul>
        <li>
          <strong>Upgrading</strong> (monthly to annual): Takes effect immediately. Any
          remaining time on your current plan is prorated.
        </li>
        <li>
          <strong>Downgrading</strong> (annual to monthly): Takes effect at the end of
          your current billing period.
        </li>
      </ul>

      <h2>8. Price Changes</h2>
      <p>
        We may change subscription prices from time to time. If we do:
      </p>
      <ul>
        <li>We&apos;ll notify you in advance through the App or email</li>
        <li>New prices won&apos;t affect your current subscription period</li>
        <li>You can cancel before the new price takes effect</li>
        <li>Continuing to use the App after price changes means you accept the new price</li>
      </ul>

      <h2>9. What&apos;s Included</h2>
      <p>Premium subscriptions include access to all Bloomra features:</p>
      <ul>
        <li>Full cycle tracking and logging</li>
        <li>Inner Seasons insights and guidance</li>
        <li>Personalized daily wisdom</li>
        <li>Tree ring history visualization</li>
        <li>Data export functionality</li>
        <li>All future premium features</li>
      </ul>

      <h2>10. Contact</h2>
      <p>
        For questions about subscriptions that aren&apos;t related to billing (which Apple
        handles), please contact us at:
      </p>
      <p>
        <strong>Email:</strong>{" "}
        <a href="mailto:hello@bloomra.app">hello@bloomra.app</a>
      </p>

      <hr className="my-12 border-[var(--stroke-light)]" />

      <p className="text-sm text-[var(--ink-tertiary)]">
        By starting a Bloomra subscription or free trial, you acknowledge that you have
        read, understood, and agree to these Subscription Terms.
      </p>
    </>
  );
}
