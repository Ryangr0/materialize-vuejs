<template>
  <div class="card-image" :class="getClasses">
    <img :src="item.url" v-if="!!item.url">
    <span class="card-title" v-if="!!item.title">Card Title</span>
  </div>
</template>

<script>
  import BaseComponent from './mixins/BaseComponent.js'

  export default {
    mixins: [BaseComponent]
  }
</script>
