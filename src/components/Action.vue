<template>
  <section class="mb-40">
    <div class="container px-5 mx-auto">
      <div class="relative flex px-16 py-16 text-white rounded-xl bg-neutral-800">
        <div class="w-96">
          <h2 class="mb-6 font-bold text-hero-title leading-hero-leading">Bolalar kitoblari uchun ajoyib aksiya!</h2>
          <p class="text-base">Ertaklar, she’rlar, sarguzasht asarlar, fikrlashni o’stirish uchun turli mashq qo’llanmalari va komikslar.</p>
          <p class="mb-6 text-base">Aksiyadagi eng katta to’plamda <span class="text-orange-500">50 ta kitob</span> ni <span class="text-orange-500">350 ming</span> so’mga (aslida 383 ming so’m) sotib olishingiz mumkin.</p>
          <Button />
        </div>
        <img class="absolute -top-20 rounded-xl right-16" src="../assets/action.jpg" alt="">
      </div>
    </div>
  </section>
</template>

<script setup>
import Button from './Button'
</script>