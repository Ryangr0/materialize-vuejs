<template>
  <a :href="item.href" class="breadcrumb" :class="getClasses">{{item.text}}</a>
</template>

<script>
  import BaseComponent from './mixins/BaseComponent.js'

  export default {
    mixins: [BaseComponent]
  }
</script>
