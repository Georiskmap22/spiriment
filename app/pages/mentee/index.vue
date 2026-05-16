<template>
  <section class="custom-width pt-[6.63rem] mb-[7.63rem]">
    <div class="w-full md:w-[80%] lg:w-[70%] xl:w-[56.17%] mx-auto text-center">
        <h1 class="header-text text-primaryTheme text-[2rem] md:text-[2.5rem] lg:text-[3rem] leading-tight">
            You Don't Have to <span class="text-[#7B4034]">Grow</span> Alone
        </h1>
        <p class="mt-4 mb-6 small-texts text-[1.125rem] md:text-[1.25rem] lg:text-[1.5rem] text-primaryTheme">
            Spiritual growth is hard when you're on your own. With Spiriment, you'll get personalized Bible study, accountability, and a mentor to walk the journey with you
        </p>
        <div class="flex justify-center">
            <UiDownloadButton :isDark="true" iconTheme="#FFFAEC" class="mx-auto"/>
        </div>
    </div>
    <div class="mt-6 md:mt-8 lg:mt-10 w-full md:w-fit mx-auto">
        <NuxtImg src="/images/heroImage.png" class="w-full md:w-auto max-w-full"/>
    </div>
    <section class="mt-8.5 pt-[3.44rem] pb-[5.88rem]">
        <h2 class="text-[2.5rem] header-text text-primaryTheme mb-33 text-center max-w-158 mx-auto"
        >What You Get as a Mentee</h2>
        <UiOverlappingSlides :slidingCardContents="slidingCardContents"/>
    </section>
    <section>
        <h4 class="font-bold leading-[120%] text-center text-[1.75rem] text-primaryTheme">A Simple Journey for Deep Spiritual Growth</h4>
        <UiOverlappingCards :cardContent="overlappingCardContent"/>
    </section>
  </section>
</template>

<script setup>
const slidingCardContents = [
    {
        id: 1,
        title: 'Track Your Bible Journey',
        description: 'Reflect, take notes, and mark your spiritual progress chapter by chapter',
        cardTheme: '#1D2F21',
         imgSrc: 'mentorProfile.png',
        imgWidth: '60.89%'
    },
    {
        id: 2,
        title: 'Flexible Mentorship Formats',
        description: 'Whether it’s weekly video calls or occasional messages, your mentor fits your rhythm',
        cardTheme: '#7B4034',
         imgSrc: 'romans.png',
        imgWidth: '60.89%'
    },
    {
        id: 3,
        title: 'Explore Topics That Matter to You',
        description: 'Study content around identity, purpose, prayer, leadership, and more',
        cardTheme: '#112851',
         imgSrc: 'streak.png',
        imgWidth: '60.89%'
    },
    {
        id: 4,
        title: 'Stay Accountable, Spiritually and Practically',
        description: 'Build habits, stay encouraged, and keep going even when it’s tough',
        cardTheme: '#6A551B',
         imgSrc: 'conversation.png',
        imgWidth: '60.89%'
    },
]

const overlappingCardContent = [
    {
        id: 1,
        title: 'Set Your Spiritual Goals',
        detail: 'Answer a few questions to personalize your growth path',
        cardColor: '#FFFAEC',
        cardTheme: '#1D2F21',
        imgSrc: ''
    },
    {
        id: 2,
        title: 'Get Matched with a Mentor',
        detail: 'Connect with someone who will walk with you and guide you',
        cardColor: '#FFFAEC',
        cardTheme: '#7B4034',
        imgSrc: ''
    },
    {
        id: 3,
        title: 'Start Studying the Bible',
        detail: 'Track your habits, reflections, and streaks',
        cardColor: '#FFFAEC',
        cardTheme: '#112851',
        imgSrc: ''
    },
    {
        id: 4,
        title: 'Join Group or 1-on-1 Sessions',
        detail: 'Grow deeper with structured and encouraging mentorship',
        cardColor: '#FFFAEC',
        cardTheme: '#6A551B',
        imgSrc: ''
    },
]

</script>

<style lang="scss" scoped>

</style>