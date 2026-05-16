<template>
   <section ref="sectionRef">
        <div 
        class="md:mt-8 lg:mt-[3.813rem] border-2 border-[red] pt-20 overflow-y-auto h-screen"
        >
            <article
                v-for="(item, index) in cardContent"
                :key="item.id"
                class="custom-width rounded-2xl md:rounded-[1.125rem] lg:rounded-[1.25rem]
                    px-6 md:px-8 lg:px-12.5 flex flex-col lg:flex-row justify-between
                    transition-all duration-500 h-auto md:h-160 lg:min-h-[42.12rem] p-8 md:p-16 lg:p-22.5
                    sticky top-20"
                :class="index === 0 ? 'top-[120px]' : ''"
                :style="{
                    top: `${index * stickyOffset}px`,
                    zIndex: 10 + index,
                    backgroundColor: item.cardTheme
                }"
            >
                <div class="max-w-full lg:max-w-135 mb-8 lg:mb-0">
                    <h2 class="font-bold leading-[120%] text-secondaryTheme mb-4 text-[1.75rem] md:text-[2rem] lg:text-[2.5rem] text-center lg:text-left"
                    :style="{ color: item.textTheme ? item.textTheme: '#FFFAEC'}"
                    >
                        {{ item.title }}
                    </h2>
                    <p class="small-texts text-[1.125rem] md:text-[1.25rem] lg:text-[1.5rem] text-secondaryTheme mb-5 text-center lg:text-left"
                    :style="{ color: item.textTheme ? item.textTheme: '#FFFAEC'}"
                    >
                        {{ item.detail }}

                    </p>
                    <div class="flex justify-center lg:justify-start">
                        <UiDownloadButton 
                            v-if="showButton"
                            :isDark="false"
                            :iconTheme="item.cardTheme"
                            v-bind="item.textTheme ? { textTheme: item.textTheme } : {}"
                        />
                        <button 
                        v-if="isPartnership"
                        class="py-3 px-5 md:py-4 md:px-6 rounded-[6.25rem] text-sm md:text-base"
                        :style="{ color: item.cardTheme, backgroundColor: item.cardColor}"
                        >
                            Become a Partner
                        </button>
                    </div>
                </div>
                <div 
                class="h-48 md:h-64 lg:h-91 w-full lg:w-[25.19rem] rounded-2xl md:rounded-[1.75rem] lg:rounded-3xl bg-secondaryTheme mx-auto lg:mx-0"
                :style="{ backgroundColor: item.cardColor }"
                >
                </div>
            </article>
              <!-- 🔑 spacer to push last card -->
            <div :style="{ height: `${stickyOffset}px` }"></div>
        </div>
    </section>
</template>

<script setup>
 defineProps({
    cardContent: {
        type: Array,
        required: true
    },
    showButton: {
        type: Boolean,
        default: true
    },
    isPartnership: {
        type: Boolean,
        default: false
    }
})

const stickyOffset = ref(0)
const sectionRef = ref(null)
let observer = null
const active = ref(false)

    const onEnterViewport = () => {
    console.log('Component entered viewport')
    // 👉 Run animation / function here
    }

    const onLeaveViewport = () => {
    console.log('Component left viewport')
    // 👉 Reverse animation or cleanup
    }

    onMounted(() => {
    observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
                onEnterViewport()
            } else {
                onLeaveViewport()
            }
        },
        {
            threshold: 0.3 // 30% visible triggers
        }
    )

        if (sectionRef.value) {
            observer.observe(sectionRef.value)
        }
    })

    onBeforeUnmount(() => {
        if (observer && sectionRef.value) {
            observer.unobserve(sectionRef.value)
        }
    })

onMounted(() => {
  // safe: window exists only on client
  stickyOffset.value = 0.1 * window.innerHeight // ≈ 80% overlap
})
</script>

<!-- <script setup>
    defineProps({
    cardContent: {
        type: Array,
        required: true
    },
    showButton: {
        type: Boolean,
        default: true
    },
    isPartnership: {
        type: Boolean,
        default: false
    }
    })
</script> -->


<style lang="scss" scoped>

</style>