<template>
   <section ref="sectionRef">
        <div 
        class="md:mt-8 lg:mt-[3.813rem]"
        :class="activateSlide ? 'overflow-y-auto h-screen' : ''"
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
                    <div class="flex justify-center lg:justify-start transitionEffect hoverEffect w-fit max-lg:mx-auto">
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
                        <button 
                        v-if="isDonatePage"
                        class="py-3 px-5 md:py-4 md:px-6 rounded-[6.25rem] text-base font-bold"
                        :style="{ color: item.cardTheme, backgroundColor: item.cardColor}"
                        >
                            Give Now
                        </button>
                    </div>
                </div>

                <!-- VIDEO CARD -->
                <div 
                class="video-card group relative h-48 md:h-64 lg:h-91 w-full lg:w-[25.19rem] rounded-2xl md:rounded-[1.75rem] lg:rounded-3xl bg-secondaryTheme mx-auto lg:mx-0 overflow-hidden transition-transform duration-300 ease-out hover:scale-[1.02] hover:shadow-2xl"
                :class="item.videoUrl ? 'cursor-pointer' : ''"
                :style="{ backgroundColor: item.videoUrl ? 'transparent' : item.cardColor }"
                @click="item.videoUrl && openVideoModal(item.videoUrl)"
                >
                        <img
                            v-if="item.videoUrl"
                            :src="resolvePosterUrl(item.videoUrl)"
                            loading="lazy"
                            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            alt=""
                        />

                    <!-- hover overlay + play icon, only when a video exists -->
                    <div
                        v-if="item.videoUrl"
                        class="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/20 transition-colors duration-300"
                    >
                        <div class="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all duration-300 shadow-lg">
                            <svg class="w-6 h-6 md:w-7 md:h-7 text-black ml-0.5" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M8 5v14l11-7z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </article>
              <!-- 🔑 spacer to push last card -->
            <div :style="{ height: `${stickyOffset}px` }"></div>
        </div>

        <!-- VIDEO MODAL -->
        <Teleport to="body">
            <Transition name="fade">
                <div
                    v-if="activeVideoUrl"
                    class="fixed inset-0 z-100 flex items-center justify-center bg-black/80 p-4 md:p-8"
                    @click.self="closeVideoModal"
                >
                    <button
                        class="absolute top-4 right-4 md:top-8 md:right-8 text-white text-3xl leading-none hover:opacity-70 transition-opacity"
                        @click="closeVideoModal"
                        aria-label="Close video"
                    >
                        &times;
                    </button>
                    <video
                        :src="activeVideoUrl"
                        class="max-w-full max-h-[85vh] w-full md:w-auto rounded-xl md:rounded-2xl shadow-2xl"
                        controls
                        autoplay
                        playsinline
                    ></video>
                </div>
            </Transition>
        </Teleport>
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
    },
    isDonatePage: {
        type: Boolean,
        default: false
    }
})

const stickyOffset = ref(0)
const sectionRef = ref(null)
let observer = null
const activateSlide = ref(false)

// --- video modal state ---
const activeVideoUrl = ref(null)

const resolveVideoUrl = (url) => {
    if (!url) return ''
    return url.startsWith('http') ? url : `/videos/optimized/${url}`
}

const resolvePosterUrl = (url) => {
    if (!url) return ''
    const base = url.replace(/\.[^/.]+$/, '')
    return `/videos/posters/${base}-poster.jpg`
}

const openVideoModal = (url) => {
    activeVideoUrl.value = resolveVideoUrl(url)
    document.body.style.overflow = 'hidden'
}

const closeVideoModal = () => {
    activeVideoUrl.value = null
    document.body.style.overflow = ''
}

const onKeydown = (e) => {
    if (e.key === 'Escape') closeVideoModal()
}

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
                console.log(activateSlide.value)
            } else {
                onLeaveViewport()
                console.log(activateSlide.value)
            }
        },
        {
            threshold: 0.3 // 30% visible triggers
        }
    )

        if (sectionRef.value) {
            observer.observe(sectionRef.value)
        }

    window.addEventListener('keydown', onKeydown)
    })

    onBeforeUnmount(() => {
        if (observer && sectionRef.value) {
            observer.unobserve(sectionRef.value)
    }
    window.removeEventListener('keydown', onKeydown)
})

onMounted(() => {
  // safe: window exists only on client
  stickyOffset.value = 0.1 * window.innerHeight // ≈ 80% overlap
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.25s ease;
}
.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>