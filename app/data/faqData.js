// ─────────────────────────────────────────────────────────────
//  Spiriment FAQ Database
//  Updated per official "Spiriment FAQs" PDF (July 2026)
//  Each category has: id, label, icon (SVG inner path string), faqs[]
//  Every faq item has: question, answer
// ─────────────────────────────────────────────────────────────

export const faqCategories = [
  {
    id: 'general',
    label: 'General & Free Access',
    icon: `<circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.8"/>
           <path d="M12 16v-4M12 8h.01" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>`,
    faqs: [
      {
        question: 'Do I need to pay to read the Bible?',
        answer:
          'No. Bible reading is free for everyone, forever. You can read any book and chapter in any available translation at no cost.',
      },
      {
        question: 'Do I need to pay to bookmark, highlight, or reflect?',
        answer:
          'No. Bookmarks, verse highlights, and personal reflections are free for all users. You can view your full bookmarks and reflections lists without a subscription.',
      },
      {
        question: 'What is the minimum age to use Spiriment?',
        answer:
          'You must be 15 years or older to create a Spiriment account.',
      },
      {
        question: 'What devices can I use Spiriment on?',
        answer:
          'Spiriment is fully cross-platform. You can download the native app on iOS or Android, or access the platform from your web browser. Your progress, streaks, and data sync seamlessly across all platforms.',
      },
      {
        question: 'Is my personal reflection and session data private?',
        answer:
          'Yes. All your personal reflections, bookmarks, highlights, and direct messages are securely stored. Mentors can see your progress to guide you, but your personal notes remain private unless you choose to share them.',
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
          "Signing up as a mentee is quick and simple. You can register using your email or Google account (you must be 15 or older). During onboarding, you'll provide some basic details so we can personalise your experience and help match you with the right mentor.",
      },
      {
        question: 'How do I apply to become a Mentor?',
        answer:
          'After selecting the "Mentor" role during signup, you will be guided through a comprehensive onboarding questionnaire covering your Christian experience, spiritual journey, church affiliation, leadership roles, areas of spiritual expertise, and capacity to take on mentees.',
      },
      {
        question: 'Do I need to be approved to be a Mentor?',
        answer:
          'Yes. Every mentor application is reviewed by our admin team, including a short video introduction and a profile image. Your account stays in "Pending Approval" until the team reviews and approves your qualifications.',
      },
    ],
  },

  {
    id: 'features',
    label: 'Plans & Features',
    icon: `<path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
           <path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>`,
    faqs: [
      {
        question: "What's the difference between Free and Basic?",
        answer:
          'Free lets you read the Bible and keep personal study notes (bookmarks, highlights, reflections). Basic (€3/month) adds reading plans, daily streaks, progress reports, quizzes, and the leaderboard.',
      },
      {
        question: "What's the difference between Pro and Premium?",
        answer:
          'Both include all Basic features, all AI tools, and mentorship access. The main difference is sessions per month: Pro gets 1 session, Premium gets 4 sessions. Premium also includes priority support and early access to new features.',
      },
      {
        question: 'How does the daily reading streak work?',
        answer:
          'Read in the app for at least 5 minutes in a day to count that day toward your streak. Streak tracking requires Basic or higher (or an active trial).',
      },
      {
        question: 'How many mentor sessions can I book?',
        answer:
          'Pro members get 1 session per calendar month; Premium members get 4 sessions per calendar month. Basic and Free members cannot book sessions. Your remaining sessions are shown on the booking screen.',
      },
      {
        question: 'How do I book a session with a Mentor?',
        answer:
          'Mentors set their own availability. Mentees can browse approved mentor profiles, review their areas of expertise, and send a Mentorship Request. Once accepted, you can book a video call session directly into their calendar, subject to your plan\'s monthly session limit.',
      },
      {
        question: 'Can I message my mentor outside of video sessions?',
        answer:
          'Yes. Spiriment features a secure, in-app direct messaging system so you can chat with your mentor between sessions.',
      },
      {
        question: 'How does Spiriment use Artificial Intelligence (AI)?',
        answer:
          "AI is available on Pro and Premium to enhance your Bible study, not replace it. It provides verse summaries, historical/theological context, cross-references, personalised reading recommendations, and reflection prompts.",
      },
      {
        question: 'Can I switch plans later?',
        answer:
          'Yes. You can upgrade or downgrade anytime from the app or the Stripe billing portal.',
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
        question: 'Is there a Free tier?',
        answer:
          'Yes. Free access includes Bible reading in any translation plus personal study notes: bookmarks, highlights, and reflections — at no cost, forever.',
      },
      {
        question: 'What is included in the Basic Tier?',
        answer:
          'The Basic Tier costs €3/month and adds: all Bible reading plans, daily streak tracking (5 minutes of reading per day), progress reports, quizzes, and the leaderboard, on top of everything in Free.',
      },
      {
        question: 'What do I get with the Pro Tier?',
        answer:
          'The Pro Tier costs €5/month and includes everything in Basic plus all AI tools (verse summaries, context, personalised recommendations, reflection prompts) and 1 mentorship session per calendar month.',
      },
      {
        question: 'What does the Premium Tier offer?',
        answer:
          'The Premium Tier costs €7.50/month and includes everything in Pro plus up to 4 mentorship sessions per calendar month, priority customer support, and early access to new features.',
      },
    ],
  },

  {
    id: 'billing',
    label: 'Trial & Billing',
    icon: `<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>`,
    faqs: [
      {
        question: 'What happens when my free trial ends?',
        answer:
          "Every new user gets a 7-day Premium trial with no credit card required. You'll receive email reminders 3 days and 1 day before it ends. If you don't subscribe, you return to Free access — you are never charged automatically, and you keep Bible reading, bookmarks, highlights, and reflections at no cost.",
      },
      {
        question: 'What happens if my payment fails?',
        answer:
          'You get a 1-day grace period during which access continues. If payment is still not resolved after 1 day, your account returns to Free access until you update your payment method.',
      },
      {
        question: 'Can I cancel anytime?',
        answer:
          'Yes. Cancel from the Stripe billing portal. You keep your paid features until the end of your current billing period, then return to Free access.',
      },
      {
        question: 'Do you offer refunds?',
        answer:
          'No refunds are given for the current billing period once charged. You can cancel anytime to avoid future charges.',
      },
      {
        question: 'What payment methods are accepted?',
        answer:
          'Credit/debit cards, Apple Pay, and Google Pay via secure Stripe checkout. All prices are listed in EUR (€).',
      },
      {
        question: 'How do I manage my subscription?',
        answer:
          'You can manage your plan from the app or the Stripe billing portal — view your current tier, billing history, upgrade or downgrade, update your payment method, and see usage stats like your streak or remaining mentorship sessions.',
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
        question: 'How do family plans work?',
        answer:
          'A parent (the plan owner) pays for all household members with one payment method. Each member has their own login and can choose their own subscription tier. Manage members from Profile → Family Plan.',
      },
      {
        question: 'How do I add someone to my family plan?',
        answer:
          "Enter their email in Family Plan — they must already have a Spiriment account. Complete Stripe checkout on your account, and they'll receive welcome and activation emails.",
      },
      {
        question: 'Can family members have different tiers?',
        answer:
          'Yes. Each member can be on Basic, Pro, or Premium independently. A parent on Premium does not automatically give Pro or Premium features to a child on Basic.',
      },
      {
        question: 'Can my teenager see the family activity dashboard?',
        answer:
          "Only the plan owner sees all members' reading streaks and activity. Other members see a read-only view of their own tier and plan info.",
      },
      {
        question: 'Is a family plan the same as adding someone to a church plan?',
        answer:
          "No. Family plans add members by email. Church plans use a church code or slug instead — see the Church Plans section.",
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
        question: 'How do church plans work?',
        answer:
          'Churches purchase bulk subscriptions for their congregation (10-member minimum). A church administrator manages all member subscriptions from a centralized church portal.',
      },
      {
        question: "How do I join my church's plan?",
        answer:
          "Go to Profile → Church in the app and enter your church's code or slug. Your pastor or administrator approves your request. You don't join a church plan by email like a family plan.",
      },
      {
        question: 'Can church members change their own tier?',
        answer:
          'No. The church administrator assigns tiers and manages billing centrally. Members use the features of whichever tier they are assigned.',
      },
      {
        question: 'What is the minimum church plan size?',
        answer:
          'A minimum of 10 members is required to start a church plan.',
      },
      {
        question: 'What discount do church members get?',
        answer:
          'All members on a Church Plan receive 20% off any tier automatically. Large churches with 50 or more members receive an additional discount, for 25% off total.',
      },
      {
        question: 'How does the church administrator manage members?',
        answer:
          'Church administrators use a dedicated Church Admin Portal to add or remove members, manage tiers in bulk, handle the single church billing account, and view combined engagement analytics for the congregation.',
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
        question: 'Is it cheaper for teenagers?',
        answer:
          'Yes. Users aged 15–18 get 30% off any tier automatically — for example, Basic is €2.10/month instead of €3.00.',
      },
      {
        question: 'Do mentors pay the same as mentees?',
        answer:
          'No. Verified mentors get 30% off all tiers — for example, Basic is €2.10/month, Pro is €3.50/month, and Premium is €5.25/month.',
      },
      {
        question: 'Can I use a promo or referral code?',
        answer:
          'Yes. Enter an ambassador or referral code on the subscription screen before checkout for a discount, typically 20% off any tier.',
      },
      {
        question: 'Can I combine discounts?',
        answer:
          'No. Only one discount applies per person — the system automatically applies the best discount you\'re eligible for. Discounts cannot be stacked (for example, a church discount and an ambassador discount can\'t be combined).',
      },
    ],
  },

  {
    id: 'support',
    label: 'Support',
    icon: `<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
           <path d="M12 8v4M12 16h.01" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>`,
    faqs: [
      {
        question: 'Where can I get help?',
        answer:
          'Use Help & Support in your profile to open an in-app support ticket. Premium members receive priority support.',
      },
      {
        question: 'Which plan should I start with?',
        answer:
          'Try the 7-day Premium trial included for all new users to explore AI tools and mentorship. Before the trial ends, choose Basic, Pro, or Premium — or continue on Free at no charge.',
      },
    ],
  },
]