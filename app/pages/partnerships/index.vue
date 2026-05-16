<template>
    <section class="bg-darkTheme">
        <section class="custom-width pt-[6.63rem] md:pt-12 lg:pt-[6.63rem] pb-8 md:pb-10 lg:pb-[7.63rem] lg:px-0">
          <div class="w-full md:w-[85%] lg:w-[80%] xl:w-[71.5%] mx-auto text-center">
              <h1 class="header-text text-secondaryTheme text-[2rem] md:text-[2.5rem] lg:text-[3rem] leading-tight">
                  Partner with us to equip more <br class="hidden md:block"> believers for lasting spiritual growth
              </h1>
              <p class="mt-4 md:mt-6 lg:mt-8 mb-6 md:mb-8 lg:mb-10 small-texts text-[1.125rem] md:text-[1.25rem] lg:text-[1.5rem] text-secondaryTheme">
                  Whether you're a church, ministry, or discipleship-driven community, <br class="hidden md:block"> Spiriment gives you tools to support and strengthen the people you lead
              </p>
              <div class="flex justify-center">
                  <UiDownloadButton :isDark="false" iconTheme="#162419" class="mx-auto"/>
              </div>
          </div>
          <div class="mt-8 md:mt-10 lg:mt-15 w-full md:w-fit mx-auto">
              <NuxtImg src="/images/partnership.png" class="w-full md:w-auto max-w-full"/>
          </div>
          
          <section class="mt-8 md:mt-12 lg:mt-16.25 pt-8 md:pt-10 lg:pt-[3.44rem] pb-8 md:pb-10 lg:pb-[5.88rem]">
              <h2 class="text-[1.75rem] md:text-[2rem] lg:text-[2.5rem] header-text text-secondaryTheme mb-6 md:mb-7 lg:mb-9 text-center max-w-full md:max-w-[85%] lg:max-w-[80%] xl:max-w-[70%] mx-auto leading-[140%] md:leading-[150%] lg:leading-[160%]">
                  If you lead people in the Word, we're building this with you in mind
              </h2>
              <UiOverlappingSlides :slidingCardContents="slidingCardContents"/>
          </section>
          
          <section class="pt-8 md:pt-10 lg:pt-13.5">
              <h4 class="text-[1.75rem] md:text-[2rem] lg:text-[2.5rem] header-text text-secondaryTheme mb-6 md:mb-7 lg:mb-9 text-center max-w-full md:max-w-[85%] lg:max-w-[80%] xl:max-w-[70%] mx-auto leading-[140%] md:leading-[150%] lg:leading-[160%]">
                  Tools that strengthen your mission and <br class="hidden md:block"> multiply your impact
              </h4>
              <UiOverlappingCards :cardContent="overlappingCardContent" :isPartnership="true" :showButton="false"/>
          </section>
          
          <section class="py-8 md:py-10 lg:py-[6.19rem] flex flex-col lg:flex-row justify-between gap-8 lg:gap-0">
              <h2 class="text-primaryWhite header-text text-[1.75rem] md:text-[2rem] lg:text-[2.5rem] w-full lg:w-[33.67%] text-center lg:text-left leading-tight">
                  Ready to partner?
              </h2>
                <form class="flex flex-col gap-3 md:gap-4 w-full lg:w-auto" @submit.prevent="submit">
                    <!-- Full Name / Organization -->
                    <article class="input-field w-full lg:w-138">
                    <label for="organization" class="label-text text-sm md:text-base">
                        Full Name/Organization <span class="text-[#E0745F]">*</span>
                    </label>
                    <div class="mt-2 md:mt-[0.57rem] py-2 md:py-[0.66rem] px-3 md:px-[0.813rem] rounded-[624.9rem] bg-white">
                        <input
                        type="text"
                        id="organization"
                        class="input-text w-full text-sm md:text-base"
                        v-model="form.name"
                        required
                        />
                    </div>
                    </article>
                
                    <!-- Phone -->
                    <article class="input-field w-full lg:w-138">
                    <label for="phone" class="label-text text-sm md:text-base">Phone Number</label>
                    <div class="mt-2 md:mt-[0.57rem] py-2 md:py-[0.66rem] px-3 md:px-[0.813rem] rounded-[624.9rem] bg-white">
                        <input
                        type="tel"
                        id="phone"
                        class="input-text w-full text-sm md:text-base"
                        v-model="form.phone"
                        />
                    </div>
                    </article>
                
                    <!-- Email -->
                    <article class="input-field w-full lg:w-138">
                    <label for="mail" class="label-text text-sm md:text-base">
                        Email <span class="text-[#E0745F]">*</span>
                    </label>
                    <div class="mt-2 md:mt-[0.57rem] py-2 md:py-[0.66rem] px-3 md:px-[0.813rem] rounded-[624.9rem] bg-white">
                        <input
                        type="email"
                        id="mail"
                        placeholder="Aa"
                        class="input-text w-full text-sm md:text-base"
                        v-model="form.email"
                        required
                        />
                    </div>
                    </article>
                
                    <!-- Partnership Type -->
                    <article class="input-field w-full lg:w-138">
                    <label for="partnershipType" class="label-text text-sm md:text-base">
                        Type of partnership (church, ministry, fellowship, org., etc.)
                    </label>
                    <div class="mt-2 md:mt-[0.57rem] py-2 md:py-[0.66rem] px-3 md:px-[0.813rem] rounded-[624.9rem] bg-white">
                        <input
                        type="text"
                        id="partnershipType"
                        placeholder="Aa"
                        class="input-text w-full text-sm md:text-base"
                        v-model="form.partnershipType"
                        />
                    </div>
                    </article>
                
                    <!-- Message -->
                    <article class="input-field w-full lg:w-138">
                    <label for="message" class="label-text text-sm md:text-base">
                        Message / Interest summary
                    </label>
                    <div class="mt-2 md:mt-[0.57rem] py-2 md:py-[0.66rem] px-3 md:px-[0.813rem] rounded-2xl md:rounded-[1.125rem] bg-white">
                        <textarea
                        id="message"
                        cols="30"
                        rows="6"
                        placeholder="Aa"
                        class="input-text w-full text-sm md:text-base resize-none"
                        v-model="form.message"
                        />
                    </div>
                    </article>
                
                    <button
                    type="submit"
                    :disabled="loading"
                    class="w-full bg-[#A2B1A5] py-2.5 text-center mt-2 md:mt-[0.56rem] rounded-[625rem] text-darkTheme text-sm md:text-[1rem] font-medium leading-[1.4rem] hover:opacity-90 transition-opacity disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                    {{ loading ? 'Sending...' : 'Send Request' }}
                    </button>
                
                </form>
          </section>
        </section>
    </section>
