<template>
  <section>
   <div class="pt-8 md:pt-12 lg:pt-20 pb-8 md:pb-12 lg:pb-18.5">
      <div class="custom-width">
         <div>
            <NuxtImg src="/icons/aboutPageLogo.svg" class="w-16 md:w-20 lg:w-[8.66rem] mx-auto mb-4 md:mb-5 lg:mb-6"/>
            <div class="w-full md:w-[80%] lg:w-[70%] xl:w-[56.17%] mx-auto text-center md:px-0">
               <h1 class="header-text text-[2rem] md:text-[2.5rem] lg:text-[3rem] text-primaryTheme mb-4 leading-tight">Spiritual growth shouldn't be left to chance</h1>
               <p class="small-texts text-[1.125rem] md:text-[1.25rem] lg:text-[1.5rem] text-primaryTheme">
                  Too many believers are trying to grow without guidance. Too many mentors are burdened by the weight of serving without structure. And too often, busy schedules make meaningful discipleship feel impossible.
                  <br class="hidden md:block">
                  <br class="hidden md:block">
                  We've seen young Christians feeling lost without someone to talk to. Mentors trying to keep up with multiple people through texts, spreadsheets, and scattered calls.
                  <br class="hidden md:block">
                  <br class="hidden md:block">
                  Even spiritually mature believers struggle to stay consistent in the studying of the Word.
               </p>
            </div>
         </div>
      </div>
      <div class="my-8 md:my-10 lg:my-[4.4825rem] flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-9.25 w-full justify-center items-center">
         <NuxtImg src="/images/about1.png" class="w-full md:w-auto max-w-full md:max-w-100"/>
         <NuxtImg src="/images/about3.png" class="w-full md:w-auto max-w-full md:max-w-125 md:order-0"/>
         <NuxtImg src="/images/about2.png" class="w-full md:w-auto max-w-full md:max-w-100"/>
      </div>
       <div class="custom-width mt-8 md:mt-10">
          <div class="w-full md:w-[80%] lg:w-[70%] xl:w-[56.17%] mx-auto text-center">
             <h1 class="header-text text-[1.75rem] md:text-[1.875rem] lg:text-[2.0625rem] text-primaryTheme mb-4 leading-tight">Technology has given us a way to do it better</h1>
             <p class="small-texts text-[1.125rem] md:text-[1.25rem] lg:text-[1.5rem] text-primaryTheme">
               Spiriment was born out of a real need to make discipleship more <span class="font-bold">accessible</span>, <span class="font-bold">consistent</span>, and <span class="font-bold">trackable</span>.
               <br class="hidden md:block">
               We created a digital space where mentorship can happen without friction and where Bible reading doesn't fall through the cracks.
             </p>
          </div>
      </div>
   </div>
   
   <div class="pt-8 md:pt-10 lg:pt-10 pb-8 md:pb-10 lg:pb-12">
      <h3 class="w-full md:w-[80%] lg:w-[70%] xl:w-[47.92%] mx-auto header-text text-[1.75rem] md:text-[1.875rem] lg:text-[2.0625rem] text-primaryTheme mb-6 text-center leading-tight">
         We're redefining how mentorship, study, and accountability work together
      </h3>
      <div class="pl-4 md:pl-8 lg:pl-32 flex items-stretch gap-4 md:gap-5 lg:gap-6 overflow-x-auto hide-scrollbar snap-x snap-mandatory">
         <article 
         v-for="item in mentorshipPoints"
         :key="item.id"
         class="basis-[85%] md:basis-[60%] lg:basis-[40%] shrink-0 bg-[#FEEFC4] p-4 md:p-5 lg:p-6 rounded-2xl snap-start">
            <h6 class="header-text text-primaryTheme mb-2 text-[1.25rem] md:text-[1.375rem] lg:text-[1.5rem]">
               {{ item.title }}
            </h6>
            <p class="small-texts text-[1rem] md:text-[1.1rem] lg:text-[1.2rem] text-primaryTheme">
             {{ item.description }}
            </p>
         </article>
      </div>
   </div>
   
   <div class="custom-width py-8 md:py-10 lg:py-10 lg:px-0">
      <h3 class="header-text text-center text-[1.75rem] md:text-[1.875rem] lg:text-[2.063rem] text-primaryTheme mb-8 md:mb-10 lg:mb-12 leading-tight">
         We exist to help believers grow consistently in their walk with Christ through mentorship and Scripture
      </h3>
      <div class="flex flex-col lg:flex-row items-stretch gap-4 md:gap-5 lg:gap-6 justify-center">
         <article class="flex-1 flex flex-col gap-2 bg-[#FEEFC4] p-4 md:p-5 lg:p-6 rounded-2xl">
            <h6 class="header-text text-primaryTheme text-[1.25rem] md:text-[1.375rem] lg:text-[1.5rem]">
               Vision
            </h6>
            <p class="small-texts text-[1rem] md:text-[1.1rem] lg:text-[1.2rem] text-primaryTheme">
               To see a global community of spiritually mature believers who grow,
               disciple, and stay rooted in the Word — one conversation at a time.
            </p>
         </article>

         <article class="flex-1 flex flex-col gap-2 bg-[#FEEFC4] p-4 md:p-5 lg:p-6 rounded-2xl">
            <h6 class="header-text text-primaryTheme text-[1.25rem] md:text-[1.375rem] lg:text-[1.5rem]">
               Mission
            </h6>
            <ul class="list-disc list-inside small-texts text-[1rem] md:text-[1.1rem] lg:text-[1.2rem] text-primaryTheme space-y-2">
               <li>To help Christians build lasting bible study habits with accountability</li>
               <li>To make spiritual mentorship accessible to anyone, anywhere</li>
               <li>To equip mentors with the tools they need to disciple at scale</li>
            </ul>
         </article>
      </div>
   </div>
   
    <section class="py-8 md:py-10 lg:py-[6.19rem] flex flex-col lg:flex-row justify-between custom-width gap-8 lg:gap-0 lg:px-0">
      <h2 class="text-terracotaTheme header-text text-[1.75rem] md:text-[2rem] lg:text-[2.5rem] w-full lg:w-[33.67%] text-center lg:text-left leading-tight">
         Contact Us
      </h2>
      <form class="flex flex-col gap-3 md:gap-4 w-full lg:w-auto">
            <article class="input-field w-full lg:w-138">
               <label for="organization" class="label-text text-terracotaTheme text-sm md:text-base">Full Name <span class="text-[#E0745F]">*</span></label>
               <div class="mt-2 md:mt-[0.57rem] py-2 md:py-[0.66rem] px-3 md:px-[0.813rem] rounded-[624.9rem] bg-white border-[#F5D4CD] shadow-[0px_1px_2px_rgba(0,0,0,0.05)] border">
                  <input type="text" name="organization" id="organization" class="input-text w-full text-sm md:text-base">
               </div>
            </article>
            <article class="input-field w-full lg:w-138">
               <label for="phone" class="label-text text-terracotaTheme text-sm md:text-base">Phone Number</label>
               <div class="mt-2 md:mt-[0.57rem] py-2 md:py-[0.66rem] px-3 md:px-[0.813rem] rounded-[624.9rem] bg-white border-[#F5D4CD] shadow-[0px_1px_2px_rgba(0,0,0,0.05)] border">
                  <input type="number" name="phone" id="phone" class="input-text w-full text-sm md:text-base">
               </div>
            </article>
            <article class="input-field w-full lg:w-138">
               <label for="mail" class="label-text text-terracotaTheme text-sm md:text-base">Email <span class="text-[#E0745F]">*</span></label>
               <div class="mt-2 md:mt-[0.57rem] py-2 md:py-[0.66rem] px-3 md:px-[0.813rem] rounded-[624.9rem] bg-white border-[#F5D4CD] shadow-[0px_1px_2px_rgba(0,0,0,0.05)] border">
                  <input type="email" name="mail" id="mail" placeholder="Aa" class="input-text w-full text-sm md:text-base">
               </div>
            </article>
            <article class="input-field w-full lg:w-138">
               <label for="message" class="label-text text-terracotaTheme text-sm md:text-base">Message</label>
               <div class="mt-2 md:mt-[0.57rem] py-2 md:py-[0.66rem] px-3 md:px-[0.813rem] rounded-[1rem] md:rounded-[1.125rem] bg-white border-[#F5D4CD] shadow-[0px_1px_2px_rgba(0,0,0,0.05)] border">
                  <textarea name="message" id="message" cols="30" rows="6" class="input-text w-full text-sm md:text-base resize-none" placeholder="Aa"></textarea>
               </div>
            </article>
            <button class="w-full bg-[#EAA294] py-2.5 text-center mt-2 md:mt-[0.56rem] rounded-[625rem] text-terracotaTheme text-sm md:text-[1rem] font-medium leading-[1.4rem] hover:opacity-90 transition-opacity">Submit</button>
         </form>
      </section>
  </section>
</template>


<script setup>
const mentorshipPoints = [
   {
      id: 1,
      title: 'One-on-One Mentorship, Reinvented',
      description: 'Structured conversations, study prompts, and real connection without the chaos.'
   },
   {
      id: 2,
      title: 'Spiritual Growth You Can See',
      description: 'Track Bible readings, reflection streaks, goals, and actual progress.'
   },
   {
      id: 1,
      title: 'Flexible for Real Life',
      description: 'Mentees and mentors can meet wherever they are — phone in hand, Bible in heart.'
   }
]

</script>

<style lang="scss" scoped>

</style>