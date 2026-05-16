import { ref, reactive } from 'vue'
import { useToast } from 'vue-toastification'

const BASE_URL = 'https://api.paxify.org'

// ─────────────────────────────────────────────────────────────
//  useFormSubmit
//  @param {string} type     - 'GENERAL' | 'PARTNERSHIP' | 'VOLUNTEER'
//  @param {object} options  - successMessage, errorMessage, onSuccess, extraFields
// ─────────────────────────────────────────────────────────────
export function useFormSubmit(type, options = {}) {
  const toast = useToast()
  const loading = ref(false)
  const errors = ref(null)

  // Base fields shared across all form types
  const form = reactive({
    name: '',
    email: '',
    phone: '',
    message: '',
    type,
    // Spread any form-specific fields (e.g. partnershipType, skill, portfolioLink)
    ...options.extraFields,
  })

  const resetForm = () => {
    Object.keys(form).forEach((key) => {
      if (key === 'type') return // keep type intact
      form[key] = ''
    })
  }

  const submit = async () => {
    loading.value = true
    errors.value = null

    try {
      await $fetch(`${BASE_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: { ...form },
      })

      toast.success(options.successMessage ?? 'Your message has been sent successfully!')
      resetForm()
      if (options.onSuccess) options.onSuccess()

    } catch (err) {
      errors.value = err?.data ?? err
      toast.error(options.errorMessage ?? 'Something went wrong. Please try again.')
    } finally {
      loading.value = false
    }
  }

  return { form, submit, loading, errors }
}