</template>

<script setup>
import { useFormSubmit } from '@/composables/useFormSubmit'

const slidingCardContents = [
    {
        id: 1,
        title: 'Churches',
        description: 'Help members grow spiritually beyond Sundays',
        cardTheme: '#A2B1A5',
        textTheme: '#162419',
         imgSrc: 'partnership1.png',
        imgWidth: '100%'
    },
    {
        id: 2,
        title: 'Campus Fellowships',
        description: 'Provide mentorship and study tools for students',
        cardTheme: '#FEEFC4',
        textTheme: '#6A551B',
         imgSrc: 'partnership2.png',
        imgWidth: '100%'
    },
    {
        id: 3,
        title: 'Discipleship Ministries',
        description: 'Extend your reach with scalable mentoring tools',
        cardTheme: '#98ABCD',
        textTheme: '#0D1F3E',
         imgSrc: 'partnership3.png',
        imgWidth: '100%'
    },
    {
        id: 4,
        title: 'Small Group Networks',
        description: 'Bring structure, study plans, and accountability to your groups',
        cardTheme: '#F5D4CD',
        textTheme: '#5E3128',
        imgSrc: 'partnership4.png',
        imgWidth: '100%'
    },
]

const overlappingCardContent = [
    {
        id: 1,
        title: 'Mentor Tools',
        detail: 'Track mentee growth, respond to study activity, schedule check-ins',
        cardColor: '#162419',
        textTheme: '#162419',
        cardTheme: '#A2B1A5',
        imgSrc: ''
    },
    {
        id: 2,
        title: 'Custom Resources',
        detail: 'Option to integrate your teachings into the platform',
        cardColor: '#5E3128',
        textTheme: '#5E3128',
        cardTheme: '#F5D4CD',
        imgSrc: ''
    },
    {
        id: 3,
        title: 'Analytics & Feedback',
        detail: 'Visual reports of community engagement and growth',
        cardColor: '#0D1F3E',
        textTheme: '#0D1F3E',
        cardTheme: '#BAC7DE',
        imgSrc: ''
    },
    {
        id: 4,
        title: 'Support & Collaboration',
        detail: 'Dedicated channel for feedback, requests, and joint campaigns',
        cardColor: '#6A551B',
        textTheme: '#6A551B',
        cardTheme: '#FFFAEC',
        imgSrc: ''
    },
]
 
const { form, submit, loading } = useFormSubmit('PARTNERSHIP', {
  successMessage: "Your partnership request has been sent! We'll be in touch soon.",
  errorMessage: 'Failed to send your request. Please try again.',
  extraFields: { partnershipType: '' },
})

</script>

<style lang="scss" scoped>

</style>