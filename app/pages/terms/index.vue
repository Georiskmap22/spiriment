<!-- pages/subscription-terms.vue -->
<template>
  <div class="min-h-screen" :style="{ backgroundColor: themeColors.secondaryTheme }">
    <!-- Header -->
    <header class="border-b sticky top-0 z-50 shadow-sm" :style="{ backgroundColor: themeColors.primaryWhite, borderColor: themeColors.secondaryTextTheme }">
      <div class="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
        <NuxtLink to="/" class="flex items-center gap-3">
          <div class="w-8 h-8 rounded-full flex items-center justify-center" :style="{ backgroundColor: themeColors.terracotaTheme }">
            <svg viewBox="0 0 24 24" class="w-5 h-5 fill-current text-white">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
            </svg>
          </div>
          <span class="text-xl font-semibold tracking-wide" :style="{ color: themeColors.primaryTheme, fontFamily: 'Georgia, serif' }">Spiriment</span>
        </NuxtLink>
        <span class="text-xs italic" :style="{ color: themeColors.secondaryTextTheme }">Subscription Terms</span>
      </div>
    </header>

    <main class="max-w-4xl mx-auto px-6 py-12">
      <!-- Title Section -->
      <div class="mb-12 text-center border-b pb-10" :style="{ borderColor: themeColors.secondaryTextTheme }">
        <p class="text-xs uppercase tracking-widest font-semibold mb-3" :style="{ color: themeColors.terracotaTheme }">Legal Agreement</p>
        <h1 class="text-4xl font-bold mb-4" :style="{ color: themeColors.primaryTheme, fontFamily: 'Georgia, serif' }">Subscription Terms & Conditions</h1>
        <p class="text-sm italic" :style="{ color: themeColors.secondaryTextTheme }">Last Updated: February 17, 2026</p>
      </div>

      <!-- Important Notice -->
      <div class="rounded-xl p-6 mb-8 shadow-sm" :style="{ backgroundColor: themeColors.primaryWhite, borderColor: themeColors.terracotaTheme }" style="border-width: 1px;">
        <div class="flex items-start gap-4">
          <div class="w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center" :style="{ backgroundColor: themeColors.secondaryTheme }">
            <span class="text-lg" :style="{ color: themeColors.terracotaTheme }">⚠️</span>
          </div>
          <div>
            <h2 class="text-lg font-bold mb-2" :style="{ color: themeColors.primaryTheme }">Please Read Carefully</h2>
            <p class="text-sm leading-relaxed" :style="{ color: themeColors.darkTheme }">
              Please review these Subscription Terms carefully before purchasing a Spiriment subscription. 
              If you are unsure how to cancel a subscription or free trial, please visit the 
              <a href="https://support.apple.com/" target="_blank" class="hover:underline" :style="{ color: themeColors.terracotaTheme }">Apple Support website</a> 
              or <a href="https://support.google.com/googleplay" target="_blank" class="hover:underline" :style="{ color: themeColors.terracotaTheme }">Google Play Help page</a>, 
              depending on where you purchased your subscription.
            </p>
            <div class="mt-3 p-3 rounded-lg" :style="{ backgroundColor: themeColors.secondaryTheme, borderLeftColor: themeColors.terracotaTheme }" style="border-left-width: 4px;">
              <p class="text-sm font-semibold" :style="{ color: themeColors.primaryTheme }">
                ⚡ Important: Deleting the Spiriment app does not cancel your subscription or free trial.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Table of Contents -->
      <div class="rounded-xl p-6 mb-12" :style="{ backgroundColor: themeColors.primaryWhite, borderColor: themeColors.terracotaTheme }" style="border-width: 1px;">
        <h2 class="text-lg font-bold mb-4 uppercase tracking-wider text-sm" :style="{ color: themeColors.primaryTheme }">Table of Contents</h2>
        <nav class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1">
          <a v-for="item in tocItems" :key="item.id"
             :href="'#' + item.id"
             class="text-sm py-1 px-2 rounded hover:bg-opacity-50 transition-colors duration-150 flex items-start gap-2"
             :style="{ color: themeColors.terracotaTheme }"
             @mouseenter="e => e.target.style.backgroundColor = themeColors.secondaryTheme"
             @mouseleave="e => e.target.style.backgroundColor = 'transparent'">
            <span class="font-mono text-xs mt-0.5" :style="{ color: themeColors.terracotaTheme }">{{ item.num }}.</span>
            <span>{{ item.title }}</span>
          </a>
        </nav>
      </div>

      <!-- Sections -->
      <div class="space-y-6">
        <!-- Section 1: Free Trial -->
        <section id="free-trial" class="rounded-xl p-6 shadow-sm scroll-mt-8" :style="{ backgroundColor: themeColors.primaryWhite, borderColor: themeColors.secondaryTextTheme }" style="border-width: 1px;">
          <h2 class="text-xl font-bold mb-4 flex items-center gap-2" :style="{ color: themeColors.primaryTheme }">
            <span class="w-7 h-7 rounded-full text-xs flex items-center justify-center font-mono" :style="{ backgroundColor: themeColors.terracotaTheme, color: themeColors.primaryWhite }">1</span>
            Free Trial (14 Days)
          </h2>
          <p class="text-sm mb-3" :style="{ color: themeColors.darkTheme }">Spiriment may offer a 7-day free trial to eligible new users.</p>
          <ul class="space-y-2 mb-4">
            <li v-for="(item, index) in freeTrialItems" :key="index" class="flex items-start gap-2 text-sm" :style="{ color: themeColors.darkTheme }">
              <span class="mt-1" :style="{ color: themeColors.terracotaTheme }">•</span>
              <span>{{ item }}</span>
            </li>
          </ul>
          <div class="p-4 rounded-lg" :style="{ backgroundColor: themeColors.secondaryTheme }">
            <p class="text-sm font-semibold" :style="{ color: themeColors.primaryTheme }">To avoid being charged, you must cancel through your app store account settings before the trial expires.</p>
          </div>
        </section>

        <!-- Section 2: Subscription & Automatic Renewal -->
        <section id="subscription-renewal" class="rounded-xl p-6 shadow-sm scroll-mt-8" :style="{ backgroundColor: themeColors.primaryWhite, borderColor: themeColors.secondaryTextTheme }" style="border-width: 1px;">
          <h2 class="text-xl font-bold mb-4 flex items-center gap-2" :style="{ color: themeColors.primaryTheme }">
            <span class="w-7 h-7 rounded-full text-xs flex items-center justify-center font-mono" :style="{ backgroundColor: themeColors.terracotaTheme, color: themeColors.primaryWhite }">2</span>
            Subscription & Automatic Renewal
          </h2>
          <ul class="space-y-3">
            <li v-for="(item, index) in renewalItems" :key="index" class="flex items-start gap-2 text-sm" :style="{ color: themeColors.darkTheme }">
              <span class="mt-1" :style="{ color: themeColors.terracotaTheme }">•</span>
              <span>{{ item }}</span>
            </li>
          </ul>
        </section>

        <!-- Section 3: Payment Method -->
        <section id="payment" class="rounded-xl p-6 shadow-sm scroll-mt-8" :style="{ backgroundColor: themeColors.primaryWhite, borderColor: themeColors.secondaryTextTheme }" style="border-width: 1px;">
          <h2 class="text-xl font-bold mb-4 flex items-center gap-2" :style="{ color: themeColors.primaryTheme }">
            <span class="w-7 h-7 rounded-full text-xs flex items-center justify-center font-mono" :style="{ backgroundColor: themeColors.terracotaTheme, color: themeColors.primaryWhite }">3</span>
            Payment Method
          </h2>
          <p class="text-sm mb-3" :style="{ color: themeColors.darkTheme }">Payment is processed through:</p>
          <div class="flex flex-wrap gap-3 mb-4">
            <div class="px-4 py-2 rounded-full text-sm flex items-center gap-2" :style="{ backgroundColor: themeColors.secondaryTheme, color: themeColors.primaryTheme }">
              <IconsAppleIcon color="black" class="w-4 h-4"/>
              Apple App Store (iOS)
            </div>
            <div class="px-4 py-2 rounded-full text-sm flex items-center gap-2" :style="{ backgroundColor: themeColors.secondaryTheme, color: themeColors.primaryTheme }">
              <IconsPlayStoreIcon color="black" class="w-4 h-4" />
              Google Play Store (Android)
            </div>
          </div>
          <ul class="space-y-2">
            <li class="flex items-start gap-2 text-sm" :style="{ color: themeColors.darkTheme }">
              <span class="mt-1" :style="{ color: themeColors.terracotaTheme }">•</span>
              <span>Payment will be charged to the payment method associated with your Apple ID or Google Play account at confirmation of purchase.</span>
            </li>
            <li class="flex items-start gap-2 text-sm" :style="{ color: themeColors.darkTheme }">
              <span class="mt-1" :style="{ color: themeColors.terracotaTheme }">•</span>
              <span><strong :style="{ color: themeColors.primaryTheme }">Spiriment does not store full payment details.</strong></span>
            </li>
          </ul>
        </section>

        <!-- Section 4: Cancellation -->
        <section id="cancellation" class="rounded-xl p-6 shadow-sm scroll-mt-8" :style="{ backgroundColor: themeColors.primaryWhite, borderColor: themeColors.secondaryTextTheme }" style="border-width: 1px;">
          <h2 class="text-xl font-bold mb-4 flex items-center gap-2" :style="{ color: themeColors.primaryTheme }">
            <span class="w-7 h-7 rounded-full text-xs flex items-center justify-center font-mono" :style="{ backgroundColor: themeColors.terracotaTheme, color: themeColors.primaryWhite }">4</span>
            Cancellation
          </h2>
          <p class="text-sm mb-3" :style="{ color: themeColors.darkTheme }">You may cancel your subscription at any time by turning off auto-renewal in your app store account settings.</p>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <!-- Apple -->
            <div class="p-4 rounded-lg" :style="{ backgroundColor: themeColors.secondaryTheme }">
              <h3 class="font-semibold mb-2 flex items-center gap-2" :style="{ color: themeColors.primaryTheme }">
                <span>
                  <IconsAppleIcon color="black" class="w-4 h-4"/>
                </span> 
                Apple App Store
              </h3>
              <ul class="space-y-1 text-sm" :style="{ color: themeColors.darkTheme }">
                <li>• Cancel through your Apple ID account settings</li>
                <li>• Cancel at least 24 hours before the end of trial/period</li>
                <li>
                  <a href="https://support.apple.com/" target="_blank" class="hover:underline" :style="{ color: themeColors.terracotaTheme }">
                    Learn more on Apple's support page →
                  </a>
                </li>
              </ul>
            </div>
            
            <!-- Google -->
            <div class="p-4 rounded-lg" :style="{ backgroundColor: themeColors.secondaryTheme }">
              <h3 class="font-semibold mb-2 flex items-center gap-2" :style="{ color: themeColors.primaryTheme }">
                <span>
                  <IconsPlayStoreIcon color="black" class="w-4 h-4" />
                </span> 
                Google Play Store
              </h3>
              <ul class="space-y-1 text-sm" :style="{ color: themeColors.darkTheme }">
                <li>• Cancel through your Google Play account settings</li>
                <li>• Cancel at least 24 hours before the end of trial/period</li>
                <li>
                  <a href="https://support.google.com/googleplay" target="_blank" class="hover:underline" :style="{ color: themeColors.terracotaTheme }">
                    Learn more on Google Play's support page →
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div class="space-y-2">
            <p class="text-sm flex items-start gap-2" :style="{ color: themeColors.darkTheme }">
              <span class="mt-1" :style="{ color: themeColors.terracotaTheme }">•</span>
              <span>Canceling your subscription disables automatic renewal but you will retain access to premium features until the end of the current paid period.</span>
            </p>
            <p class="text-sm flex items-start gap-2 font-semibold" :style="{ color: themeColors.primaryTheme }">
              <span class="mt-1" :style="{ color: themeColors.terracotaTheme }">•</span>
              <span>Deleting the app does not cancel your subscription. You are solely responsible for managing your subscriptions.</span>
            </p>
          </div>
        </section>

        <!-- Section 5: Refund Policy -->
        <section id="refund" class="rounded-xl p-6 shadow-sm scroll-mt-8" :style="{ backgroundColor: themeColors.primaryWhite, borderColor: themeColors.secondaryTextTheme }" style="border-width: 1px;">
          <h2 class="text-xl font-bold mb-4 flex items-center gap-2" :style="{ color: themeColors.primaryTheme }">
            <span class="w-7 h-7 rounded-full text-xs flex items-center justify-center font-mono" :style="{ backgroundColor: themeColors.terracotaTheme, color: themeColors.primaryWhite }">5</span>
            Refund Policy
          </h2>
          <p class="text-sm mb-4" :style="{ color: themeColors.darkTheme }">All purchases are processed by Apple App Store or Google Play Store. Spiriment does not process refunds directly and cannot override refund decisions made by the app stores.</p>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <!-- Apple Refund -->
            <div class="p-4 rounded-lg border" :style="{ borderColor: themeColors.secondaryTextTheme }">
              <h3 class="font-semibold mb-2 flex items-center gap-2" :style="{ color: themeColors.primaryTheme }">
                <span>
                  <IconsAppleIcon color="black" class="w-4 h-4"/>
                </span> 
                Apple App Store
              </h3>
              <p class="text-xs mb-2" :style="{ color: themeColors.darkTheme }">Request refunds directly from Apple:</p>
              <a href="https://reportaproblem.apple.com" target="_blank" 
                 class="inline-block text-sm px-3 py-1.5 rounded transition-colors duration-200"
                 :style="{ backgroundColor: themeColors.terracotaTheme, color: themeColors.primaryWhite }"
                 @mouseenter="e => e.target.style.backgroundColor = themeColors.primaryTheme"
                 @mouseleave="e => e.target.style.backgroundColor = themeColors.terracotaTheme">
                reportaproblem.apple.com
              </a>
            </div>
            
            <!-- Google Refund -->
            <div class="p-4 rounded-lg border" :style="{ borderColor: themeColors.secondaryTextTheme }">
              <h3 class="font-semibold mb-2 flex items-center gap-2" :style="{ color: themeColors.primaryTheme }">
                <span>
                  <IconsPlayStoreIcon color="black" class="w-4 h-4" />
                </span> 
                Google Play Store
              </h3>
              <p class="text-xs mb-2" :style="{ color: themeColors.darkTheme }">Request refunds through your Google Play account:</p>
              <a href="https://play.google.com/store/account" target="_blank" 
                 class="inline-block text-sm px-3 py-1.5 rounded transition-colors duration-200"
                 :style="{ backgroundColor: themeColors.terracotaTheme, color: themeColors.primaryWhite }"
                 @mouseenter="e => e.target.style.backgroundColor = themeColors.primaryTheme"
                 @mouseleave="e => e.target.style.backgroundColor = themeColors.terracotaTheme">
                play.google.com/store/account
              </a>
            </div>
          </div>
          
          <div class="p-4 rounded-lg" :style="{ backgroundColor: themeColors.secondaryTheme }">
            <p class="text-sm font-semibold" :style="{ color: themeColors.primaryTheme }">
              ⚖️ Except where required by applicable law, subscription fees are non-refundable once a billing period has begun.
            </p>
          </div>
        </section>

        <!-- Section 6: Price Changes -->
        <section id="price-changes" class="rounded-xl p-6 shadow-sm scroll-mt-8" :style="{ backgroundColor: themeColors.primaryWhite, borderColor: themeColors.secondaryTextTheme }" style="border-width: 1px;">
          <h2 class="text-xl font-bold mb-4 flex items-center gap-2" :style="{ color: themeColors.primaryTheme }">
            <span class="w-7 h-7 rounded-full text-xs flex items-center justify-center font-mono" :style="{ backgroundColor: themeColors.terracotaTheme, color: themeColors.primaryWhite }">6</span>
            Price Changes
          </h2>
          <ul class="space-y-3">
            <li v-for="(item, index) in priceChangeItems" :key="index" class="flex items-start gap-2 text-sm" :style="{ color: themeColors.darkTheme }">
              <span class="mt-1" :style="{ color: themeColors.terracotaTheme }">•</span>
              <span>{{ item }}</span>
            </li>
          </ul>
        </section>

        <!-- Section 7: Promotional Offers -->
        <section id="promotions" class="rounded-xl p-6 shadow-sm scroll-mt-8" :style="{ backgroundColor: themeColors.primaryWhite, borderColor: themeColors.secondaryTextTheme }" style="border-width: 1px;">
          <h2 class="text-xl font-bold mb-4 flex items-center gap-2" :style="{ color: themeColors.primaryTheme }">
            <span class="w-7 h-7 rounded-full text-xs flex items-center justify-center font-mono" :style="{ backgroundColor: themeColors.terracotaTheme, color: themeColors.primaryWhite }">7</span>
            Promotional Offers
          </h2>
          <p class="text-sm mb-3" :style="{ color: themeColors.darkTheme }">Spiriment may offer promotional pricing, discounts, or extended trial periods from time to time.</p>
          <ul class="space-y-2">
            <li v-for="(item, index) in promotionItems" :key="index" class="flex items-start gap-2 text-sm" :style="{ color: themeColors.darkTheme }">
              <span class="mt-1" :style="{ color: themeColors.terracotaTheme }">•</span>
              <span>{{ item }}</span>
            </li>
          </ul>
        </section>

        <!-- Section 8: EU Consumer Rights -->
        <section id="eu-rights" class="rounded-xl p-6 shadow-sm scroll-mt-8" :style="{ backgroundColor: themeColors.primaryWhite, borderColor: themeColors.secondaryTextTheme }" style="border-width: 1px;">
          <h2 class="text-xl font-bold mb-4 flex items-center gap-2" :style="{ color: themeColors.primaryTheme }">
            <span class="w-7 h-7 rounded-full text-xs flex items-center justify-center font-mono" :style="{ backgroundColor: themeColors.terracotaTheme, color: themeColors.primaryWhite }">8</span>
            EU Consumer Rights
          </h2>
          <div class="p-4 rounded-lg" :style="{ backgroundColor: themeColors.secondaryTheme }">
            <p class="text-sm leading-relaxed" :style="{ color: themeColors.darkTheme }">
              If you reside in the European Union, you may have statutory rights regarding digital content purchases. By starting your subscription and accessing Spiriment's digital content immediately, you expressly consent to immediate performance of the service and acknowledge that you may lose your right of withdrawal once access begins, except where otherwise required by law.
            </p>
          </div>
        </section>

        <!-- Section 9: Contact Information -->
        <section id="contact" class="rounded-xl p-6 shadow-sm scroll-mt-8" :style="{ backgroundColor: themeColors.primaryWhite, borderColor: themeColors.secondaryTextTheme }" style="border-width: 1px;">
          <h2 class="text-xl font-bold mb-4 flex items-center gap-2" :style="{ color: themeColors.primaryTheme }">
            <span class="w-7 h-7 rounded-full text-xs flex items-center justify-center font-mono" :style="{ backgroundColor: themeColors.terracotaTheme, color: themeColors.primaryWhite }">9</span>
            Contact Information
          </h2>
          <p class="text-sm mb-4" :style="{ color: themeColors.darkTheme }">If you have questions regarding these Subscription Terms, please contact:</p>
          <div class="rounded-xl p-5 border inline-block min-w-[300px]" :style="{ backgroundColor: themeColors.secondaryTheme, borderColor: themeColors.terracotaTheme }">
            <div class="flex items-center gap-3 mb-2">
              <div class="w-10 h-10 rounded-full flex items-center justify-center" :style="{ backgroundColor: themeColors.terracotaTheme }">
                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </div>
              <div>
                <p class="text-sm font-semibold" :style="{ color: themeColors.primaryTheme }">Email Support</p>
                <a :href="'mailto:' + contactEmail" class="text-sm hover:underline" :style="{ color: themeColors.terracotaTheme }">{{ contactEmail }}</a>
              </div>
            </div>
          </div>
        </section>
      </div>

      <!-- Footer Navigation -->
      <div class="mt-12 flex flex-col sm:flex-row justify-between items-center gap-4 p-6 rounded-xl" :style="{ backgroundColor: themeColors.primaryWhite }">
        <NuxtLink to="/privacy" class="text-sm hover:underline flex items-center gap-1" :style="{ color: themeColors.terracotaTheme }">
          <span>←</span> View Privacy Policy
        </NuxtLink>
        <p class="text-xs" :style="{ color: themeColors.secondaryTextTheme }">© 2026 Spiriment. All rights reserved.</p>
        <button @click="scrollToTop" class="cursor-pointer text-sm hover:underline flex items-center gap-1" :style="{ color: themeColors.terracotaTheme }">
          <span>↑</span> Back to Top
        </button>
      </div>
    </main>
  </div>
