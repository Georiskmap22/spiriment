<template>
    <section ref="sectionRef" class="custom-width pt-8 md:pt-10 lg:pt-[3.44rem] pb-8 md:pb-10 lg:pb-[5.19rem]">
        <h3 class="text-[1.75rem] md:text-[1.875rem] lg:text-[2.0625rem] leading-[120%] font-bold text-primaryTheme mb-8 md:mb-12 lg:mb-[5.19rem] text-center">More Than Just Another Bible App</h3>
        <div class="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-8 lg:gap-4">
            <!-- Left side - texts1 -->
            <div class="text-center lg:text-left order-2 lg:order-1 texts1 flex flex-col gap-4">
                <article 
                    v-for="(text, index) in texts1"
                    :key="index"
                    :class="[
                        'w-full lg:max-w-[17.265rem] rounded-3xl py-4 px-6 text-secondaryTheme font-bold text-[1rem] md:text-[1.125rem] lg:text-[1.5rem] transitionEffect',
                        text.bg,
                        {
                            'h-37 opacity-100': currentIndex === index,
                            'h-fit opacity-100': currentIndex > index,
                            'h-0 opacity-0 py-0 overflow-hidden': currentIndex < index
                        }
                    ]"
                >
                    <h5 class="leading-[120%]">{{ text.title }}</h5>
                </article>
            </div>

            <!-- Center - images -->
            <div class="order-2 relative">
                <NuxtImg 
                    v-for="(image, index) in images"
                    :key="index"
                    :src="image"
                    :class="[
                        'max-h-[280px] md:max-h-[350px] lg:max-h-[39.88rem] w-auto transitionEffect',
                        index === 0 ? '' : 'absolute top-0 left-0',
                        {
                            'opacity-100': currentIndex === index,
                            'opacity-0': currentIndex !== index
                        }
                    ]"
                />
            </div>

            <!-- Right side - texts2 -->
            <div class="self-center lg:self-end text-center lg:text-left order-3 text2">
                <article 
                    v-for="(text, index) in texts2"
                    :key="index"
                    :class="[
                        'w-full h-fit lg:w-fit lg:max-w-[17.265rem] rounded-3xl py-4 px-6 text-secondaryTheme small-texts text-[0.925rem] md:text-[0.95rem] lg:text-[1rem] font-semibold transitionEffect', text.bg,
                        {
                            'opacity-100 block': currentIndex === index,
                            'opacity-0 hidden': currentIndex !== index
                        }
                    ]"
                >
                    {{ text.title }}
                </article>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const sectionRef = ref(null)
const currentIndex = ref(0)
const isInViewport = ref(false)

const texts1 = [
    { title: 'Personalized Study Paths', bg: 'bg-primaryTheme' },
    { title: 'Mentor Matching', bg: 'bg-[#7B4034]' },
    { title: 'Daily Reminder and Streak Tracking', bg: 'bg-[#112851]' },
    { title: 'One-on-One or Group Mentorship', bg: 'bg-[#6A551B]' }
]

const images = [
    '/images/mobileSnapshot.png',
    '/images/mobileSnapshot2.png', // Replace with actual image paths
    '/images/mobileSnapshot3.png',
    '/images/mobileSnapshot4.png'
]

const texts2 = [
    { title: 'Get Bible content based on your spiritual maturity and interests 1', bg: 'bg-primaryTheme' },
    { title: 'Connect with trusted spiritual mentors who are there to help you grow', bg: 'bg-[#7B4034]' },
    { title: 'Stay consistent with smart notifications and progress tracking', bg: 'bg-[#112851]' },
    { title: 'Join the sessions or get support in your preferred format', bg: 'bg-[#6A551B]' }
]

let animationInterval = null
let observer = null

const startAnimation = () => {
    if (animationInterval) return
    
    animationInterval = setInterval(() => {
        currentIndex.value = (currentIndex.value + 1) % texts1.length
    }, 2500) // Change slide every 2.5 seconds
}

const stopAnimation = () => {
    if (animationInterval) {
        clearInterval(animationInterval)
        animationInterval = null
    }
}

const setupIntersectionObserver = () => {
    observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                isInViewport.value = entry.isIntersecting
                
                if (entry.isIntersecting) {
                    startAnimation()
                } else {
                    stopAnimation()
                }
            })
        },
        {
            threshold: 0.3, // Trigger when 30% of section is visible
            rootMargin: '0px'
        }
    )

    if (sectionRef.value) {
        observer.observe(sectionRef.value)
    }
}

onMounted(() => {
    setupIntersectionObserver()
})

onBeforeUnmount(() => {
    stopAnimation()
    if (observer) {
        observer.disconnect()
    }
})
</script>

<style scoped>
/* Smooth transitions for all animated elements */
.transition-all {
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
</style>
