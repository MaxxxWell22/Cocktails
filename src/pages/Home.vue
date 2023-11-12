<template>
  <Applayout imgUrl="/src/assets/img/bg1.jpg">
    <div class="wrapper">
      <div v-if="!ingredient || !cocktails" class="info">
        <div class="title">Choose your drink</div>
        <div class="line"></div>
        <div class="select-wrapper">
          <el-select v-model="ingredient" @change="getCocktails" placeholder="Choose main ingredient" size="large"
            class="select">
            <el-option v-for="item in ingredients" :key="item.strIngredient1" :label="item.strIngredient1"
              :value="item.strIngredient1" />
          </el-select>
        </div>
        <div class="text">
          Try our delicious cocktail recipes for every occasion. Find delicious cocktail recipes by
          ingredient through
          our cocktail generator.
        </div>
        <img class="imgCocktails" src="/src/assets/img/cocktails.png" alt="cocktails" />
      </div>
      <div v-else class="info">
        <div class="title">Cocktail with {{ ingredient }}</div>
        <div class="line"></div>
        <div class="cocktails">

        </div>
      </div>
    </div>
  </Applayout>
</template>
<script setup>
import Applayout from '../components/AppLayout.vue';
import { useRootStore } from '../stores/root.js';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';

const rootStore = useRootStore();
rootStore.getIngredients();
const { ingredients, cocktails } = storeToRefs(rootStore);
const ingredient = ref(null)

const getCocktails = () => {
  rootStore.getCocktails(ingredient.value)
}
</script>

<style lang="sass" scoped>
@import '../assets/styles/main'
.wrapper
    display: flex
    justify-content: center
    align-items: center
.info 
    padding: 80px 0
    text-align: center
.select-wrapper 
    padding-top: 50px
.select 
    width: 220px

.text
  max-width: 516px
  margin: 0 auto
  padding-top: 50px
  line-height: 36px
  letter-spacing: 0.1em
  color: $textMuted

.imgCocktails 
  margin-top: 60px
</style>