<template>
   <section class="py-8 md:py-10 lg:py-[6.19rem] flex flex-col lg:flex-row justify-between custom-width gap-8 lg:gap-0 lg:px-0">
      <h2 class="text-terracotaTheme header-text text-[1.75rem] md:text-[2rem] lg:text-[2.5rem] w-full lg:w-[33.67%] text-center lg:text-left leading-tight">
         Contact Us
      </h2>
        <form class="flex flex-col gap-3 md:gap-4 w-full lg:w-auto" @submit.prevent="submit">
         <!-- Full Name -->
         <article class="input-field w-full lg:w-138">
            <label for="name" class="label-text text-terracotaTheme text-sm md:text-base">
            Full Name <span class="text-[#E0745F]">*</span>
            </label>
            <div class="mt-2 md:mt-[0.57rem] py-2 md:py-[0.66rem] px-3 md:px-[0.813rem] rounded-[624.9rem] bg-white border-[#F5D4CD] shadow-[0px_1px_2px_rgba(0,0,0,0.05)] border">
            <input
               type="text"
               id="name"
               class="input-text w-full text-sm md:text-base"
               v-model="form.name"
               required
            />
            </div>
         </article>
      
         <!-- Phone -->
         <article class="input-field w-full lg:w-138">
            <label for="phone" class="label-text text-terracotaTheme text-sm md:text-base">
            Phone Number
            </label>
            <div class="mt-2 md:mt-[0.57rem] py-2 md:py-[0.66rem] px-3 md:px-[0.813rem] rounded-[624.9rem] bg-white border-[#F5D4CD] shadow-[0px_1px_2px_rgba(0,0,0,0.05)] border">
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
            <label for="email" class="label-text text-terracotaTheme text-sm md:text-base">
            Email <span class="text-[#E0745F]">*</span>
            </label>
            <div class="mt-2 md:mt-[0.57rem] py-2 md:py-[0.66rem] px-3 md:px-[0.813rem] rounded-[624.9rem] bg-white border-[#F5D4CD] shadow-[0px_1px_2px_rgba(0,0,0,0.05)] border">
            <input
               type="email"
               id="email"
               placeholder="Aa"
               class="input-text w-full text-sm md:text-base"
               v-model="form.email"
               required
            />
            </div>
         </article>
      
         <!-- Message -->
         <article class="input-field w-full lg:w-138">
            <label for="message" class="label-text text-terracotaTheme text-sm md:text-base">
            Message
            </label>
            <div class="mt-2 md:mt-[0.57rem] py-2 md:py-[0.66rem] px-3 md:px-[0.813rem] rounded-2xl md:rounded-[1.125rem] bg-white border-[#F5D4CD] shadow-[0px_1px_2px_rgba(0,0,0,0.05)] border">
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
            class="w-full bg-[#EAA294] py-2.5 text-center mt-2 md:mt-[0.56rem] rounded-[625rem] text-terracotaTheme text-sm md:text-[1rem] font-medium leading-[1.4rem] hover:opacity-90 transition-opacity disabled:opacity-60 disabled:cursor-not-allowed"
         >
            {{ loading ? 'Sending...' : 'Submit' }}
         </button>
      
      </form>
   </section>
</template>

<script setup>
   import { useFormSubmit } from '@/composables/useFormSubmit'
   
   const { form, submit, loading } = useFormSubmit('GENERAL', {
   successMessage: "Thanks for reaching out! We'll get back to you soon.",
   errorMessage: 'Failed to send your message. Please try again.',
   })
</script>

<style lang="scss" scoped>

</style>