</template>

<script setup>
// Theme colors based on the provided theme
const themeColors = {
  primaryTheme: '#1D2F21',
  darkTheme: '#162419',
  secondaryTheme: '#FFFAEC',
  secondaryTextTheme: '#C0CBC3',
  black: '#000000',
  primaryWhite: '#EBEEEC',
  terracotaTheme: '#5E3128'
}

// Contact information
const contactEmail = 'support@spiriment.com'

// Table of contents items
const tocItems = [
  { num: '01', id: 'free-trial', title: 'Free Trial (7 Days)' },
  { num: '02', id: 'subscription-renewal', title: 'Subscription & Renewal' },
  { num: '03', id: 'payment', title: 'Payment Method' },
  { num: '04', id: 'cancellation', title: 'Cancellation' },
  { num: '05', id: 'refund', title: 'Refund Policy' },
  { num: '06', id: 'price-changes', title: 'Price Changes' },
  { num: '07', id: 'promotions', title: 'Promotional Offers' },
  { num: '08', id: 'eu-rights', title: 'EU Consumer Rights' },
  { num: '09', id: 'contact', title: 'Contact Information' }
]

// Free trial items
const freeTrialItems = [
  'The free trial is available once per account unless otherwise stated.',
  'You will not be charged during the 7-day trial period.',
  'Unless cancelled at least 24 hours before the trial ends, your subscription will automatically convert into a paid subscription at the price displayed at the time of purchase.',
  'By starting a free trial, you authorize the applicable app store provider to charge your selected payment method after the trial period ends unless cancelled.'
]

