<template>
  <div>
    <Header />
    <main>
      <Hero />
      <Features />
      <Action />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features.vue';
import Action from './components/Action.vue'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: { Header, Hero, Features, Action, Footer }
}
</script>

<style>

</style>
