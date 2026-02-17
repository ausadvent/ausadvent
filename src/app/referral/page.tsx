'use client'

import Script from 'next/script'

const TALLY_EMBED_URL =
  'https://tally.so/embed/mVAP0l?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1'

export default function ReferralPage() {
  return (
    <main>
      {/* Hero */}
      <section
        className="bg-brand-primary px-6 py-12 sm:py-16 md:py-20 text-white"
        aria-labelledby="referral-heading"
      >
        <div className="mx-auto max-w-3xl text-center">
          <h1
            id="referral-heading"
            className="text-2xl font-bold sm:text-3xl md:text-4xl leading-tight"
          >
            Participant Referral Form
          </h1>
          <p className="mt-4 text-base sm:text-lg text-white/95 leading-relaxed">
            Complete this form to refer a participant to AUSADVENT CARE
            accommodation and support services. All information is treated
            confidentially in accordance with NDIS privacy standards.
          </p>
        </div>
      </section>

      {/* Tally embed — JS widget (iframe with data-tally-src + script) */}
      <section
        className="px-4 sm:px-6 py-8 md:py-12"
        aria-label="Referral form"
      >
        <div className="mx-auto w-full max-w-4xl">
          <iframe
            data-tally-src={TALLY_EMBED_URL}
            loading="lazy"
            width="100%"
            height={800}
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            title="AUSADVENT CARE participant referral form"
          />
        </div>
      </section>

      <Script
        src="https://tally.so/widgets/embed.js"
        strategy="afterInteractive"
        onLoad={() => {
          if (typeof window !== 'undefined' && 'Tally' in window) {
            ;(window as unknown as { Tally: { loadEmbeds: () => void } }).Tally.loadEmbeds()
          }
        }}
      />
    </main>
  )
}