// Renewal items
const renewalItems = [
  'Subscriptions automatically renew at the end of each billing period (weekly, monthly, 6-month, yearly, or as selected at purchase) unless cancelled.',
  'Your account will be charged for renewal within 24 hours prior to the end of the current billing period.',
  'You authorize the applicable app store provider to charge your selected payment method for recurring subscription fees.',
  'Subscriptions continue until cancelled by you.'
]

// Price change items
const priceChangeItems = [
  'To the maximum extent permitted by applicable law, Spiriment may modify subscription pricing.',
  'If pricing changes, you will be notified by the applicable app store provider.',
  'New pricing will apply to future billing cycles only.',
  'If you do not agree to the new price, you must cancel your subscription before the next renewal date.',
  'Continued use after renewal constitutes acceptance of the new pricing.'
]

// Promotion items
const promotionItems = [
  'Apply only for the stated duration.',
  'May be limited to new subscribers.',
  'Cannot be combined unless expressly stated.'
]

// Scroll to top function
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

// Set page metadata
useHead({
  title: 'Subscription Terms - Spiriment',
  meta: [
    { name: 'description', content: 'Subscription Terms and Conditions for Spiriment - Faith-based mentorship and spiritual growth application' }
  ]
})
</script>

<style scoped>
html {
  scroll-behavior: smooth;
}
</style>