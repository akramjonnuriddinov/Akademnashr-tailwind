<template>
  <div class="bg-neutral-800">
    <div class="container relative flex justify-between px-5 py-20 mx-auto">
      <div class="text-white w-96">
        <span class="inline-block w-20 h-1 mb-10 bg-orange-500"></span>
        <h1 class="mb-6 font-bold tracking-wide text-hero-title leading-hero-leading">Pythonda dasturlash asoslari</h1>
        <p class="mb-8 text-base tracking-wide">Dasturlash asoslariga oid o‘zbek tilidagi ilk eng mukammal qo‘llanma. Kitobning har bir bo‘limi uchun maxsus video darslar yozilgan bo‘lib, ularga kitobda ko‘rsatilgan QR kod orqali o‘tish mumkin.</p>
        <Button />
      </div>
      <img class="absolute right-0 hero-img -bottom-15" src="../assets/python-book.png" alt="" width="510" height="510">
    </div>
  </div>
</template>

<script>
import Button from './Button'
export default {
  name: 'App',
  components: {Button}
}
</script>

<style>
.hero-img {
  box-shadow: 24px 24px 0px 0px rgba(255, 117, 0, 0.6);
  border-radius: 8px;
}
</style>