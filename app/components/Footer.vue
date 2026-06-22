<template>
    <footer class="w-full bg-primaryTheme">
        <section class="footer-center custom-width pt-8 md:pt-10 lg:pt-[4.19rem] px-4 lg:px-0">
            <div class="top-section flex flex-col lg:flex-row basic-flex justify-between gap-8 lg:gap-0">
                <div class="w-full lg:w-119 text-secondaryTheme text-center lg:text-left">
                    <h1 class="font-bold text-[2rem] md:text-[2.5rem] lg:text-[3rem] leading-[120%] mb-4 leading-tight">Start Your Journey Today</h1>
                    <p class="small-texts text-[1.125rem] md:text-[1.25rem] lg:text-[1.5rem] font-semibold mb-6">
                        Spiritual growth takes intentionality and we're building the tools to help you thrive every day
                    </p>
                    <div class="flex justify-center lg:justify-start">
                        <UiDownloadButton :isDark="false" iconTheme="#1D2F21"/>
                    </div>
                </div>
                <div class="relative w-full lg:w-auto mt-8 lg:mt-0">
                    <div 
                    class="absolute w-full h-full bg-[linear-gradient(to_top,#1D2F21,transparent,transparent,transparent,transparent,transparent,transparent,transparent)]"
                    >
                    </div>
                    <NuxtImg src="/images/footerImg.png" class="w-full lg:max-w-[27.69rem] max-w-full mx-auto"/>
                </div>
            </div>
            <div class="bottom-section py-8 md:py-10 lg:py-11">
                <div class="top-row flex flex-col lg:flex-row justify-between gap-8 lg:gap-0 mb-8 md:mb-12 lg:mb-39.5">
                    <div class="text-center lg:text-left">
                        <div class="footer-logo mb-4 md:mb-5 lg:mb-6 flex justify-center lg:justify-start">
                            <NuxtImg src="/icons/logoLight.svg" class="w-32 md:w-40 lg:w-45.25"/>
                        </div>
                        <div class="social-links text-secondaryTheme basic-flex gap-4 justify-center">
                            <a href="https://www.instagram.com/spiriment_" target="_blank">
                                <Icon name="teenyicons:instagram-solid" size="30"/>
                            </a>
                            <a href="https://www.tiktok.com/@spiriment_" target="_blank">
                                <Icon name="ic:baseline-tiktok" size="30"/>
                            </a>
                            <a href="https://x.com/spiriment_" target="_blank">
                                <Icon name="prime:twitter" size="30"/>
                            </a>
                            <a href="https://www.linkedin.com/company/spiriment/" target="_blank">
                                <Icon name="uiw:linkedin" size="30"/>
                            </a>
                            <!-- <Icon name="uiw:facebook" size="30"/> -->
                        </div>
                    </div>
                    <div class="flex flex-col sm:flex-row gap-8 md:gap-12 lg:gap-17 sm:justify-center">
                        <article
                        v-for="item in footerLinks"
                        :key="item.id"
                        class="text-center sm:text-left"
                        >
                            <h6 class="font-bold text-[1.125rem] md:text-[1.19rem] leading-[120%] text-secondaryTheme mb-4 md:mb-6 lg:mb-8">{{ item.title }}</h6>
                            <ul class="flex flex-col gap-3 md:gap-4 small-texts text-[1rem] md:text-[1.125rem] lg:text-[1.5rem] text-secondaryTextTheme">
                                <li
                                v-for="(path,index) in item.paths"
                                :key="index"
                                >
                                <nuxt-link :to="path.route" class="hover:text-secondaryTheme transitionEffect transition-colors">
                                    {{ path.name }}
                                </nuxt-link>
                            </li>
                            </ul>
                        </article>
                    </div>
                </div>
                <div class="bottom-row flex flex-col lg:flex-row justify-between items-center lg:items-end gap-6 lg:gap-0">
                    <div class="flex flex-col gap-3 md:gap-4 w-full lg:w-auto">
                        <label for="email" class="uppercase header-text text-[0.875rem] md:text-[1rem] text-primaryWhite text-center lg:text-left">Enter email for updates</label>
                        <div class="bg-[#2F4E37] p-3 md:p-4 rounded-[6.25rem] basic-flex justify-between w-full lg:w-[20.19rem]">
                            <input type="email" name="email" id="email" class="small-texts text-[0.875rem] md:text-[1rem] lg:text-[1.125rem] text-secondaryTextTheme bg-transparent focus:outline-none w-full" placeholder="Enter email address">
                            <Icon name="raphael:arrowright" size="30" class="text-secondaryTextTheme"/>
                            <!-- <span class="w-5 h-5 md:w-6.5 md:h-6.5 rounded-full bg-secondaryTextTheme flex-shrink-0"></span> -->
                        </div>
                    </div>
                    <div class="small-texts text-[0.875rem] md:text-[1rem] lg:text-[1.125rem] text-secondaryTextTheme flex flex-col sm:flex-row gap-4 sm:gap-6 text-center sm:text-left">
                        <button class="underline hover:text-secondaryTheme transition-colors">
                            <nuxt-link to="/privacy">
                                Privacy Policy
                            </nuxt-link>
                        </button>
                        <button class="underline hover:text-secondaryTheme transition-colors">
                            <nuxt-link to="/terms">
                                Terms
                            </nuxt-link>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    </footer>
</template>

<script setup>
const footerLinks = [
    {
        id: 1,
        title: 'Mentorship',
        paths: [
            {
                name: 'For Mentees',
                route: '/mentee'
            },
            {
                name: 'For Mentors',
                route: '/mentor'
            }
        ]
    },
    {
        id: 2,
        title: 'Quicklinks',
        paths: [
            {
                name: 'Donate',
                route: '/donate'
            },
            {
                name: 'Volunteer',
                route: '/volunteer'
            },
            {
                name: 'Shop',
                route: '/shop'
            },
            {
                name: 'Partnerships',
                route: '/partnerships'
            },
            {
                name: 'FAQ',
                route: '/faq'
            },
        ]
    },
    {
        id: 3,
        title: 'Company',
        paths: [
            {
                name: 'About',
                route: '/about'
            },
            // {
            //     name: 'Contact',
            //     route: '/contact'
            // },
        ]
    },

]

</script>

<style lang="scss" scoped>

</style>