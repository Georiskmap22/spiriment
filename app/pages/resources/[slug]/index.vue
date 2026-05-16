<template>
  <!-- Hero -->
  <section class="bg-[#112851] pt-12 md:pt-16 lg:pt-23 pb-8 md:pb-10 lg:pb-[6.57rem] px-4 lg:px-0">
    <div class="custom-width flex flex-col lg:flex-row justify-between items-center gap-8 md:gap-10 lg:gap-[8.44rem] lg:h-[27.18rem]">

      <!-- Skeleton hero -->
      <template v-if="loading">
        <div class="flex flex-col justify-between flex-1 h-full w-full lg:w-auto order-2 lg:order-1 mt-8 lg:mt-0 animate-pulse">
          <div class="flex flex-col gap-4">
            <div class="h-4 bg-white/20 rounded-full w-32" />
            <div class="h-8 bg-white/20 rounded-xl w-full" />
            <div class="h-8 bg-white/20 rounded-xl w-3/4" />
          </div>
          <div class="mt-8 lg:mt-0 flex flex-col gap-3">
            <div class="h-4 bg-white/20 rounded-full w-28" />
            <div class="flex gap-2">
              <div class="w-6 h-6 bg-white/20 rounded-full" />
              <div class="w-6 h-6 bg-white/20 rounded-full" />
              <div class="w-6 h-6 bg-white/20 rounded-full" />
            </div>
          </div>
        </div>
        <div class="w-full lg:w-auto flex-1 min-h-80 md:h-64 lg:h-full order-1 lg:order-2 rounded-lg lg:rounded-none bg-white/10 animate-pulse" />
      </template>

      <!-- Error -->
      <div v-else-if="error" class="flex-1 flex flex-col items-center justify-center text-center order-2">
        <p class="text-secondaryTheme font-semibold text-[1rem] mb-2">{{ error }}</p>
        <button class="text-[0.88rem] font-semibold text-secondaryTheme/60 underline mt-2" @click="fetchPost">
          Try again
        </button>
      </div>

      <!-- Content -->
      <template v-else-if="post">
        <div class="flex flex-col justify-between flex-1 h-full w-full lg:w-auto order-2 lg:order-1 mt-8 lg:mt-0">
          <div class="text-secondaryTheme">
            <span class="small-texts text-[1.125rem] md:text-[1.25rem] lg:text-[1.5rem] mb-4 md:mb-5 lg:mb-6 block">
              {{ formatDate(post.publishedAt) }}
            </span>
            <h2 class="text-[1.75rem] md:text-[2rem] lg:text-[2.5rem] header-text leading-tight">
              {{ post.title }}
            </h2>
          </div>
          <div class="mt-8 md:mt-10 lg:mt-0">
            <span class="small-texts text-[1rem] md:text-[1.125rem] lg:text-[1.5rem] text-secondaryTheme mb-3 md:mb-4 block">
              Share this post
            </span>
            <div class="basic-flex gap-2">
              <a :href="shareLinks.linkedin" target="_blank" rel="noopener noreferrer">
                <NuxtImg src="/icons/linkedin.svg" class="w-5 h-5 md:w-6 md:h-6" />
              </a>
              <a :href="shareLinks.facebook" target="_blank" rel="noopener noreferrer">
                <NuxtImg src="/icons/facebook.svg" class="w-5 h-5 md:w-6 md:h-6" />
              </a>
              <a :href="shareLinks.twitter" target="_blank" rel="noopener noreferrer">
                <NuxtImg src="/icons/x.svg" class="w-5 h-5 md:w-6 md:h-6" />
              </a>
            </div>
          </div>
        </div>

        <!-- Cover image -->
        <div class="w-full lg:w-auto flex-1 min-h-80 md:h-64 lg:h-full order-1 lg:order-2 rounded-lg lg:rounded-none overflow-hidden bg-[#D9D9D9]">
          <img
            v-if="post.coverImage"
            :src="post.coverImage"
            :alt="post.title"
            class="w-full h-full object-cover"
          />
        </div>
      </template>

    </div>
  </section>

  <!-- Body -->
  <section class="py-8 md:py-10 lg:py-10 px-8 lg:px-0">
    <div class="w-full md:w-[80%] lg:w-[65%] xl:w-[45.43%] mx-auto">

      <!-- Skeleton body -->
      <div v-if="loading" class="flex flex-col gap-4 animate-pulse">
        <div v-for="n in 6" :key="n" class="h-4 bg-primaryTheme/10 rounded-full" :class="n % 3 === 0 ? 'w-2/3' : 'w-full'" />
      </div>

      <!-- Post HTML content -->
      <!-- eslint-disable-next-line vue/no-v-html -->
      <div
        v-else-if="post"
        class="small-texts text-[1.25rem] lg:text-[1.5rem] text-primaryTheme leading-relaxed blog-content"
        v-html="post.content"
      />

    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useBlogPost, formatDate } from '@/composables/useBlog'

const route = useRoute()
const { post, loading, error, fetchPost } = useBlogPost(route.params.slug)

// Build share URLs dynamically from the current page URL
const pageUrl = computed(() =>
  typeof window !== 'undefined' ? window.location.href : ''
)

const shareLinks = computed(() => ({
  linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(pageUrl.value)}`,
  facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl.value)}`,
  twitter:  `https://twitter.com/intent/tweet?url=${encodeURIComponent(pageUrl.value)}&text=${encodeURIComponent(post.value?.title ?? '')}`,
}))
</script>

<style scoped>
/* Render HTML content from the API with sensible typography */
.blog-content :deep(h1),
.blog-content :deep(h2),
.blog-content :deep(h3) {
  font-weight: 700;
  line-height: 1.25;
  margin-top: 2rem;
  margin-bottom: 0.75rem;
}
.blog-content :deep(p) {
  margin-bottom: 1.25rem;
}
.blog-content :deep(a) {
  color: #5E3128;
  text-decoration: underline;
}
.blog-content :deep(ul),
.blog-content :deep(ol) {
  padding-left: 1.5rem;
  margin-bottom: 1.25rem;
}
.blog-content :deep(li) {
  margin-bottom: 0.4rem;
}
.blog-content :deep(img) {
  max-width: 100%;
  border-radius: 0.75rem;
  margin: 1.5rem 0;
}
.blog-content :deep(blockquote) {
  border-left: 3px solid #5E3128;
  padding-left: 1rem;
  font-style: italic;
  color: #4a5c4e;
  margin: 1.5rem 0;
}
</style>