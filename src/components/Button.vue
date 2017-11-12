<template>
  <a class="btn" :class="getClasses">{{item.content}}</a>
</template>

<script>
  import BaseComponent from './mixins/BaseComponent.js'

  export default {
    mixins: [BaseComponent]
  }
</script>
