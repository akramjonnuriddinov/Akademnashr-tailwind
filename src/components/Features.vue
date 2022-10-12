<template>
  <section>
    <div class="container px-5 mx-auto pt-52 pb-80">
      <span class="inline-block w-20 h-1 mb-6 bg-orange-500"></span>
      <h1 class="font-bold text-black text-7xl w-109 leading-medium mb-18">Nega aynan Akademnashr?</h1>
      <ul class="flex justify-between">
        <li class="mr-5 w-80" v-for="feature in features">
          <img class="mb-8" src="../assets/feature-icon-1.svg" alt="">
          <h3 class="mb-3 text-2xl font-bold text-black">{{ feature.title }}</h3>
          <p class="text-base text-black leading-medium">{{ feature.text }}</p>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      features: [
        {title: 'Oson buyurtma qilish', text: 'Akademnashr.uz saytidan o’zingizga yoqqan kitobni sodda usulda buyurtma qila olasiz.'},
        {title: 'Eng sara kitoblar', text: 'Trenddagi eng ommabop, turli auditoriyalarga mo’ljallangan har xil janrdagi kitoblarni topa olasiz.'},
        {title: 'Tez yetkazib berish', text: 'O’zbekistonning ixtiyoriy hududiga 3 ish kuni ichida, xalqaro buyurtmalarni 10 ish kuni ichida yetkazib beriladi.'}
      ]
    }
  }
}
</script>