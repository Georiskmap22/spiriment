<template>
  <!-- Hero -->
  <section class="bg-[#112851] py-12 md:py-16 lg:py-23">
    <h1 class="text-center header-text text-[2rem] md:text-[2.5rem] lg:text-[3rem] text-secondaryTheme leading-tight px-4">
      Blog
    </h1>
  </section>

  <!-- Posts -->
  <section class="custom-width py-8 md:py-12 lg:py-[9.06rem]">

    <!-- Error -->
    <div v-if="error" class="text-center py-20">
      <p class="text-primaryTheme font-semibold text-[1rem] mb-2">Failed to load posts.</p>
      <p class="text-secondaryTextTheme text-[0.88rem] mb-4">{{ error }}</p>
      <button class="text-[0.88rem] font-semibold text-terracotaTheme underline" @click="fetchPosts">
        Try again
      </button>
    </div>

    <!-- Empty -->
    <div v-else-if="!loading && posts.length === 0" class="text-center py-20">
      <p class="text-primaryTheme font-semibold text-[1rem]">No posts published yet.</p>
      <p class="text-secondaryTextTheme text-[0.88rem] mt-1">Check back soon!</p>
    </div>

    <!-- Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">

      <!-- Skeletons -->
      <template v-if="loading">
        <div
          v-for="n in 9"
          :key="'sk-' + n"
          class="bg-[#FEEFC4] rounded-2xl overflow-hidden flex flex-col animate-pulse"
        >
          <div class="w-full bg-[#D9C89A] h-40 md:h-52 lg:h-71" />
          <div class="p-4 flex flex-col gap-3">
            <div class="h-5 bg-[#D9C89A] rounded-full w-3/4" />
            <div class="h-4 bg-[#D9C89A] rounded-full w-1/2" />
          </div>
        </div>
      </template>

      <!-- Post cards -->
      <nuxt-link
        v-else
        v-for="post in posts"
        :key="post.id"
        :to="`/resources/${post.slug}`"
        class="blog-card bg-[#FEEFC4] rounded-2xl overflow-hidden flex flex-col transition-transform hover:scale-[1.02] duration-300"
      >
        <article class="h-full flex flex-col">
          <div class="w-full h-40 md:h-52 lg:h-71 overflow-hidden bg-[#D9D9D9]">
            <img
              v-if="post.coverImage"
              :src="post.coverImage"
              :alt="post.title"
              class="w-full h-full object-cover"
            />
          </div>
          <div class="p-4 grow">
            <h6 class="header-text text-[1.125rem] md:text-[1.25rem] lg:text-[1.5rem] text-primaryTheme mb-2 leading-tight line-clamp-2">
              {{ post.title }}
            </h6>
            <p class="small-texts text-[0.875rem] md:text-[1rem] lg:text-[1.125rem] text-primaryTheme">
              {{ formatDate(post.publishedAt) }}
            </p>
          </div>
        </article>
      </nuxt-link>

    </div>

    <!-- Pagination -->
    <div v-if="!loading && totalPages > 1" class="flex items-center justify-center gap-3 mt-10 md:mt-14">
      <button
        class="w-9 h-9 rounded-full flex items-center justify-center border border-primaryTheme/20 transitionEffect disabled:opacity-30 disabled:cursor-not-allowed hover:bg-primaryTheme/5"
        :disabled="currentPage === 1"
        @click="goToPage(currentPage - 1)"
      >
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
          <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="#1D2F21" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>

      <button
        v-for="page in visiblePages"
        :key="page"
        class="w-9 h-9 rounded-full text-[0.85rem] font-semibold transitionEffect"
        :class="page === currentPage
          ? 'bg-primaryTheme text-secondaryTheme'
          : 'text-primaryTheme hover:bg-primaryTheme/5 border border-primaryTheme/20'"
        @click="goToPage(page)"
      >
        {{ page }}
      </button>

      <button
        class="w-9 h-9 rounded-full flex items-center justify-center border border-primaryTheme/20 transitionEffect disabled:opacity-30 disabled:cursor-not-allowed hover:bg-primaryTheme/5"
        :disabled="currentPage === totalPages"
        @click="goToPage(currentPage + 1)"
      >
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
          <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#1D2F21" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
    </div>

  </section>
</template>

<script setup>
import { useBlogList, formatDate } from '@/composables/useBlog'

const { posts, loading, error, currentPage, totalPages, visiblePages, fetchPosts, goToPage } = useBlogList(9)
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  line-clamp: 2;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>