<!-- pages/privacy-policy.vue -->
<template>
  <div class="min-h-screen" :style="{ backgroundColor: themeColors.secondaryTheme }">
    <!-- Header -->
    <header class="border-b sticky top-0 z-50 shadow-sm" :style="{ backgroundColor: themeColors.primaryWhite, borderColor: themeColors.secondaryTextTheme }">
      <div class="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
        <div class="flex items-center gap-3">
          <div class="w-8 h-8 rounded-full flex items-center justify-center" :style="{ backgroundColor: themeColors.terracotaTheme }">
            <svg viewBox="0 0 24 24" class="w-5 h-5 fill-current text-white">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
            </svg>
          </div>
          <span class="text-xl font-semibold tracking-wide" :style="{ color: themeColors.primaryTheme, fontFamily: 'Georgia, serif' }">Spiriment</span>
        </div>
        <span class="text-xs italic" :style="{ color: themeColors.secondaryTextTheme }">Privacy Policy</span>
      </div>
    </header>

    <main class="max-w-4xl mx-auto px-6 py-12">
      <!-- Title Section -->
      <div class="mb-12 text-center border-b pb-10" :style="{ borderColor: themeColors.secondaryTextTheme }">
        <p class="text-xs uppercase tracking-widest font-semibold mb-3" :style="{ color: themeColors.terracotaTheme }">Legal Document</p>
        <h1 class="text-4xl font-bold mb-4" :style="{ color: themeColors.primaryTheme, fontFamily: 'Georgia, serif' }">Privacy Policy</h1>
        <p class="text-sm italic" :style="{ color: themeColors.primaryTheme }">Last updated: February 16, 2026</p>
      </div>

      <!-- Table of Contents -->
      <div class="rounded-xl p-6 mb-12" :style="{ backgroundColor: themeColors.primaryWhite, borderColor: themeColors.terracotaTheme }" style="border-width: 1px;">
        <h2 class="text-lg font-bold mb-4 uppercase tracking-wider text-sm" :style="{ color: themeColors.primaryTheme }">Table of Contents</h2>
        <nav class="grid grid-cols-1 sm:grid-cols-2 gap-1">
          <a v-for="item in tocItems" :key="item.id"
             :href="'#' + item.id"
             class="text-sm py-1 px-2 rounded hover:bg-opacity-50 transition-colors duration-150 flex items-start gap-2"
             :style="{ color: themeColors.terracotaTheme, hoverColor: themeColors.primaryTheme }"
             @mouseenter="e => e.target.style.backgroundColor = themeColors.secondaryTheme"
             @mouseleave="e => e.target.style.backgroundColor = 'transparent'">
            <span class="font-mono text-xs mt-0.5" :style="{ color: themeColors.terracotaTheme }">{{ item.num }}.</span>
            <span>{{ item.title }}</span>
          </a>
        </nav>
      </div>

      <!-- Intro -->
      <div class="rounded-xl p-6 mb-8 shadow-sm" :style="{ backgroundColor: themeColors.primaryWhite, borderColor: themeColors.secondaryTextTheme }" style="border-width: 1px;">
        <p class="leading-relaxed mb-4" :style="{ color: themeColors.darkTheme }">
          This Privacy Notice for <strong :style="{ color: themeColors.primaryTheme }">Spiriment</strong> describes how and why we might access, collect, store, use, and/or share your personal information when you use our services, including when you:
        </p>
        <ul class="space-y-2 text-sm">
          <li v-for="(item, index) in introItems" :key="index" class="flex items-start gap-2" :style="{ color: themeColors.darkTheme }">
            <span class="mt-1" :style="{ color: themeColors.terracotaTheme }">▸</span>
            <span v-html="item"></span>
          </li>
        </ul>
        <div class="mt-5 p-4 rounded-r-lg" :style="{ backgroundColor: themeColors.secondaryTheme, borderLeftColor: themeColors.terracotaTheme }" style="border-left-width: 4px;">
          <p class="text-sm" :style="{ color: themeColors.darkTheme }">
            <strong :style="{ color: themeColors.primaryTheme }">Questions or concerns?</strong> If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at
            <a :href="'mailto:' + contactEmail" class="hover:underline" :style="{ color: themeColors.terracotaTheme }">{{ contactEmail }}</a>.
          </p>
        </div>
      </div>

      <!-- Summary -->
      <div class="rounded-xl p-6 mb-8 shadow-sm" :style="{ backgroundColor: themeColors.primaryWhite, borderColor: themeColors.secondaryTextTheme }" style="border-width: 1px;">
        <h2 class="text-2xl font-bold mb-5" :style="{ color: themeColors.primaryTheme, fontFamily: 'Georgia, serif' }">Summary of Key Points</h2>
        <div class="space-y-4">
          <div v-for="point in summaryPoints" :key="point.title" class="flex gap-4">
            <div class="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5" :style="{ backgroundColor: themeColors.secondaryTheme }">
              <span class="text-xs" :style="{ color: themeColors.terracotaTheme }">✦</span>
            </div>
            <div>
              <h3 class="font-semibold mb-1" :style="{ color: themeColors.primaryTheme }">{{ point.title }}</h3>
              <p class="text-sm leading-relaxed" :style="{ color: themeColors.darkTheme }">{{ point.text }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Sections -->
      <div class="space-y-6">
        <!-- Section 1 -->
        <section id="infocollect" class="rounded-xl p-6 shadow-sm scroll-mt-8" :style="{ backgroundColor: themeColors.primaryWhite, borderColor: themeColors.secondaryTextTheme }" style="border-width: 1px;">
          <h2 class="text-xl font-bold mb-4 flex items-center gap-2" :style="{ color: themeColors.primaryTheme }">
            <span class="w-7 h-7 rounded-full text-xs flex items-center justify-center font-mono" :style="{ backgroundColor: themeColors.terracotaTheme, color: themeColors.primaryWhite }">1</span>
            What Information Do We Collect?
          </h2>

          <div class="mb-4">
            <p class="text-sm leading-relaxed mb-3" :style="{ color: themeColors.darkTheme }">We collect personal information that you voluntarily provide to us when you register on the Services, express an interest in obtaining information about us or our products and Services, or when you contact us.</p>
            <p class="text-sm font-semibold mb-2" :style="{ color: themeColors.primaryTheme }">Personal information we collect may include:</p>
            <ul class="grid grid-cols-2 gap-1 text-sm">
              <li v-for="item in personalInfoItems" :key="item" class="flex items-center gap-2" :style="{ color: themeColors.darkTheme }">
                <span :style="{ color: themeColors.terracotaTheme }">•</span> {{ item }}
              </li>
            </ul>
          </div>

          <div class="mb-4">
            <p class="text-sm mb-3" :style="{ color: themeColors.darkTheme }">When necessary and with your consent, we process:</p>
            <ul class="space-y-1 text-sm">
              <li v-for="item in sensitiveInfoItems" :key="item" class="flex items-center gap-2" :style="{ color: themeColors.darkTheme }">
                <span :style="{ color: themeColors.terracotaTheme }">•</span> {{ item }}
              </li>
            </ul>
          </div>

          <div class="mb-4">
            <p class="text-sm leading-relaxed" :style="{ color: themeColors.darkTheme }">
              <span class="font-semibold" :style="{ color: themeColors.primaryTheme }">Payment Data.</span> We may collect data necessary to process your payment, such as your payment instrument number and security code. All payment data is handled and stored by <strong :style="{ color: themeColors.primaryTheme }">GooglePay</strong>, <strong :style="{ color: themeColors.primaryTheme }">ApplePay</strong>, and <strong :style="{ color: themeColors.primaryTheme }">Stripe</strong>.
            </p>
            <div class="flex flex-wrap gap-2 mt-3">
              <a v-for="link in paymentLinks" :key="link.name" :href="link.url" target="_blank" 
                 class="text-xs px-2 py-1 rounded border transition-colors duration-200"
                 :style="{ color: themeColors.terracotaTheme, borderColor: themeColors.terracotaTheme, backgroundColor: themeColors.secondaryTheme }"
                 @mouseenter="e => e.target.style.backgroundColor = themeColors.terracotaTheme, e.target.style.color = themeColors.primaryWhite"
                 @mouseleave="e => { e.target.style.backgroundColor = themeColors.secondaryTheme, e.target.style.color = themeColors.terracotaTheme }">
                {{ link.name }}
              </a>
            </div>
          </div>

          <div class="mb-4">
            <p class="text-sm mb-3" :style="{ color: themeColors.darkTheme }">If you use our application(s), we may also collect the following if you grant access or permission:</p>
            <ul class="space-y-2 text-sm">
              <li v-for="item in appDataItems" :key="item.title" class="flex items-start gap-2">
                <span class="mt-1" :style="{ color: themeColors.terracotaTheme }">•</span>
                <span :style="{ color: themeColors.darkTheme }"><em class="font-semibold not-italic" :style="{ color: themeColors.primaryTheme }">{{ item.title }}</em> {{ item.text }}</span>
              </li>
            </ul>
          </div>

          <div>
            <p class="text-sm" :style="{ color: themeColors.darkTheme }">
              <span class="font-semibold" :style="{ color: themeColors.primaryTheme }">Google API.</span> Our use of information received from Google APIs will adhere to the 
              <a href="https://developers.google.com/terms/api-services-user-data-policy" class="hover:underline" :style="{ color: themeColors.terracotaTheme }">Google API Services User Data Policy</a>, including the 
              <a href="https://developers.google.com/terms/api-services-user-data-policy#limited-use" class="hover:underline" :style="{ color: themeColors.terracotaTheme }">Limited Use requirements</a>.
            </p>
          </div>
        </section>

        <!-- Section 2 -->
        <section id="infouse" class="rounded-xl p-6 shadow-sm scroll-mt-8" :style="{ backgroundColor: themeColors.primaryWhite, borderColor: themeColors.secondaryTextTheme }" style="border-width: 1px;">
          <h2 class="text-xl font-bold mb-4 flex items-center gap-2" :style="{ color: themeColors.primaryTheme }">
            <span class="w-7 h-7 rounded-full text-xs flex items-center justify-center font-mono" :style="{ backgroundColor: themeColors.terracotaTheme, color: themeColors.primaryWhite }">2</span>
            How Do We Process Your Information?
          </h2>
          <p class="text-sm italic mb-4" :style="{ color: themeColors.primaryTheme }">We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law.</p>
          <ul class="space-y-3">
            <li v-for="purpose in processingPurposes" :key="purpose.title" class="flex items-start gap-3 text-sm" :style="{ color: themeColors.darkTheme }">
              <span class="mt-1 shrink-0" :style="{ color: themeColors.terracotaTheme }">▸</span>
              <span><strong :style="{ color: themeColors.primaryTheme }">{{ purpose.title }}</strong> {{ purpose.text }}</span>
            </li>
          </ul>
        </section>

        <!-- Section 3 -->
        <section id="legalbases" class="rounded-xl p-6 shadow-sm scroll-mt-8" :style="{ backgroundColor: themeColors.primaryWhite, borderColor: themeColors.secondaryTextTheme }" style="border-width: 1px;">
          <h2 class="text-xl font-bold mb-4 flex items-center gap-2" :style="{ color: themeColors.primaryTheme }">
            <span class="w-7 h-7 rounded-full text-xs flex items-center justify-center font-mono" :style="{ backgroundColor: themeColors.terracotaTheme, color: themeColors.primaryWhite }">3</span>
            What Legal Bases Do We Rely On?
          </h2>
          <p class="text-sm mb-5" :style="{ color: themeColors.darkTheme }">We only process your personal information when we have a valid legal reason to do so under applicable law.</p>

          <div class="space-y-4">
            <div class="p-4 rounded-lg border" :style="{ backgroundColor: themeColors.secondaryTheme, borderColor: themeColors.secondaryTextTheme }">
              <p class="text-xs uppercase tracking-widest font-semibold mb-3" :style="{ color: themeColors.terracotaTheme }">If you are located in the EU or UK</p>
              <ul class="space-y-2">
                <li v-for="basis in euLegalBases" :key="basis.title" class="flex items-start gap-3 text-sm" :style="{ color: themeColors.darkTheme }">
                  <span class="mt-1" :style="{ color: themeColors.terracotaTheme }">▸</span>
                  <span><strong :style="{ color: themeColors.primaryTheme }">{{ basis.title }}</strong> {{ basis.text }}</span>
                </li>
              </ul>
            </div>
            <div class="p-4 rounded-lg border" :style="{ backgroundColor: themeColors.secondaryTheme, borderColor: themeColors.secondaryTextTheme }">
              <p class="text-xs uppercase tracking-widest font-semibold mb-3" :style="{ color: themeColors.terracotaTheme }">If you are located in Canada</p>
              <p class="text-sm" :style="{ color: themeColors.darkTheme }">We may process your information if you have given us specific permission (express consent) or where your permission can be inferred (implied consent). You can withdraw your consent at any time.</p>
            </div>
          </div>
        </section>

        <!-- Section 4 -->
        <section id="whoshare" class="rounded-xl p-6 shadow-sm scroll-mt-8" :style="{ backgroundColor: themeColors.primaryWhite, borderColor: themeColors.secondaryTextTheme }" style="border-width: 1px;">
          <h2 class="text-xl font-bold mb-4 flex items-center gap-2" :style="{ color: themeColors.primaryTheme }">
            <span class="w-7 h-7 rounded-full text-xs flex items-center justify-center font-mono" :style="{ backgroundColor: themeColors.terracotaTheme, color: themeColors.primaryWhite }">4</span>
            When and With Whom Do We Share Your Personal Information?
          </h2>
          <ul class="space-y-3">
            <li v-for="item in shareItems" :key="item.title" class="flex items-start gap-3 text-sm" :style="{ color: themeColors.darkTheme }">
              <span class="mt-1" :style="{ color: themeColors.terracotaTheme }">▸</span>
              <span><strong :style="{ color: themeColors.primaryTheme }">{{ item.title }}</strong> {{ item.text }}</span>
            </li>
          </ul>
        </section>

        <!-- Section 5 -->
        <section id="ai" class="rounded-xl p-6 shadow-sm scroll-mt-8" :style="{ backgroundColor: themeColors.primaryWhite, borderColor: themeColors.secondaryTextTheme }" style="border-width: 1px;">
          <h2 class="text-xl font-bold mb-4 flex items-center gap-2" :style="{ color: themeColors.primaryTheme }">
            <span class="w-7 h-7 rounded-full text-xs flex items-center justify-center font-mono" :style="{ backgroundColor: themeColors.terracotaTheme, color: themeColors.primaryWhite }">5</span>
            Do We Offer Artificial Intelligence-Based Products?
          </h2>
          <p class="text-sm italic mb-4" :style="{ color: themeColors.primaryTheme }">We offer products, features, or tools powered by artificial intelligence, machine learning, or similar technologies.</p>
          <p class="text-sm mb-4" :style="{ color: themeColors.darkTheme }">We offer AI Products through third-party service providers ("AI Service Providers"), including <strong :style="{ color: themeColors.primaryTheme }">OpenAI</strong>. Your input, output, and personal information will be shared with and processed by these providers. You must not use the AI Products in any way that violates the terms or policies of any AI Service Provider.</p>
          <div class="rounded-lg p-4 border" :style="{ backgroundColor: themeColors.secondaryTheme, borderColor: themeColors.terracotaTheme }">
            <p class="text-sm font-semibold mb-1" :style="{ color: themeColors.primaryTheme }">Our AI Products are designed for:</p>
            <p class="text-sm" :style="{ color: themeColors.darkTheme }">Text analysis</p>
          </div>
        </section>

        <!-- Section 6 -->
        <section id="sociallogins" class="rounded-xl p-6 shadow-sm scroll-mt-8" :style="{ backgroundColor: themeColors.primaryWhite, borderColor: themeColors.secondaryTextTheme }" style="border-width: 1px;">
          <h2 class="text-xl font-bold mb-4 flex items-center gap-2" :style="{ color: themeColors.primaryTheme }">
            <span class="w-7 h-7 rounded-full text-xs flex items-center justify-center font-mono" :style="{ backgroundColor: themeColors.terracotaTheme, color: themeColors.primaryWhite }">6</span>
            How Do We Handle Your Social Logins?
          </h2>
          <p class="text-sm leading-relaxed mb-3" :style="{ color: themeColors.darkTheme }">Our Services offer you the ability to register and log in using your third-party social media account details (like your Facebook or X logins). The profile information we receive may include your name, email address, friends list, and profile picture, as well as other information you choose to make public.</p>
          <p class="text-sm leading-relaxed" :style="{ color: themeColors.darkTheme }">We will use the information we receive only for the purposes described in this Privacy Notice. We are not responsible for other uses of your personal information by your third-party social media provider. We recommend reviewing their privacy notice.</p>
        </section>

        <!-- Section 7 -->
        <section id="inforetain" class="rounded-xl p-6 shadow-sm scroll-mt-8" :style="{ backgroundColor: themeColors.primaryWhite, borderColor: themeColors.secondaryTextTheme }" style="border-width: 1px;">
          <h2 class="text-xl font-bold mb-4 flex items-center gap-2" :style="{ color: themeColors.primaryTheme }">
            <span class="w-7 h-7 rounded-full text-xs flex items-center justify-center font-mono" :style="{ backgroundColor: themeColors.terracotaTheme, color: themeColors.primaryWhite }">7</span>
            How Long Do We Keep Your Information?
          </h2>
          <p class="text-sm leading-relaxed mb-3" :style="{ color: themeColors.darkTheme }">We will only keep your personal information for as long as it is necessary for the purposes set out in this Privacy Notice, unless a longer retention period is required or permitted by law.</p>
          <div class="rounded-lg p-4 text-sm border" :style="{ backgroundColor: themeColors.secondaryTheme, borderColor: themeColors.terracotaTheme, color: themeColors.primaryTheme }">
            No purpose in this notice will require us keeping your personal information for longer than <strong>three (3) months</strong> past the termination of the user's account.
          </div>
          <p class="text-sm leading-relaxed mt-4" :style="{ color: themeColors.darkTheme }">When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize it, or securely store and isolate it from further processing until deletion is possible.</p>
        </section>

        <!-- Section 8 -->
        <section id="infosafe" class="rounded-xl p-6 shadow-sm scroll-mt-8" :style="{ backgroundColor: themeColors.primaryWhite, borderColor: themeColors.secondaryTextTheme }" style="border-width: 1px;">
          <h2 class="text-xl font-bold mb-4 flex items-center gap-2" :style="{ color: themeColors.primaryTheme }">
            <span class="w-7 h-7 rounded-full text-xs flex items-center justify-center font-mono" :style="{ backgroundColor: themeColors.terracotaTheme, color: themeColors.primaryWhite }">8</span>
            How Do We Keep Your Information Safe?
          </h2>
          <p class="text-sm leading-relaxed mb-3" :style="{ color: themeColors.darkTheme }">We have implemented appropriate and reasonable technical and organizational security measures designed to protect the security of any personal information we process.</p>
          <div class="rounded-lg p-4 text-sm italic border" :style="{ backgroundColor: themeColors.secondaryTheme, borderColor: themeColors.secondaryTextTheme, color: themeColors.darkTheme }">
            However, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure. Transmission of personal information to and from our Services is at your own risk. You should only access the Services within a secure environment.
          </div>
        </section>

        <!-- Section 9 -->
        <section id="privacyrights" class="rounded-xl p-6 shadow-sm scroll-mt-8" :style="{ backgroundColor: themeColors.primaryWhite, borderColor: themeColors.secondaryTextTheme }" style="border-width: 1px;">
          <h2 class="text-xl font-bold mb-4 flex items-center gap-2" :style="{ color: themeColors.primaryTheme }">
            <span class="w-7 h-7 rounded-full text-xs flex items-center justify-center font-mono" :style="{ backgroundColor: themeColors.terracotaTheme, color: themeColors.primaryWhite }">9</span>
            What Are Your Privacy Rights?
          </h2>
          <p class="text-sm leading-relaxed mb-4" :style="{ color: themeColors.darkTheme }">In some regions (like the EEA, UK, Switzerland, and Canada), you have certain rights under applicable data protection laws. These may include the right to: request access and obtain a copy of your personal information, request rectification or erasure, restrict the processing of your personal information, and if applicable, data portability.</p>

          <div class="mb-4">
            <h3 class="text-sm font-semibold uppercase tracking-wider mb-2 border-b pb-2" :style="{ color: themeColors.primaryTheme, borderColor: themeColors.secondaryTextTheme }">Account Information</h3>
            <p class="text-sm mb-3" :style="{ color: themeColors.darkTheme }">To review or change your account information or terminate your account, you can log in to your account settings and update your user account.</p>
            <p class="text-sm" :style="{ color: themeColors.darkTheme }">Upon your request to terminate your account, we will deactivate or delete your account and information from our active databases. However, we may retain some information to prevent fraud, troubleshoot problems, or comply with legal requirements.</p>
          </div>

          <p class="text-sm mt-4" :style="{ color: themeColors.darkTheme }">If you have questions about your privacy rights, email us at <a :href="'mailto:' + contactEmail" class="hover:underline" :style="{ color: themeColors.terracotaTheme }">{{ contactEmail }}</a>.</p>
        </section>

        <!-- Section 10 -->
        <section id="DNT" class="rounded-xl p-6 shadow-sm scroll-mt-8" :style="{ backgroundColor: themeColors.primaryWhite, borderColor: themeColors.secondaryTextTheme }" style="border-width: 1px;">
          <h2 class="text-xl font-bold mb-4 flex items-center gap-2" :style="{ color: themeColors.primaryTheme }">
            <span class="w-7 h-7 rounded-full text-xs flex items-center justify-center font-mono" :style="{ backgroundColor: themeColors.terracotaTheme, color: themeColors.primaryWhite }">10</span>
            Controls for Do-Not-Track Features
          </h2>
          <p class="text-sm leading-relaxed" :style="{ color: themeColors.darkTheme }">Most web browsers and some mobile operating systems include a Do-Not-Track (DNT) feature. At this stage, no uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals. California law requires us to let you know how we respond to web browser DNT signals — we do not respond to them at this time.</p>
        </section>

        <!-- Section 11 -->
        <section id="uslaws" class="rounded-xl p-6 shadow-sm scroll-mt-8" :style="{ backgroundColor: themeColors.primaryWhite, borderColor: themeColors.secondaryTextTheme }" style="border-width: 1px;">
          <h2 class="text-xl font-bold mb-4 flex items-center gap-2" :style="{ color: themeColors.primaryTheme }">
            <span class="w-7 h-7 rounded-full text-xs flex items-center justify-center font-mono" :style="{ backgroundColor: themeColors.terracotaTheme, color: themeColors.primaryWhite }">11</span>
            Do United States Residents Have Specific Privacy Rights?
          </h2>
          <p class="text-sm mb-5" :style="{ color: themeColors.darkTheme }">If you are a resident of California, Colorado, Connecticut, Delaware, Florida, Indiana, Iowa, Kentucky, Maryland, Minnesota, Montana, Nebraska, New Hampshire, New Jersey, Oregon, Rhode Island, Tennessee, Texas, Utah, or Virginia, you may have specific privacy rights.</p>

          <div class="mb-5">
            <h3 class="text-sm font-semibold uppercase tracking-wider mb-2 border-b pb-2" :style="{ color: themeColors.primaryTheme, borderColor: themeColors.secondaryTextTheme }">Categories of Personal Information We Collect</h3>
            <div class="overflow-x-auto">
              <table class="w-full text-sm border-collapse mt-2">
                <thead>
                  <tr :style="{ backgroundColor: themeColors.secondaryTheme }">
                    <th class="text-left p-3 border" :style="{ borderColor: themeColors.secondaryTextTheme, color: themeColors.primaryTheme }">Category</th>
                    <th class="text-left p-3 border" :style="{ borderColor: themeColors.secondaryTextTheme, color: themeColors.primaryTheme }">Examples</th>
                    <th class="text-center p-3 border" :style="{ borderColor: themeColors.secondaryTextTheme, color: themeColors.primaryTheme }">Collected</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(row, i) in categoryTable" :key="i" :style="{ backgroundColor: i % 2 === 0 ? themeColors.primaryWhite : themeColors.secondaryTheme }">
                    <td class="p-3 border" :style="{ borderColor: themeColors.secondaryTextTheme, color: themeColors.primaryTheme }">{{ row.category }}</td>
                    <td class="p-3 border" :style="{ borderColor: themeColors.secondaryTextTheme, color: themeColors.darkTheme }">{{ row.examples }}</td>
                    <td class="p-3 border text-center" :style="{ borderColor: themeColors.secondaryTextTheme }">
                      <span :class="row.collected === 'YES' ? 'font-semibold' : ''" :style="{ color: row.collected === 'YES' ? themeColors.primaryTheme : themeColors.secondaryTextTheme }">{{ row.collected }}</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div class="mb-5">
            <h3 class="text-sm font-semibold uppercase tracking-wider mb-2 border-b pb-2" :style="{ color: themeColors.primaryTheme, borderColor: themeColors.secondaryTextTheme }">Your Rights</h3>
            <ul class="space-y-2">
              <li v-for="right in usRights" :key="right" class="flex items-start gap-2 text-sm" :style="{ color: themeColors.darkTheme }">
                <span class="mt-1" :style="{ color: themeColors.terracotaTheme }">▸</span>
                <span v-html="right"></span>
              </li>
            </ul>
          </div>

          <div>
            <h3 class="text-sm font-semibold uppercase tracking-wider mb-2 border-b pb-2" :style="{ color: themeColors.primaryTheme, borderColor: themeColors.secondaryTextTheme }">How to Exercise Your Rights</h3>
            <p class="text-sm" :style="{ color: themeColors.darkTheme }">To exercise these rights, you can contact us by:</p>
            <ul class="mt-2 space-y-1 text-sm">
              <li v-for="(method, index) in exerciseMethods" :key="index" class="flex items-start gap-2" :style="{ color: themeColors.darkTheme }">
                <span class="ml-2">•</span>
                <span v-html="method"></span>
              </li>
            </ul>
          </div>
        </section>

        <!-- Section 12 -->
        <section id="policyupdates" class="rounded-xl p-6 shadow-sm scroll-mt-8" :style="{ backgroundColor: themeColors.primaryWhite, borderColor: themeColors.secondaryTextTheme }" style="border-width: 1px;">
          <h2 class="text-xl font-bold mb-4 flex items-center gap-2" :style="{ color: themeColors.primaryTheme }">
            <span class="w-7 h-7 rounded-full text-xs flex items-center justify-center font-mono" :style="{ backgroundColor: themeColors.terracotaTheme, color: themeColors.primaryWhite }">12</span>
            Do We Make Updates to This Notice?
          </h2>
          <p class="text-sm leading-relaxed" :style="{ color: themeColors.darkTheme }">We may update this Privacy Notice from time to time. The updated version will be indicated by an updated "Revised" date at the top. If we make material changes, we may notify you either by prominently posting a notice or by directly sending you a notification. We encourage you to review this Privacy Notice frequently.</p>
        </section>

        <!-- Section 13 -->
        <section id="contact" class="rounded-xl p-6 shadow-sm scroll-mt-8" :style="{ backgroundColor: themeColors.primaryWhite, borderColor: themeColors.secondaryTextTheme }" style="border-width: 1px;">
          <h2 class="text-xl font-bold mb-4 flex items-center gap-2" :style="{ color: themeColors.primaryTheme }">
            <span class="w-7 h-7 rounded-full text-xs flex items-center justify-center font-mono" :style="{ backgroundColor: themeColors.terracotaTheme, color: themeColors.primaryWhite }">13</span>
            How Can You Contact Us About This Notice?
          </h2>
          <p class="text-sm mb-5" :style="{ color: themeColors.darkTheme }">If you have questions or comments about this notice, you may email us or contact us by post:</p>
          <div class="rounded-xl p-5 border" :style="{ backgroundColor: themeColors.secondaryTheme, borderColor: themeColors.terracotaTheme }">
            <p class="font-bold mb-1" :style="{ color: themeColors.primaryTheme }">Spiriment</p>
            <p class="text-sm" :style="{ color: themeColors.darkTheme }">Kastelaan 409</p>
            <p class="text-sm" :style="{ color: themeColors.darkTheme }">Den Haag, Zuid Holland 2516BJ</p>
            <p class="text-sm" :style="{ color: themeColors.darkTheme }">Netherlands</p>
            <a :href="'mailto:' + contactEmail" class="text-sm mt-2 inline-block hover:underline" :style="{ color: themeColors.terracotaTheme }">{{ contactEmail }}</a>
          </div>
        </section>

        <!-- Section 14 -->
        <section id="request" class="rounded-xl p-6 shadow-sm scroll-mt-8" :style="{ backgroundColor: themeColors.primaryWhite, borderColor: themeColors.secondaryTextTheme }" style="border-width: 1px;">
          <h2 class="text-xl font-bold mb-4 flex items-center gap-2" :style="{ color: themeColors.primaryTheme }">
            <span class="w-7 h-7 rounded-full text-xs flex items-center justify-center font-mono" :style="{ backgroundColor: themeColors.terracotaTheme, color: themeColors.primaryWhite }">14</span>
            How Can You Review, Update, or Delete the Data We Collect From You?
          </h2>
          <p class="text-sm leading-relaxed mb-4" :style="{ color: themeColors.darkTheme }">You have the right to request access to the personal information we collect from you, details about how we have processed it, correct inaccuracies, or delete your personal information. You may also have the right to withdraw your consent to our processing of your personal information.</p>
          <nuxt-link 
          to="/contact"
             class="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-colors duration-200"
             :style="{ backgroundColor: themeColors.terracotaTheme, color: themeColors.primaryWhite }"
             @mouseenter="e => e.target.style.backgroundColor = themeColors.primaryTheme"
             @mouseleave="e => e.target.style.backgroundColor = themeColors.terracotaTheme">
            Submit a Request
            <span>→</span>
        </nuxt-link>
        </section>
      </div>

      <!-- Footer -->
      <footer class="mt-12 text-center text-xs pb-8" :style="{ color: themeColors.secondaryTextTheme }">
        <p>This Privacy Policy was created using Termly's Privacy Policy Generator.</p>
        <p class="mt-1">© 2026 Spiriment. All rights reserved.</p>
      </footer>
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
const contactEmail = 'spiriment@gmail.com'
const contactUrl = 'http://www.spiriment.com/contact'

// Table of contents items
const tocItems = [
  { num: '01', id: 'infocollect', title: 'What Information Do We Collect?' },
  { num: '02', id: 'infouse', title: 'How Do We Process Your Information?' },
  { num: '03', id: 'legalbases', title: 'What Legal Bases Do We Rely On?' },
  { num: '04', id: 'whoshare', title: 'When and With Whom Do We Share?' },
  { num: '05', id: 'ai', title: 'Do We Offer AI-Based Products?' },
  { num: '06', id: 'sociallogins', title: 'How Do We Handle Social Logins?' },
  { num: '07', id: 'inforetain', title: 'How Long Do We Keep Your Information?' },
  { num: '08', id: 'infosafe', title: 'How Do We Keep Your Information Safe?' },
  { num: '09', id: 'privacyrights', title: 'What Are Your Privacy Rights?' },
  { num: '10', id: 'DNT', title: 'Controls for Do-Not-Track Features' },
  { num: '11', id: 'uslaws', title: 'US Residents Specific Privacy Rights' },
  { num: '12', id: 'policyupdates', title: 'Do We Make Updates to This Notice?' },
  { num: '13', id: 'contact', title: 'How Can You Contact Us?' },
  { num: '14', id: 'request', title: 'How Can You Review, Update, or Delete?' },
]

// Intro items with HTML
const introItems = [
  'Visit our website at <a href="https://spiriment.com" class="hover:underline" style="color: #5E3128;">spiriment.com</a> or any website of ours that links to this Privacy Notice',
  'Download and use our mobile application (Spiriment), or any other application of ours that links to this Privacy Notice',
  'Use Spiriment App — a faith-based mentorship and spiritual growth application that offers personalized mentor–mentee matching, guided Bible study, spiritual progress tracking, accountability tools, and flexible 1-on-1 or group sessions.',
  'Engage with us in other related ways, including any marketing or events'
]

// Summary points
const summaryPoints = [
  {
    title: 'What personal information do we process?',
    text: 'When you visit, use, or navigate our Services, we may process personal information depending on how you interact with us and the choices you make.'
  },
  {
    title: 'Do we process any sensitive personal information?',
    text: 'Some information may be considered "special" or "sensitive," such as your religious beliefs. We may process sensitive personal information when necessary with your consent or as otherwise permitted by applicable law.'
  },
  {
    title: 'Do we collect any information from third parties?',
    text: 'We do not collect any information from third parties.'
  },
  {
    title: 'How do we process your information?',
    text: 'We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law.'
  },
  {
    title: 'How do we keep your information safe?',
    text: 'We have adequate organizational and technical processes in place to protect your personal information, though no electronic transmission can be guaranteed 100% secure.'
  },
  {
    title: 'What are your rights?',
    text: 'Depending on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your personal information.'
  }
]

// Personal information items
const personalInfoItems = [
  'Names', 'Email addresses', 'Contact or authentication data',
  'Profile picture', 'Profile video', 'Contact preferences'
]

// Sensitive information items
const sensitiveInfoItems = [
  'Information revealing religious or philosophical beliefs',
  'Data about a person\'s sex life or sexual orientation'
]

// Payment links
const paymentLinks = [
  { name: 'Google Pay Privacy', url: 'https://pay.google.com/about/policy/' },
  { name: 'Apple Pay Privacy', url: 'https://www.apple.com/legal/privacy/data/en/apple-pay/' },
  { name: 'Stripe Privacy', url: 'https://stripe.com/privacy' }
]

// App data items
const appDataItems = [
  { title: 'Mobile Device Access.', text: 'We may request access to your device\'s camera, microphone, storage, and other features. You can change permissions in your device\'s settings.' },
  { title: 'Push Notifications.', text: 'We may request to send you push notifications. You may turn them off in your device\'s settings.' }
]

// Processing purposes
const processingPurposes = [
  { title: 'To facilitate account creation and authentication.', text: 'We may process your information so you can create and log in to your account, as well as keep your account in working order.' },
  { title: 'To deliver and facilitate delivery of services.', text: 'We may process your information to provide you with the requested service.' },
  { title: 'To respond to user inquiries/offer support.', text: 'We may process your information to respond to your inquiries and solve any potential issues.' },
  { title: 'To send administrative information.', text: 'We may process your information to send you details about our products and services, changes to our terms and policies.' },
  { title: 'To fulfill and manage your orders.', text: 'We may process your information to fulfill and manage your orders, payments, returns, and exchanges.' },
  { title: 'To enable user-to-user communications.', text: 'We may process your information if you choose to use any of our offerings that allow for communication with another user.' },
  { title: 'To save or protect an individual\'s vital interest.', text: 'We may process your information when necessary to save or protect an individual\'s vital interest, such as to prevent harm.' },
]

// EU legal bases
const euLegalBases = [
  { title: 'Consent.', text: 'We may process your information if you have given us permission to use your personal information for a specific purpose. You can withdraw your consent at any time.' },
  { title: 'Performance of a Contract.', text: 'We may process your personal information when we believe it is necessary to fulfill our contractual obligations to you.' },
  { title: 'Legal Obligations.', text: 'We may process your information where we believe it is necessary for compliance with our legal obligations.' },
  { title: 'Vital Interests.', text: 'We may process your information where we believe it is necessary to protect your vital interests or the vital interests of a third party.' },
]

// Share items
const shareItems = [
  { title: 'Business Transfers.', text: 'We may share or transfer your information in connection with any merger, sale of company assets, financing, or acquisition of all or a portion of our business.' },
  { title: 'Other Users.', text: 'When you share personal information or interact with public areas of the Services, such personal information may be viewed by all users and may be publicly available outside the Services.' },
  { title: 'Offer Wall.', text: 'Our application(s) may display a third-party hosted offer wall. When you click on an offer wall, you will be brought to an external website and will leave our application(s).' }
]

// Category table
const categoryTable = [
  { category: 'A. Identifiers', examples: 'Contact details, such as real name, alias, postal address, telephone number, online identifier, email address, and account name', collected: 'YES' },
  { category: 'B. Personal information (California Customer Records statute)', examples: 'Name, contact information, education, employment, employment history, and financial information', collected: 'YES' },
  { category: 'C. Protected classification characteristics', examples: 'Gender, age, date of birth, race and ethnicity, national origin, marital status, and other demographic data', collected: 'YES' },
  { category: 'D. Commercial information', examples: 'Transaction information, purchase history, financial details, and payment information', collected: 'NO' },
  { category: 'E. Biometric information', examples: 'Fingerprints and voiceprints', collected: 'NO' },
  { category: 'F. Internet or other network activity', examples: 'Browsing history, search history, online behavior, interest data, and interactions with websites and advertisements', collected: 'NO' },
  { category: 'G. Geolocation data', examples: 'Device location', collected: 'NO' },
  { category: 'H. Audio, electronic, sensory information', examples: 'Images and audio, video or call recordings created in connection with our business activities', collected: 'YES' },
  { category: 'I. Professional or employment-related information', examples: 'Business contact details, job title, work history, and professional qualifications', collected: 'NO' },
  { category: 'J. Education Information', examples: 'Student records and directory information', collected: 'NO' },
  { category: 'K. Inferences drawn from collected personal information', examples: 'Inferences drawn from any of the collected personal information to create a profile or summary about an individual', collected: 'YES' },
  { category: 'L. Sensitive personal Information', examples: 'Religious or philosophical beliefs', collected: 'YES' },
]

// US rights
const usRights = [
  '<strong>Right to know</strong> whether or not we are processing your personal data',
  '<strong>Right to access</strong> your personal data',
  '<strong>Right to correct</strong> inaccuracies in your personal data',
  '<strong>Right to request</strong> the deletion of your personal data',
  '<strong>Right to obtain a copy</strong> of the personal data you previously shared with us',
  '<strong>Right to non-discrimination</strong> for exercising your rights',
  '<strong>Right to opt out</strong> of the processing of your personal data if it is used for targeted advertising, the sale of personal data, or profiling',
]

// Exercise methods with HTML
const exerciseMethods = [
  'Visiting <a href="http://www.spiriment.com/contact" class="hover:underline" style="color: #5E3128;">http://www.spiriment.com/contact</a>',
  'Emailing us at <a href="mailto:spiriment@gmail.com" class="hover:underline" style="color: #5E3128;">spiriment@gmail.com</a>',
  'Visiting <a href="http://www.spiriment.com" class="hover:underline" style="color: #5E3128;">http://www.spiriment.com</a>'
]

// Add smooth scrolling
useHead({
  title: 'Privacy Policy - Spiriment',
  meta: [
    { name: 'description', content: 'Privacy Policy for Spiriment - Faith-based mentorship and spiritual growth application' }
  ]
})
</script>

<style scoped>
html {
  scroll-behavior: smooth;
}
</style>