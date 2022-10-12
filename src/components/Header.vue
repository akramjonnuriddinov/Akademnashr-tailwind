<template>
  <header class="border-t-4 border-orange-500">
    <div class="container flex items-center px-5 py-4 mx-auto">
      <a class="flex mr-5 transition-all hover:opacity-80 active:opacity-60" href="#">
        <img src="../assets/logo.svg" alt="">
      </a>
      <nav class="ml-auto mr-8">
        <ul class="flex">
          <li class="mr-8 last:mr-0" v-for="link in links">
            <a class="py-1 font-medium text-black uppercase transition-all border-b-2 border-transparent hover:border-orange-500 hover:text-orange-500" href="#">{{ link }}</a>
          </li>
        </ul>
      </nav>
      <Button />
    </div>
  </header>
</template>

<script>
import Button from './Button.vue';
export default {
  name: "App",
  data() {
      return {
        links: ["bosh sahifa", "kitoblar", "aksiyalar", "kontaktlar"]
      };
  },
  components: { Button }
}
</script>