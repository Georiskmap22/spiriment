// ─────────────────────────────────────────────────────────────
//  Spiriment FAQ Database
//  Each category has: id, label, icon (SVG inner path string), faqs[]
//  Every faq item has: question, answer
// ─────────────────────────────────────────────────────────────

export const faqCategories = [
  {
    id: 'general',
    label: 'General & Getting Started',
    icon: `<circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.8"/>
           <path d="M12 16v-4M12 8h.01" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>`,
    faqs: [
      {
        question: 'Is Spiriment free to use?',
        answer:
          'Yes! Core Bible reading—including unlimited access to all translations and languages—is always completely free. We believe reading the Word should be accessible to everyone. We offer optional paid subscription tiers (Basic, Pro, and Premium) for users who want discipline tracking, advanced organisation tools, AI insights, and mentorship features.',
      },
      {
        question: 'Does Spiriment offer a free trial for the paid features?',
        answer:
          'Yes, all new users get a 2-week free trial of our Premium tier. During this time, you have full access to all features—including advanced AI insights and mentorship—without needing to enter a credit card. At the end of the trial, your account will automatically convert to the Basic tier (€3/month) unless you select a different plan.',
      },
      {
        question: 'What devices can I use Spiriment on?',
        answer:
          'Spiriment is fully cross-platform! You can download the native app on your iOS or Android device, or access the platform directly from your Web Browser. Your progress, streaks, and data sync seamlessly across all platforms.',
      },
      {
        question: 'Does Spiriment offer any other resources?',
        answer:
          'Yes! We have a dedicated Spiriment Blog accessible via our website and app. Our team regularly publishes articles on faith, mentorship, spiritual growth, and app updates to encourage you on your journey.',
      },
      {
        question: 'Is my personal reflection and session data private?',
        answer:
          'Yes, absolutely. All your personal reflections, bookmarks, highlights, and direct messages are securely stored. Mentors can see your progress to guide you, but your personal notes remain private unless you choose to share them.',
      },
    ],
  },

  {
    id: 'onboarding',
    label: 'Onboarding & Registration',
    icon: `<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
           <circle cx="9" cy="7" r="4" stroke="currentColor" stroke-width="1.8"/>
           <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>`,
    faqs: [
      {
        question: 'How do I sign up as a Mentee?',
        answer:
          "Signing up as a mentee is quick and simple! You can register using your email or Google account. During onboarding, you'll be asked to provide some basic details (like your name, location, and age) so we can personalise your experience and help match you with the right mentor for your journey.",
      },
      {
        question: 'How do I apply to become a Mentor?',
        answer:
          'We take mentorship seriously, so all mentors go through a thorough application process. After selecting the "Mentor" role during signup, you will be guided through a comprehensive onboarding questionnaire. You\'ll be asked about your Christian experience, spiritual journey, church affiliation, leadership roles, areas of spiritual expertise, and your capacity to take on mentees.',
      },
      {
        question: 'Do I need to be approved to be a Mentor?',
        answer:
          'Yes. To ensure the highest quality of guidance and safety for our community, every mentor application is reviewed by our admin team. Once you complete your application (which includes uploading a short video introduction and a profile image), your account will be placed in a "Pending Approval" state until our team reviews and approves your qualifications.',
      },
    ],
  },

  {
    id: 'features',
    label: 'Core Features & Mentorship',
    icon: `<path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
           <path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>`,
    faqs: [
      {
        question: 'What Bible reading features are included?',
        answer:
          'Spiriment gives you everything you need to study effectively. You can track your daily reading streaks, view your progress on a monthly calendar, group your reflections by Bible book, and use colour-coded highlights and unlimited bookmarks.',
      },
      {
        question: 'How does the Mentorship program work?',
        answer:
          'Spiriment pairs you with experienced mentors to guide your spiritual journey! You can view mentor profiles, request sessions, and schedule one-on-one in-app Video Calls directly in the app. After your session, you can write personal session notes, leave reviews for your mentor, and receive detailed progress reports with AI-generated summaries to help you remember key takeaways. Mentorship access depends on your subscription tier.',
      },
      {
        question: 'How do I book a session with a Mentor?',
        answer:
          'Mentors set their own availability schedules within the app. Mentees can browse through approved mentor profiles, review their areas of spiritual expertise, and send a Mentorship Request. Once accepted, you can instantly book video call sessions directly into their calendar.',
      },
      {
        question: 'Can I message my mentor outside of video sessions?',
        answer:
          'Yes! Spiriment features a secure, in-app direct messaging system. You can chat with your mentor to ask quick questions, share prayer requests, or follow up on previous sessions without ever leaving the app.',
      },
      {
        question: 'Are there Group Sessions?',
        answer:
          'Yes! In addition to one-on-one sessions, mentors occasionally host Group Mentorship sessions that you can join. These are fantastic opportunities to learn alongside other members of the Spiriment community.',
      },
      {
        question: 'How does Spiriment use Artificial Intelligence (AI)?',
        answer:
          "We use AI to enhance your Bible study, not replace it. Our AI provides helpful verse summaries, historical/theological context, cross-references, and personalised reading recommendations based on the books you haven't read yet. It can also suggest reflection prompts to help you dive deeper into the text.",
      },
    ],
  },

  {
    id: 'pricing',
    label: 'Subscription Tiers & Pricing',
    icon: `<rect x="2" y="5" width="20" height="14" rx="2" stroke="currentColor" stroke-width="1.8"/>
           <path d="M2 10h20" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>`,
    faqs: [
      {
        question: 'What is included in the Basic Tier?',
        answer:
          'The Basic Tier costs just €3/month and is designed to help you build consistent daily reading habits. It includes: access to all Bible reading plans, daily streak tracking and a monthly calendar view, unlimited verse bookmarks and colour-coded highlights, personal reflections grouped by Bible book, monthly and yearly reading progress reports, push notifications and daily reminders, and lifetime data storage for as long as your subscription is active.',
      },
      {
        question: 'What do I get with the Pro Tier?',
        answer:
          'The Pro Tier costs €5/month and adds AI-powered tools and basic mentorship to everything in the Basic tier. You will receive: AI-generated verse summaries and context, personalised AI reading recommendations, AI-assisted reflection prompts, 1 mentorship session per month (up to 1 hour), and AI-generated session summaries and history tracking.',
      },
      {
        question: 'What does the Premium Tier offer?',
        answer:
          "The Premium Tier costs €7.50/month and gives you complete access to everything Spiriment has to offer. This includes all Pro features plus: advanced AI insights with deep-dive analysis, cross-references, and theological context; unlimited mentorship (up to 4 sessions / 4 hours total per month); priority mentor matching; advanced session reports and analytics; family Bible study reports (if you are on a family plan); and early access to new features and priority customer support.",
      },
    ],
  },

  {
    id: 'billing',
    label: 'Managing Your Subscription',
    icon: `<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>`,
    faqs: [
      {
        question: 'How do I manage my subscription?',
        answer:
          'Every user is provided with a secure, personal subscription management webpage. From your dashboard, you can view your current tier, see your billing history, upgrade or downgrade your plan, update your payment method, and view usage statistics like your current streak or remaining mentorship sessions.',
      },
      {
        question: 'Can I upgrade, downgrade, or cancel at any time?',
        answer:
          'Yes! You have full control. You can change your tier or cancel your subscription at any time. If you choose to cancel, you will retain access to your paid features until the end of your current billing cycle.',
      },
    ],
  },

  {
    id: 'family',
    label: 'Family Plans',
    icon: `<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
           <circle cx="9" cy="7" r="4" stroke="currentColor" stroke-width="1.8"/>
           <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>`,
    faqs: [
      {
        question: 'Does Spiriment offer Family Plans?',
        answer:
          'Yes! Family plans allow parents to manage subscriptions for themselves and their children under one unified account and a single payment method. Every family member gets their own personal account and can choose the subscription tier that fits them best.',
      },
      {
        question: 'Are there discounts for children and teens?',
        answer:
          'Absolutely! We want to encourage spiritual growth in younger generations. Children ages 10–14 receive a 50% discount on any tier. Teens ages 15–18 receive a 30% discount on any tier. Adult family members pay the standard rate.',
      },
      {
        question: 'What features do parents get on a Family Plan?',
        answer:
          'Parents have access to a shared dashboard where they can view reading progress for all family members, see combined monthly and yearly family reading reports, set spending limits per child, and easily upgrade or downgrade individual member tiers.',
      },
    ],
  },

  {
    id: 'church',
    label: 'Church Plans',
    icon: `<path d="M12 2v4M8 6h8M9 10l-4 4h14l-4-4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
           <rect x="4" y="14" width="16" height="8" rx="1" stroke="currentColor" stroke-width="1.8"/>
           <path d="M10 22v-4h4v4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>`,
    faqs: [
      {
        question: 'Can my church sign up as a group?',
        answer:
          'Yes! Churches can purchase bulk subscriptions for their congregation (minimum of 10 members required). A designated church administrator manages all member subscriptions from a centralized dashboard.',
      },
      {
        question: 'What are the benefits and discounts of a Church Plan?',
        answer:
          'All members on a Church Plan automatically receive a 20% discount on any tier. Large churches with 50 or more members receive an additional 5% discount (25% total). Church plans also offer the option to include custom branding (church logo and colors) inside member accounts.',
      },
      {
        question: 'How does the church administrator manage members?',
        answer:
          'Church administrators are provided with a dedicated Church Admin Portal. From this dashboard, they can easily add or remove members, upgrade/downgrade tiers in bulk, manage the single church billing account, generate reports, and view combined engagement analytics for the entire congregation.',
      },
    ],
  },

  {
    id: 'discounts',
    label: 'Special Discounts',
    icon: `<path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
           <line x1="7" y1="7" x2="7.01" y2="7" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>`,
    faqs: [
      {
        question: 'Are there any other discounts available?',
        answer:
          'Yes, we offer a few other special discounts. Mentors can get the Basic tier (Bible tools only) for 50% off (€1.50/month). To access full mentorship features to guide others, they pay the standard Pro or Premium rates. App Ambassadors with a valid referral code receive a 20% discount on any tier. Note: Only one discount applies per user — the system will automatically apply the highest discount you are eligible for.',
      },
    ],
  },
]
