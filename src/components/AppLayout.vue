<template>
  <div class="root">
    <div :style="`background-image: url(${imgUrl})`" class="img"></div>
    <div class="main">
      <el-button class="btn">Get random cocktail</el-button>
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  imgUrl: {
    type: String,
    required: true,
  }
})
</script>

<style lang="sass" scoped>
@import '../assets/styles/main.sass'
.root 
  display: flex
  min-height: 100vh
  background-color: $background

.img 
  width: 50%
  background-repeat: no-repeat
  background-position: 50% 50%
  background-size: cover

.main 
  position: relative
  width: 50%
  padding: 32px 40px

.btn 
  position: absolute
  top: 32px
  right: 40px
  background-color: $accent
  color: $text !important
  border: none
  font-family: 'Raleway'
  font-size: 16px
  font-style: normal
  font-weight: 400
  line-height: normal
  border-color: $accent

  &:hover 
    background: darken($accent,10% )
</style>