<template>
  <div class="min-h-screen bg-secondaryTheme font-Jakarta">

    <!-- ── Hero Header ── -->
    <div class="bg-primaryTheme px-6 pt-16 pb-14 mob:pt-20 mob:pb-16">
      <div class="custom-width">
        <span class="inline-block text-[0.72rem] font-semibold tracking-widest uppercase text-secondaryTheme/60 border border-secondaryTheme/20 rounded-full px-4 py-1.5 mb-5">
          Got questions?
        </span>
        <h1 class="text-[clamp(1.8rem,4vw,3rem)] font-extrabold leading-[120%] text-primaryWhite mb-4 max-w-[560px]">
          Frequently Asked<br />Questions
        </h1>
        <p class="text-[0.95rem] leading-[160%] text-secondaryTextTheme max-w-[460px]">
          Everything you need to know about Spiriment. Browse by category or search for a specific topic.
        </p>

        <!-- Search bar -->
        <div class="mt-7 max-w-[500px] bg-white/10 border border-white/15 rounded-2xl flex items-center gap-3 px-5 py-3.5">
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" class="flex-shrink-0 opacity-50">
            <circle cx="11" cy="11" r="8" stroke="#FFFAEC" stroke-width="1.8" stroke-linecap="round"/>
            <path d="M21 21L16.65 16.65" stroke="#FFFAEC" stroke-width="1.8" stroke-linecap="round"/>
          </svg>
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Search questions…"
            class="bg-transparent flex-1 text-[0.9rem] text-primaryWhite placeholder:text-primaryWhite/40 focus:outline-none"
          />
          <button
            v-if="searchQuery"
            class="text-primaryWhite/50 hover:text-primaryWhite transitionEffect"
            @click="searchQuery = ''"
          >
            <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
              <line x1="1" y1="1" x2="13" y2="13" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
              <line x1="13" y1="1" x2="1" y2="13" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
            </svg>
          </button>
        </div>

        <!-- Category count pills row -->
        <div class="mt-6 flex flex-wrap gap-2">
          <span
            v-for="cat in faqCategories"
            :key="cat.id"
            class="text-[0.72rem] font-medium text-primaryWhite/50 bg-white/8 border border-white/10 rounded-full px-3 py-1 cursor-pointer transitionEffect hover:bg-white/15"
            @click="jumpToCategory(cat.id)"
          >
            {{ cat.label }} · {{ cat.faqs.length }}
          </span>
        </div>
      </div>
    </div>

    <!-- ── Main Content ── -->
    <div class="custom-width py-10 tab:py-14">

      <!-- ── SEARCH RESULTS ── -->
      <div v-if="searchQuery.trim()">
        <p class="text-[0.85rem] text-secondaryTextTheme mb-5">
          <span class="font-semibold text-primaryTheme">{{ searchResults.length }}</span>
          {{ searchResults.length === 1 ? 'result' : 'results' }} for
          <span class="font-semibold text-primaryTheme">"{{ searchQuery }}"</span>
        </p>

        <div v-if="searchResults.length" class="flex flex-col gap-3">
          <div
            v-for="(item, i) in searchResults"
            :key="'s' + i"
            class="bg-white rounded-2xl border overflow-hidden transitionEffect"
            :class="openKey === 's' + i ? 'border-primaryTheme/25 shadow-[0_4px_24px_rgba(29,47,33,0.06)]' : 'border-primaryTheme/10'"
          >
            <div class="px-5 pt-4 pb-0">
              <span class="text-[0.68rem] font-bold uppercase tracking-wider text-terracotaTheme bg-terracotaTheme/8 px-2.5 py-1 rounded-full">
                {{ item.categoryLabel }}
              </span>
            </div>
            <button
              class="w-full flex items-center justify-between gap-4 px-5 py-4 text-left transitionEffect hover:bg-primaryTheme/[0.03]"
              @click="toggle('s' + i)"
            >
              <span class="text-[0.95rem] font-semibold leading-[150%] text-primaryTheme">{{ item.question }}</span> 
              <IconsAccordionIcon :open="openKey === 's' + i" />
            </button>
            <Transition name="accordion">
              <div v-if="openKey === 's' + i" class="px-5 pb-5">
                <div class="border-t border-primaryTheme/8 pt-3 text-[0.9rem] leading-[170%] text-primaryTheme/65">
                  {{ item.answer }}
                </div>
              </div>
            </Transition>
          </div>
        </div>

        <!-- Empty state -->
        <div v-else class="text-center py-20">
          <div class="w-14 h-14 bg-primaryTheme/6 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <circle cx="11" cy="11" r="8" stroke="#1D2F21" stroke-width="1.8" stroke-linecap="round"/>
              <path d="M21 21L16.65 16.65" stroke="#1D2F21" stroke-width="1.8" stroke-linecap="round"/>
            </svg>
          </div>
          <p class="text-[0.95rem] font-semibold text-primaryTheme mb-1">No results found</p>
          <p class="text-[0.85rem] text-secondaryTextTheme">Try different keywords or browse by category.</p>
          <button class="mt-4 text-[0.85rem] font-semibold text-terracotaTheme underline" @click="searchQuery = ''">
            Clear search
          </button>
        </div>
      </div>

      <!-- ── CATEGORY BROWSE ── -->
      <div v-else class="flex flex-col tabMid:flex-row  tabMid:gap-10 tabLarge:gap-14">

        <!-- ── Sidebar ── -->
        <aside class="tabMid:w-[230px] tabLarge:w-[260px] shrink-0">

          <!-- Mobile: horizontal scrollable pills -->
          <!-- <div class="flex tabMid:hidden gap-2 overflow-x-auto pb-2 hide-scrollbar -mx-1 px-1">
            <button
              v-for="cat in faqCategories"
              :key="cat.id"
              class="flex-shrink-0 flex items-center gap-2 text-[0.8rem] font-semibold px-4 py-2 rounded-full border transitionEffect whitespace-nowrap"
              :class="activeCategory === cat.id
                ? 'bg-primaryTheme text-secondaryTheme border-primaryTheme'
                : 'bg-white text-primaryTheme border-primaryTheme/15 hover:border-primaryTheme/30'"
              @click="setCategory(cat.id)"
            >
              {{ cat.label }}
            </button>
          </div> -->

          <!-- Tablet / Desktop: vertical nav -->
          <div class="hidden tabMid:block">
            <p class="text-[0.68rem] font-bold uppercase tracking-widest text-secondaryTextTheme mb-3 px-1">
              Categories
            </p>
            <nav class="flex flex-col gap-1">
              <button
                v-for="cat in faqCategories"
                :key="cat.id"
                class="w-full text-left flex items-center gap-3 px-3 py-2.5 rounded-xl transitionEffect group"
                :class="activeCategory === cat.id
                  ? 'bg-primaryTheme text-secondaryTheme'
                  : 'text-primaryTheme hover:bg-primaryTheme/5'"
                @click="setCategory(cat.id)"
              >
                <svg
                  width="16" height="16" viewBox="0 0 24 24" fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="shrink-0 transitionEffect"
                  :class="activeCategory === cat.id ? 'opacity-70' : 'opacity-35 group-hover:opacity-55'"
                  v-html="cat.icon"
                />
                <span class="text-[0.85rem] font-medium leading-[140%] flex-1">{{ cat.label }}</span>
                <span
                  class="text-[0.68rem] font-bold tabletLarge:inline rounded-full px-2 py-0.5 transitionEffect"
                  :class="activeCategory === cat.id
                    ? 'bg-white/15 text-secondaryTheme'
                    : 'bg-primaryTheme/8 text-secondaryTextTheme'"
                >
                  {{ cat.faqs.length }}
                </span>
              </button>
            </nav>

            <!-- Stats -->
            <div class="mt-5 bg-primaryTheme/5 rounded-2xl px-4 py-4">
              <p class="text-[0.75rem] text-secondaryTextTheme leading-[170%]">
                <span class="font-bold text-primaryTheme">{{ totalQuestions }}</span> questions across
                <span class="font-bold text-primaryTheme">{{ faqCategories.length }}</span> categories.
              </p>
            </div>
          </div>
        </aside>

        <!-- ── Accordion Panel ── -->
        <div class="flex-1 min-w-0">
          <template v-for="cat in faqCategories" :key="cat.id">
            <div v-if="activeCategory === cat.id">

              <!-- Category heading -->
              <div class="flex items-center gap-3 mb-6">
                <div class="w-10 h-10 bg-primaryTheme rounded-xl flex items-center justify-center shrink-0">
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" v-html="cat.icon" class="text-secondaryTheme *:stroke-secondaryTheme" />
                </div>
                <div>
                  <h2 class="text-[1.05rem] font-bold leading-[130%] text-primaryTheme">{{ cat.label }}</h2>
                  <p class="text-[0.75rem] text-secondaryTextTheme mt-0.5">
                    {{ cat.faqs.length }} {{ cat.faqs.length === 1 ? 'question' : 'questions' }}
                  </p>
                </div>
              </div>

              <!-- FAQ items -->
              <div class="flex flex-col gap-3">
                <div
                  v-for="(faq, i) in cat.faqs"
                  :key="cat.id + i"
                  class="bg-white rounded-2xl border overflow-hidden transitionEffect"
                  :class="openKey === cat.id + i
                    ? 'border-primaryTheme/25 shadow-[0_4px_24px_rgba(29,47,33,0.06)]'
                    : 'border-primaryTheme/10'"
                >
                  <button
                    class="w-full flex items-center justify-between gap-4 px-5 py-5 text-left transitionEffect hover:bg-primaryTheme/[0.03]"
                    :aria-expanded="openKey === cat.id + i"
                    @click="toggle(cat.id + i)"
                  >
                    <span class="text-[0.95rem] font-semibold leading-[150%] text-primaryTheme">{{ faq.question }}</span>
                    <IconsAccordionIcon :open="openKey === cat.id + i" />
                  </button>

                  <Transition name="accordion">
                    <div v-if="openKey === cat.id + i" class="px-5 pb-5">
                      <div class="border-t border-primaryTheme/8 pt-3 text-[0.9rem] leading-[170%] text-primaryTheme/65">
                        {{ faq.answer }}
                      </div>
                    </div>
                  </Transition>
                </div>
              </div>

              <!-- Prev / Next -->
              <div class="flex items-center justify-between mt-8 pt-5 border-t border-primaryTheme/8">
                <button
                  v-if="prevCategory"
                  class="flex items-center gap-2 text-[0.85rem] font-semibold text-primaryTheme hover:text-darkTheme transitionEffect"
                  @click="setCategory(prevCategory.id)"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                    <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  <span class="hidden mob:inline">{{ prevCategory.label }}</span>
                  <span class="mob:hidden">Prev</span>
                </button>
                <span v-else />
                <button
                  v-if="nextCategory"
                  class="flex items-center gap-2 text-[0.85rem] font-semibold text-primaryTheme hover:text-darkTheme transitionEffect"
                  @click="setCategory(nextCategory.id)"
                >
                  <span class="hidden mob:inline">{{ nextCategory.label }}</span>
                  <span class="mob:hidden">Next</span>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </button>
              </div>

            </div>
          </template>
        </div>

      </div>
    </div>

    <!-- ── Footer CTA ── -->
    <div class="custom-width pb-14">
      <div class="bg-primaryTheme rounded-[20px] px-7 py-7 flex flex-col mob:flex-row items-start mob:items-center justify-between gap-5">
        <div>
          <h3 class="text-[1.05rem] font-bold text-primaryWhite mb-1">Still have questions?</h3>
          <p class="text-[0.85rem] text-secondaryTextTheme leading-[160%]">Our support team is happy to help you out anytime.</p>
        </div>
        <button class="flex-shrink-0 bg-secondaryTheme text-primaryTheme text-[0.85rem] font-bold px-6 py-3 rounded-full transitionEffect hoverEffect whitespace-nowrap">
          Contact support
        </button>
      </div>
    </div>

  </div>
