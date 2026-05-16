<template>
    <section class="custom-width pt-8 md:pt-12 lg:pt-[5.94rem] mb-8 md:mb-10 lg:mb-[7.63rem] lg:px-0">
        <div class="w-full md:w-[80%] lg:w-[70%] xl:w-[61.17%] mx-auto text-center pb-8 md:pb-10 lg:pb-[5.88rem]">
            <h1 class="header-text text-terracotaTheme text-[2rem] md:text-[2.5rem] lg:text-[3rem] leading-tight">
                Help us build a platform where anyone can grow in faith.
            </h1>
            <p class="mt-4 md:mt-5 lg:mt-6 mb-6 md:mb-7 lg:mb-8 small-texts text-[1.125rem] md:text-[1.25rem] lg:text-[1.5rem] text-[#4F4F4F]">
                Your support makes it possible for more people to benefit from our platform, deepening their faith through mentorship, study, and daily spiritual habits.
            </p>
            <button class="w-fit mx-auto py-3 px-5 md:py-4 md:px-6 rounded-[6.25rem] text-[#FEFEFD] bg-terracotaTheme font-bold text-[1rem] md:text-[1.25rem] lg:text-[1.5rem] hover:opacity-90 transition-opacity">
                Give Now
            </button>
        </div>
        <section class="pt-8 md:pt-10 lg:pt-[3.44rem]">
            <h4 class="font-bold leading-[120%] text-center text-[1.5rem] md:text-[1.625rem] lg:text-[1.75rem] mb-6 md:mb-8">
                Why Your Donation Matters
            </h4>
            <UiOverlappingCards :cardContent="overlappingCardContent" :showButton="false"
            :isDonatePage="true"
            />
        </section>
  </section>
</template>

<script setup>
const overlappingCardContent = [
    {
        id: 1,
        title: 'Make Disciples Digitally',
        detail: 'Help us connect people with mentors who guide them in the Word of God',
        cardColor: '#FFFAEC',
        cardTheme: '#1D2F21',
        imgSrc: ''
    },
    {
        id: 2,
        title: 'Keep the App Free for All',
        detail: 'Your donation helps us provide spiritual tools and guidance without paywalls',
        cardColor: '#FFFAEC',
        cardTheme: '#7B4034',
        imgSrc: ''
    },
    {
        id: 3,
        title: 'Support a Gospel-Centered Product',
        detail: 'Every line of code, every session, and every study is rooted in Scripture',
        cardColor: '#FFFAEC',
        cardTheme: '#112851',
        imgSrc: ''
    },
    {
        id: 4,
        title: 'Build Infrastructure for Impact',
        detail: 'Donations fund our backend servers, messaging, study tools, and global accessibility',
        cardColor: '#FFFAEC',
        cardTheme: '#6A551B',
        imgSrc: ''
    },
]

</script>

<style lang="scss" scoped>

</style>