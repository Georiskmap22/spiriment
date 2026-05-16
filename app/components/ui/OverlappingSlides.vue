<template>
  <div
    ref="container"
    class="relative w-full overflow-hidden"
  >
   <div
      class="pointer-events-none absolute inset-y-0 z-50 flex items-center justify-between px-6 w-full"
    >
      <!-- LEFT -->
      <button
        v-show="canScrollLeft"
        @click="scrollLeft"
        class="pointer-events-auto grid place-items-center rounded-full p-4
              border border-secondaryTheme
              backdrop-blur-md bg-white/10
              shadow-xl shadow-secondaryTheme/40
              transition hover:scale-105 active:scale-95"
      >
        <Icon
          name="bxs:left-arrow"
          size="30"
          class="text-secondaryTextTheme"
        />
      </button>

      <!-- RIGHT -->
      <button
        v-show="canScrollRight"
        @click="scrollRight"
        class="pointer-events-auto grid place-items-center rounded-full p-4
              border border-secondaryTheme
              backdrop-blur-md bg-white/10
              shadow-xl shadow-secondaryTheme/40
              transition hover:scale-105 active:scale-95"
      >
        <Icon
          name="bxs:right-arrow"
          size="30"
          class="text-secondaryTextTheme"
        />
      </button>
    </div>

    <div
      ref="scroller"
      class="flex specialTransitionEffect overflow-x-auto hide-scrollbar snap-x snap-mandatory"
      :class="isActive ? 'pl-0' : 'pl-0'"
    >
      <article
        v-for="(item, index) in slidingCardContents"
        :key="item.id"
        class="h-[35.69rem] min-w-[26.69rem] max-w-[26.69rem] rounded-3xl shrink-0 flex flex-col gap-6 specialTransitionEffect will-change-transform max-mob:max-w-full!"
        :class="cardClass(index, item)"
        :style="{
          backgroundColor: item.cardTheme,
          transform: cardTransform(index)
        }"
      >
        <!-- Text -->
        <div
          class="flex flex-col min-h-34 px-10"
          :style="{ order: item.imgOrder === '1' ? 2 : 1 }"
        >
          <h4
            class="font-bold leading-[120%] text-[1.75rem] mb-4"
            :style="{ color: item.textTheme || '#FFFAEC' }"
          >
            {{ item.title }}
          </h4>
          <p
            class="text-sm"
            :style="{ color: item.textTheme || '#FFFAEC' }"
          >
            {{ item.description }}
          </p>
        </div>

        <!-- Image -->
        <div
          class="mx-auto grow max-w-full overflow-hidden"
          :style="{
            width: item.imgWidth || '100%',
            order: item.imgOrder === '1' ? 1 : 2
          }"
        >
          <NuxtImg
            v-if="item.imgSrc"
            :src="`/images/${item.imgSrc}`"
            class="w-full h-full object-cover"
            :alt="item.title"
          />
        </div>
      </article>
    </div>
  </div>
</template>

<script setup>
defineProps({
  slidingCardContents: {
    type: Array,
    required: true
  }
})

const container = ref(null)
const scroller = ref(null)
const isActive = ref(false)
const canScrollLeft = ref(false)
const canScrollRight = ref(false)

const SCROLL_AMOUNT = 350 // px per click (≈ card width)


let observer

/* ---------------- MANUAL SCROLL ---------------- */
const scrollLeft = () => {
  scroller.value?.scrollBy({
    left: -SCROLL_AMOUNT,
    behavior: 'smooth'
  })
}

const scrollRight = () => {
  scroller.value?.scrollBy({
    left: SCROLL_AMOUNT,
    behavior: 'smooth'
  })
}

const updateScrollState = () => {
  const el = scroller.value
  if (!el) return

  canScrollLeft.value = el.scrollLeft > 10
  canScrollRight.value =
    el.scrollLeft + el.clientWidth < el.scrollWidth - 10
}


/* ---------------- CARD TRANSFORMS ---------------- */

const cardTransform = (index) => {
  if (!isActive.value) {
    canScrollRight.value = true
    canScrollLeft.value = true
    return `translateX(${index * 5}rem)`
  }
  return `translateX(${index * 28}rem)`
}

const cardClass = (index, item) => [
  index > 0 ? '-ml-102' : 'ml-0',
  `z-[${10 + index}]`,
  item.imgOrder === '1' ? 'pb-11' : 'pt-11'
]

onMounted(() => {
  observer = new IntersectionObserver(
    ([entry]) => {
      isActive.value = entry.isIntersecting
    },
    { threshold: 0.35 }
  )

  if (container.value) {
    observer.observe(container.value)
  }

  // nextTick(() => {
  //   updateScrollState()
  //   scroller.value?.addEventListener('scroll', updateScrollState)
  // })

})

onBeforeUnmount(() => {
  scroller.value?.removeEventListener('scroll', updateScrollState)
  observer?.disconnect()
  // stopAutoScroll()
})

</script>



<style lang="scss" scoped>
</style>