</template>

<script setup>
import { faqCategories } from '@/data/faqData.js'

// ── State ───────────────────────────────────────────────────────
const activeCategory = ref(faqCategories[0].id)
const openKey = ref(null)
const searchQuery = ref('')

// ── Helpers ─────────────────────────────────────────────────────
const setCategory = (id) => {
  activeCategory.value = id
  openKey.value = null
}

const jumpToCategory = (id) => {
  searchQuery.value = ''
  setCategory(id)
}

const toggle = (key) => {
  openKey.value = openKey.value === key ? null : key
}

// ── Computed ────────────────────────────────────────────────────
const totalQuestions = computed(() =>
  faqCategories.reduce((sum, cat) => sum + cat.faqs.length, 0)
)

const activeCategoryIndex = computed(() =>
  faqCategories.findIndex((c) => c.id === activeCategory.value)
)

const prevCategory = computed(() =>
  activeCategoryIndex.value > 0 ? faqCategories[activeCategoryIndex.value - 1] : null
)

const nextCategory = computed(() =>
  activeCategoryIndex.value < faqCategories.length - 1
    ? faqCategories[activeCategoryIndex.value + 1]
    : null
)

const searchResults = computed(() => {
  const q = searchQuery.value.trim().toLowerCase()
  if (!q) return []
  const results = []
  faqCategories.forEach((cat) => {
    cat.faqs.forEach((faq) => {
      if (faq.question.toLowerCase().includes(q) || faq.answer.toLowerCase().includes(q)) {
        results.push({ ...faq, categoryLabel: cat.label })
      }
    })
  })
  return results
})
</script>

<style scoped>
.accordion-enter-active,
.accordion-leave-active {
  overflow: hidden;
  transition: max-height 0.3s linear, opacity 0.3s linear;
}
.accordion-enter-from,
.accordion-leave-to {
  max-height: 0;
  opacity: 0;
}
.accordion-enter-to,
.accordion-leave-from {
  max-height: 600px;
  opacity: 1;
}
</style>