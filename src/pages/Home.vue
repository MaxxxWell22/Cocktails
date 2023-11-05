<template>
  <Applayout imgUrl="/src/assets/img/bg1.jpg">
    <div class="wrapper">
      <div class="info">
        <div class="title">Choose your drink</div>
        <div class="line"></div>
        <div class="text">Try our delicious cocktail recipes for every occasion. Find delicious cocktail recipes by ingredient through
          our cocktail generator.</div>
      </div>
    </div>
  </Applayout>
</template>
<script setup>
import Applayout from '../components/AppLayout.vue';
import {useRootStore} from '../stores/root.js'

const rootStore = useRootStore()
rootStore.getIngredients
</script>
<style lang="sass" scoped>
@import '../assets/styles/main'
</style>