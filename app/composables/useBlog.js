const BASE_URL = 'https://api.paxify.org'

// ─────────────────────────────────────────────────────────────
//  useBlogList
//  Fetches paginated blog posts from GET /api/blog
//  @param {number} postsPerPage - posts per page (default: 9)
// ─────────────────────────────────────────────────────────────
export function useBlogList(postsPerPage = 9) {
  const posts = ref([])
  const loading = ref(true)
  const error = ref(null)
  const currentPage = ref(1)
  const total = ref(0)

  const totalPages = computed(() => Math.ceil(total.value / postsPerPage))

  const visiblePages = computed(() => {
    const pages = []
    const range = 2
    const start = Math.max(1, currentPage.value - range)
    const end = Math.min(totalPages.value, currentPage.value + range)
    for (let i = start; i <= end; i++) pages.push(i)
    return pages
  })

  const fetchPosts = async () => {
    loading.value = true
    error.value = null
    try {
      const data = await $fetch(`${BASE_URL}/api/blog`, {
        params: { page: currentPage.value, limit: postsPerPage },
      })
      posts.value = data.response.posts
      total.value = data.response.pagination.total
    } catch (err) {
      error.value = err?.data?.message ?? 'Something went wrong.'
    } finally {
      loading.value = false
    }
  }

  const goToPage = (page) => {
    if (page < 1 || page > totalPages.value) return
    currentPage.value = page
    fetchPosts()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  onMounted(fetchPosts)

  return { posts, loading, error, currentPage, total, totalPages, visiblePages, fetchPosts, goToPage }
}

// ─────────────────────────────────────────────────────────────
//  useBlogPost
//  Fetches a single post from GET /api/blog/:slug
//  @param {string} slug - post slug from the route param
// ─────────────────────────────────────────────────────────────
export function useBlogPost(slug) {
  const post = ref(null)
  const loading = ref(true)
  const error = ref(null)

  const fetchPost = async () => {
    loading.value = true
    error.value = null
    try {
      const data = await $fetch(`${BASE_URL}/api/blog/${slug}`)
      post.value = data.response
    } catch (err) {
      error.value = err?.data?.message ?? 'Post not found.'
    } finally {
      loading.value = false
    }
  }

  onMounted(fetchPost)

  return { post, loading, error, fetchPost }
}

// ─────────────────────────────────────────────────────────────
//  Shared helper
// ─────────────────────────────────────────────────────────────
export function formatDate(dateStr) {
  if (!dateStr) return ''
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}