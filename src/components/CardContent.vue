<template>
  <div class="card-content" :class="getClasses">
    <span class="card-title" v-if="!!item.title">Card Title</span>
    {{item.text}}
  </div>
</template>

<script>
  import BaseComponent from './mixins/BaseComponent.js'

  export default {
    mixins: [BaseComponent]
  }
</script>
