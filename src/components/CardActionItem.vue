<template>
  <a :class="getClasses" :href="item.href">{{item.text}}</a>
</template>

<script>
  import BaseComponent from './mixins/BaseComponent.js'

  export default {
    mixins: [BaseComponent]
  }
</script>
