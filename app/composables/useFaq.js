// composables/useFaq.js
//
// Fetches FAQs from the Paxify API and exposes them grouped by category,
// in the shape the FAQ page expects (faqCategories: [{ id, label, icon, faqs: [...] }]).

// const BASE_URL = 'https://api.paxify.org/api'
const BASE_URL = 'http://localhost:6802/api'

// Generic fallback icon (the API has no icon field per category).
const DEFAULT_ICON = `<path d="M12 18h.01M9.5 9a2.5 2.5 0 1 1 3.5 2.3c-.7.3-1 .9-1 1.7v.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>`

// Optional: map specific category labels (as returned by the API) to custom icons.
// e.g. General: `<path d="..." stroke="currentColor" .../>`
const CATEGORY_ICONS = {}

export const useFaq = () => {
  const {
    data: rawData,
    pending,
    error,
    refresh,
  } = useFetch(`${BASE_URL}/admin/faq`, {
    key: 'admin-faq-list',
    transform: (res) => (res?.success ? res.response : []),
    default: () => [],
  })

  // Only published FAQs, sorted by sortOrder.
  const publishedFaqs = computed(() =>
    (rawData.value || [])
      .filter((f) => f.isPublished)
      .slice()
      .sort((a, b) => a.sortOrder - b.sortOrder)
  )

  // Group flat FAQ list into categories.
  const faqCategories = computed(() => {
    const groups = {}

    publishedFaqs.value.forEach((faq) => {
      const label = faq.category || 'General'
      const id = label.toLowerCase().trim().replace(/\s+/g, '-')

      if (!groups[id]) {
        groups[id] = {
          id,
          label,
          icon: CATEGORY_ICONS[label] || DEFAULT_ICON,
          faqs: [],
        }
      }

      groups[id].faqs.push({
        id: faq.id,
        question: faq.question,
        answer: faq.answer,
      })
    })

    return Object.values(groups)
  })

  const totalQuestions = computed(() => publishedFaqs.value.length)

  return {
    faqCategories,
    totalQuestions,
    pending,
    error,
    refresh,
  }
}